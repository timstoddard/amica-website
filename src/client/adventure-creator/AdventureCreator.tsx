import * as React from 'react'
import { AbstractControl, FieldControl, FieldGroup, FormBuilder, FormGroup, Validators } from 'react-reactive-form'
import Checkbox from '../shared/components/checkbox/Checkbox'
import Textbox from '../shared/components/textbox/Textbox'
import {
  DevGameState,
  DevIntermediateGameState,
  FieldControlMeta,
  FinalGameState,
  GameState,
  IntermediateGameState,
} from '../shared/types'

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

const getGameStateCardTypeName = (type: GameStateCardType) => {
  switch (type) {
    case GameStateCardType.ROOT:
      return 'Root'
    case GameStateCardType.LEFT_CHILD:
      return 'Choice 1'
    case GameStateCardType.RIGHT_CHILD:
      return 'Choice 2'
    default:
      return ''
  }
}

enum GameStateCardType {
  ROOT = 'root',
  LEFT_CHILD = 'left child',
  RIGHT_CHILD = 'right child',
}

const GameStateCard = ({
  gameState,
  selectGameState,
  type,
}: {
  gameState: DevGameState,
  selectGameState: (id: number) => () => void,
  type: GameStateCardType,
}) => {
  if (!gameState) {
    return null
  }

  if (gameState.isFinal) {
    return (
      <div className={styles.card}>
        {/* TODO make shared component for info display */}
        <div
          onClick={selectGameState(gameState.id)}
          className={styles.card__info}>
          <div className={styles.card__info__type}>
          {getGameStateCardTypeName(type)}
          </div>
          <div className={styles.card__info__id}>
            id: {gameState.id}
          </div>
          <img
            src={gameState.imageSrc}
            alt={gameState.imageAlt}
            className={styles.card__info__image} />
          <div className={styles.card__info__description}>
            {gameState.description}
          </div>
          <div className={styles.card__info__isFinal}>
            isFinal: {gameState.isFinal.toString()}
          </div>
          <div>nextGameLink: {gameState.nextGameLink}</div>
        </div>
      </div>
    )
  }

  const intermediateGameState = gameState as DevIntermediateGameState
  const hasChild = intermediateGameState.choice1State || intermediateGameState.choice2State
  const hasChildClass = hasChild
    ? styles['card--hasChild']
    : ''
  return (
    <div className={`${styles.card} ${hasChildClass}`}>
      <div
        onClick={selectGameState(gameState.id)}
        className={styles.card__info}>
        <div className={styles.card__info__type}>
          {getGameStateCardTypeName(type)}
        </div>
        <div className={styles.card__info__id}>
          id: {intermediateGameState.id}
        </div>
        <img
          src={intermediateGameState.imageSrc}
          alt={intermediateGameState.imageAlt}
          className={styles.card__info__image} />
        <div className={styles.card__info__description}>
          {intermediateGameState.description}
        </div>
        <div className={styles.card__info__isFinal}>
          isFinal: {intermediateGameState.isFinal.toString()}
        </div>
      </div>
      {hasChild && (
        <div className={styles.card__children}>
          <GameStateCard
            gameState={intermediateGameState.choice1State}
            selectGameState={selectGameState}
            type={GameStateCardType.LEFT_CHILD} />
          <GameStateCard
            gameState={intermediateGameState.choice2State}
            selectGameState={selectGameState}
            type={GameStateCardType.RIGHT_CHILD} />
        </div>
      )}
    </div>
  )
}

