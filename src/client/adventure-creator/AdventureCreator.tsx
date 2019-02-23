import * as React from 'react'
import { AbstractControl, FieldControl, FieldGroup, FormBuilder, FormGroup, Validators } from 'react-reactive-form'
import Checkbox from '../shared/components/checkbox/Checkbox'
import Textbox from '../shared/components/textbox/Textbox'
import { DevGameState, DevIntermediateGameState, FieldControlMeta, GameState } from '../shared/types'

const styles = require('./scss/AdventureCreator.scss') // tslint:disable-line no-var-requires

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
    const choice1State = allStates.find((state: GameState) => state.id === gameState.choice1StateId)
    const choice2State = allStates.find((state: GameState) => state.id === gameState.choice2StateId)
    base.choice1State = convertToDevGameState(choice1State, allStates)
    base.choice2State = convertToDevGameState(choice2State, allStates)
  }
  return base
}

const GameStateCard = ({
  gameState,
  selectGameState,
  className,
}: {
  gameState: DevGameState,
  selectGameState: (id: number) => () => void,
  className?: string,
}) => {
  if (!gameState) {
    return null
  }

  if (gameState.isFinal) {
    return (
      <div className={`${styles.card} ${className || ''}`}>
        <div
          onClick={selectGameState(gameState.id)}
          className={styles.card__info}>
          <div>{gameState.id}</div>
          <div>{gameState.description}</div>
          <div>{gameState.imageSrc}</div>
          <div>{gameState.imageAlt}</div>
          <div>{gameState.isFinal}</div>
          <div>{gameState.nextGameLink}</div>
        </div>
      </div>
    )
  }

  const intermediateGameState = gameState as DevIntermediateGameState
  return (
    <div className={`${styles.card} ${className || ''}`}>
      <div
        onClick={selectGameState(gameState.id)}
        className={styles.card__info}>
        <div>id: {intermediateGameState.id}</div>
        <div>description: {intermediateGameState.description}</div>
        <div>imageSrc: {intermediateGameState.imageSrc}</div>
        <div>imageAlt: {intermediateGameState.imageAlt}</div>
        <div>isFinal: {intermediateGameState.isFinal}</div>
        <div>choice1: {intermediateGameState.choice1}</div>
        <div>choice2: {intermediateGameState.choice2}</div>
      </div>
      <div className={styles.card__children}>
        <GameStateCard
          gameState={intermediateGameState.choice1State}
          selectGameState={selectGameState} />
        <GameStateCard
          gameState={intermediateGameState.choice2State}
          selectGameState={selectGameState} />
      </div>
    </div>
  )
}

type ChildChoiceToAdd = 0 | 1 | 2

interface State {
  gameStates: GameState[]
  selectedId: number
  uniqueId: number
  showIsFinalForm: boolean,
  childChoiceToAdd: ChildChoiceToAdd
}

export default class AdventureCreator extends React.Component<{}, State> {
  form: FormGroup = FormBuilder.group({
    description: [''/*, Validators.required*/],
    imageSrc: [''/*, Validators.required*/],
    imageAlt: [''/*, Validators.required*/],
    isFinal: [false/*, Validators.required*/],
    choice1: [''/*, Validators.required*/],
    choice2: [''/*, Validators.required*/],
    choice1StateId: [''],
    choice2StateId: [''],
    nextGameLink: [''/*, Validators.required*/],
  })

  constructor(props: {} = {}) {
    super(props)

    this.state = {
      gameStates: [],
      selectedId: 0,
      uniqueId: 1,
      showIsFinalForm: false,
      childChoiceToAdd: 0,
    }
  }

  componentDidMount = () => {
    // TODO does this handle unsubscribing?
    this.form.get('isFinal').valueChanges.subscribe((value: boolean) => {
      this.setState({ showIsFinalForm: value })
    })
  }

  selectGameState = (id: number) => () => {
    this.setState({ selectedId: id })
  }

  addChildChoice = (childChoiceToAdd: ChildChoiceToAdd) => () => {
    this.setState({ childChoiceToAdd })
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

    const data: GameState = Object.assign({
      id: uniqueId,
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

    console.log('add new state:', data)
    const updatedStates: GameState[] = gameStates.map((state: GameState) => {
      if (childChoiceToAdd === 0 || state.isFinal) {
        return state
      }
      if (state.id === selectedId) {
        return Object.assign({ ...state }, childChoiceToAdd === 1 ? {
          choice1StateId: data.id,
        } : {
          choice2StateId: data.id,
        })
      }
      return state
    })
    this.setState({
      gameStates: [...updatedStates, data],
      uniqueId: uniqueId + 1,
    })
  }

  render(): JSX.Element {
    const {
      form,
      selectGameState,
      addChildChoice,
      submitForm,
    } = this
    const {
      gameStates,
      selectedId,
      showIsFinalForm,
      childChoiceToAdd,
    } = this.state

    const devGameState = convertToDevGameState(gameStates[0], gameStates)
    console.log('??', devGameState, gameStates)

    return (
      <div className={styles.creator}>
        <h1 className={styles.creator__title}>
          Create new adventure game!
        </h1>
        <FieldGroup
          control={form}
          render={({ invalid }: AbstractControl) => (
            <form
              onSubmit={submitForm}
              className={styles.creator__form}>
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
          {selectedId > 0 && (
            <>
              <div>selected id: {selectedId}</div>
              {childChoiceToAdd === 1 && 'adding choice 1'}
              {childChoiceToAdd === 2 && 'adding choice 2'}
              <button onClick={addChildChoice(1)}>
                Add Choice 1 State
              </button>
              <button onClick={addChildChoice(2)}>
                Add Choice 2 State
              </button>
            </>
          )}
          {devGameState && (
            <GameStateCard
              gameState={devGameState}
              selectGameState={selectGameState}
              className={styles.creator__cardDisplay} />
          )}
      </div>
    )
  }
}
