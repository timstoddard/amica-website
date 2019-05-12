import * as React from 'react'
import { AbstractControl, FieldControl, FieldGroup, FormBuilder, FormGroup } from 'react-reactive-form'
import Checkbox from '../shared/components/checkbox/Checkbox'
import Textbox from '../shared/components/textbox/Textbox'
import { DevGameState, FieldControlMeta, GameState } from '../shared/types'
import GameStateCard from './game-state-card/GameStateCard'
import SelectedState from './selected-state/SelectedState'

const styles = require('./scss/AdventureCreator.scss') // tslint:disable-line no-var-requires

const getSelectedGameState = (gameStates: GameState[], selectedId: string) => {
  const selectedState = gameStates.find((state: GameState) => state.id === selectedId)
  return selectedState || null
}

const convertToDevGameState = (gameState: GameState, allStates: GameState[]) => {
  if (!gameState) {
    return null
  }

  let base: DevGameState
  if (gameState.isFinal) {
    base = {
      id: gameState.id,
      description: gameState.description,
      imageSrc: gameState.imageSrc,
      imageAlt: gameState.imageAlt,
      isFinal: gameState.isFinal,
      nextGameLink: gameState.nextGameLink,
    }
  } else if (gameState.isFinal === false) {
    base = {
      id: gameState.id,
      description: gameState.description,
      imageSrc: gameState.imageSrc,
      imageAlt: gameState.imageAlt,
      isFinal: gameState.isFinal,
      choice1: gameState.choice1,
      choice2: gameState.choice2,
      choice1State: null,
      choice2State: null,
    }
    const choice1State = getSelectedGameState(allStates, gameState.choice1StateId)
    const choice2State = getSelectedGameState(allStates, gameState.choice2StateId)
    base.choice1State = convertToDevGameState(choice1State, allStates)
    base.choice2State = convertToDevGameState(choice2State, allStates)
  }
  return base
}

export type ChildChoiceToAdd = 0 | 1 | 2

interface State {
  gameStates: GameState[]
  selectedId: string
  uniqueId: number
  showIsFinalForm: boolean
  childChoiceToAdd: ChildChoiceToAdd
  isFullscreen: boolean
}

export default class AdventureCreator extends React.Component<{}, State> {
  form: FormGroup = FormBuilder.group({
    description: [''/*, Validators.required*/],
    imageSrc: [''/*, Validators.required*/],
    imageAlt: [''/*, Validators.required*/],
    isFinal: false,
    choice1: [''/*, Validators.required*/],
    choice2: [''/*, Validators.required*/],
    choice1StateId: '',
    choice2StateId: '',
    nextGameLink: [''/*, Validators.required*/],
  })

  constructor(props: {} = {}) {
    super(props)

    this.state = {
      gameStates: [
        {
          id: '1',
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: '2',
          choice2StateId: '3',
        },
        {
          id: '2',
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: '6',
          choice2StateId: '7',
        },
        {
          id: '3',
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: '4',
          choice2StateId: '5',
        },
        {
          id: '4',
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: null,
          choice2StateId: null,
        },
        {
          id: '5',
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: null,
          choice2StateId: null,
        },
        {
          id: '6',
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: null,
          choice2StateId: null,
        },
        {
          id: '7',
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: '8',
          choice2StateId: null,
        },
        {
          id: '8',
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: null,
          choice2StateId: null,
        },
      ],
      selectedId: '',
      uniqueId: 100, // 1,
      showIsFinalForm: false,
      childChoiceToAdd: 0,
      isFullscreen: false,
    }
  }

  componentDidMount = () => {
    // TODO does this handle unsubscribing?
    this.form.get('isFinal').valueChanges.subscribe((value: boolean) => {
      this.setState({ showIsFinalForm: value })
    })
  }

  selectGameState = (id: string) => () => {
    const {
      gameStates,
    } = this.state
    this.setState({
      selectedId: id,
      childChoiceToAdd: 0,
    })
    this.resetForm()
    this.form.patchValue(getSelectedGameState(gameStates, id))
  }

  setChildChoiceToAdd = (childChoiceToAdd: ChildChoiceToAdd) => () => {
    this.setState({ childChoiceToAdd })
    this.resetForm()
  }

  resetForm = () => {
    this.form.reset({
      description: '',
      imageSrc: '',
      imageAlt: '',
      isFinal: false,
      choice1: '',
      choice2: '',
      choice1StateId: '',
      choice2StateId: '',
      nextGameLink: '',
    })
  }

  toggleFullscreen = () => () => {
    const { isFullscreen } = this.state
    this.setState({ isFullscreen: !isFullscreen })
  }