const SelectedState = ({
  selectedState,
  childChoiceToAdd,
  addChildChoice,
}: {
  selectedState: GameState,
  childChoiceToAdd: ChildChoiceToAdd,
  addChildChoice: (n: number) => () => void,
}) => {
  const intermediateGameState = selectedState as IntermediateGameState
  const finalGameState = selectedState as FinalGameState
  let selectedStateInfo = null
  if (selectedState && selectedState.isFinal) {
    selectedStateInfo = (
      <div className={styles.selectedStateWrapper}>
        <div className={styles.selectedState__info}>
          <div>id: {finalGameState.id}</div>
          <div>description: {finalGameState.description}</div>
          <div>isFinal: {finalGameState.isFinal}</div>
          <div>nextGameLink: {finalGameState.nextGameLink}</div>
        </div>
      </div>
    )
  } else if (selectedState && selectedState.isFinal === false) {
    selectedStateInfo = (
      <div className={styles.selectedStateWrapper}>
        <div className={styles.selectedState__info}>
          {/* TODO add edit button (top right corner) */}
          <div>id: {intermediateGameState.id}</div>
          <div>description: {intermediateGameState.description}</div>
          <div>isFinal: {intermediateGameState.isFinal.toString()}</div>
          <div>choice1: {intermediateGameState.choice1}</div>
          <div>choice2: {intermediateGameState.choice2}</div>
          <div>choice1StateId: {intermediateGameState.choice1StateId}</div>
          <div>choice2StateId: {intermediateGameState.choice2StateId}</div>
        </div>
      </div>
    )
  } else {
    selectedStateInfo = (
      <div>None</div>
    )
  }

  const canAddChildState = selectedState && selectedState.isFinal === false
    ? !(intermediateGameState.choice1StateId && intermediateGameState.choice2StateId)
    : false

  return (
    <div className={styles.selectedState}>
      <h2 className={styles.selectedState__header}>
        Selected state
      </h2>
      {selectedStateInfo}
      {selectedState && (
        <>
          <img
            src={selectedState.imageSrc}
            alt='MISSING/MISNAMED IMAGE'
            className={styles.selectedState__image} />
          <img
            src=''
            alt={selectedState.imageAlt}
            className={styles.selectedState__image} />
          {canAddChildState && (
            <>
              <div>Add Child State</div>
              <button
                onClick={addChildChoice(1)}
                disabled={!!intermediateGameState.choice1StateId}
                className={`
                  ${styles.selectedState__addChild}
                  ${childChoiceToAdd === 1 ? styles['selectedState__addChild--selected'] : ''}
                `}>
                Choice 1
              </button>
              <button
                onClick={addChildChoice(2)}
                disabled={!!intermediateGameState.choice2StateId}
                className={`
                  ${styles.selectedState__addChild}
                  ${childChoiceToAdd === 2 ? styles['selectedState__addChild--selected'] : ''}
                `}>
                Choice 2
              </button>
              <button
                onClick={addChildChoice(0)}
                className={`
                  ${styles.selectedState__addChild}
                `}>
                X
              </button>
            </>
          )}
        </>
      )}
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
      gameStates: [
        {
          id: 1,
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: 2,
          choice2StateId: 3,
        },
        {
          id: 2,
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: 6,
          choice2StateId: 7,
        },
        {
          id: 3,
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: 4,
          choice2StateId: 5,
        },
        {
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
          description: 'This is a sample description.',
          imageSrc: '/media/images/game-2.jpeg',
          imageAlt: 'image alt',
          isFinal: false,
          choice1: 'choice 1',
          choice2: 'choice 2',
          choice1StateId: 8,
          choice2StateId: null,
        },
        {
          id: 8,
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
      selectedId: 0,
      uniqueId: 100, // 1,
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
    this.setState({
      selectedId: id,
      childChoiceToAdd: 0,
    })
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
    // TODO reset form value

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
    console.log('state tree', devGameState, gameStates)
    const selectedState = gameStates.find((state: GameState) => state.id === selectedId)

    return (
      <div className={styles.creator}>
        <h1 className={styles.creator__title}>
          Game Creator/Editor
        </h1>
        <div className={styles.creator__formWrapper}>
          <SelectedState
            selectedState={selectedState}
            childChoiceToAdd={childChoiceToAdd}
            addChildChoice={addChildChoice} />
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
                selectGameState={selectGameState}
                type={GameStateCardType.ROOT} />
            </div>
          )}
      </div>
    )
  }
}