  submitForm = (e: React.SyntheticEvent) => {
    e.preventDefault()

    const {
      gameStates,
      selectedId,
      uniqueId,
      childChoiceToAdd,
    } = this.state
    const {
      description,
      imageSrc,
      imageAlt,
      isFinal,
      choice1,
      choice2,
      choice1StateId,
      choice2StateId,
      nextGameLink,
    } = this.form.value
    // this.resetForm() // TODO is this useful?

    const data: GameState = Object.assign({
      id: childChoiceToAdd > 0 ? uniqueId.toString() : selectedId || uniqueId.toString(),
      description,
      imageSrc,
      imageAlt,
      isFinal,
    }, !isFinal ? {
      choice1,
      choice2,
      choice1StateId,
      choice2StateId,
    } : {
      nextGameLink,
    })

    const updatedStates: GameState[] = gameStates.map((state: GameState) => {
      // if this state is being edited
      if (state.id === selectedId) {
        // if not adding a child, update the existing state
        if (childChoiceToAdd === 0) {
          return Object.assign({ ...state }, data)
        }
        // otherwise, add the child choice to its parent
        return Object.assign({ ...state }, childChoiceToAdd === 1 ? {
          choice1StateId: data.id,
        } : {
          choice2StateId: data.id,
        })
      }
      return { ...state }
    })
    this.setState({
      gameStates: childChoiceToAdd > 0 ? [...updatedStates, data] : [...updatedStates],
      uniqueId: uniqueId + 1,
    })
  }

  render(): JSX.Element {
    const {
      form,
      selectGameState,
      setChildChoiceToAdd,
      toggleFullscreen,
      submitForm,
    } = this
    const {
      gameStates,
      selectedId,
      showIsFinalForm,
      childChoiceToAdd,
      isFullscreen,
    } = this.state

    const devGameState = convertToDevGameState(gameStates[0], gameStates)
    const selectedState = getSelectedGameState(gameStates, selectedId)

    return (
      <div className={`${styles.creator} ${isFullscreen && styles['creator--fullscreen']}`}>
        <h1 className={styles.creator__title}>
          Game Creator/Editor
          <button
            onClick={toggleFullscreen()}
            className={styles.creator__fullscreenButton}>
            {isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
          </button>
        </h1>
        <div className={styles.creator__formWrapper}>
          <SelectedState
            selectedState={selectedState}
            childChoiceToAdd={childChoiceToAdd}
            setChildChoiceToAdd={setChildChoiceToAdd} />
          <FieldGroup
            control={form}
            render={({ invalid }: AbstractControl) => (
              <form
                onSubmit={submitForm}
                className={styles.creator__form}>
                <h2 className={styles.creator__formHeader}>Add/Edit Game State</h2>
                <FieldControl
                  name='description'
                  render={Textbox}
                  meta={{
                    label: 'Description',
                    type: 'description',
                    errorMessages: {
                      required: 'Description is required',
                    },
                  } as FieldControlMeta} />
                <FieldControl
                  name='imageSrc'
                  render={Textbox}
                  meta={{
                    label: 'Image Src',
                    type: 'imageSrc',
                    errorMessages: {
                      required: 'Image Src is required',
                    },
                  } as FieldControlMeta} />
                <FieldControl
                  name='imageAlt'
                  render={Textbox}
                  meta={{
                    label: 'Image Alt',
                    type: 'imageAlt',
                    errorMessages: {
                      required: 'Image Alt is required',
                    },
                  } as FieldControlMeta} />
                <FieldControl
                  name='isFinal'
                  render={Checkbox}
                  meta={{
                    label: 'isFinal',
                    type: 'isFinal',
                  } as FieldControlMeta} />
                {!showIsFinalForm && (
                  <>
                    <FieldControl
                      name='choice1'
                      render={Textbox}
                      meta={{
                        label: 'Choice 1',
                        type: 'choice1',
                        errorMessages: {
                          required: 'Choice 1 is required',
                        },
                      } as FieldControlMeta} />
                    <FieldControl
                      name='choice2'
                      render={Textbox}
                      meta={{
                        label: 'Choice 2',
                        type: 'choice2',
                        errorMessages: {
                          required: 'Choice 2 is required',
                        },
                      } as FieldControlMeta} />
                    <FieldControl
                      name='choice1StateId'
                      render={Textbox}
                      meta={{
                        label: 'Choice 1 State Id',
                        type: 'choice1StateId',
                      } as FieldControlMeta} />
                    <FieldControl
                      name='choice2StateId'
                      render={Textbox}
                      meta={{
                        label: 'Choice 2 State Id',
                        type: 'choice2StateId',
                      } as FieldControlMeta} />
                    </>
                )}
                {showIsFinalForm && (
                  <FieldControl
                    name='nextGameLink'
                    render={Textbox}
                    meta={{
                      label: 'Next Game Link',
                      type: 'nextGameLink',
                      errorMessages: {
                        required: 'Next Game Link is required',
                      },
                    } as FieldControlMeta} />
                )}
                <button
                  type='submit'
                  disabled={invalid}
                  className={styles.creator__form__submitButton}>
                  Submit
                </button>
              </form>
            )} />
          </div>
          {devGameState && (
            <div className={styles.creator__preview}>
              <GameStateCard
                gameState={devGameState}
                selectGameState={selectGameState} />
            </div>
          )}
      </div>
    )
  }
}
