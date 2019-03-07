import * as React from 'react'
import { FinalGameState, GameState, IntermediateGameState } from '../../shared/types'
import { ChildChoiceToAdd } from '../AdventureCreator'

const styles = require('./scss/SelectedState.scss') // tslint:disable-line no-var-requires

const SelectedState = ({
  selectedState,
  childChoiceToAdd,
  setChildChoiceToAdd,
}: {
  selectedState: GameState,
  childChoiceToAdd: ChildChoiceToAdd,
  setChildChoiceToAdd: (choice: ChildChoiceToAdd) => () => void,
}) => {
  const intermediateGameState = selectedState as IntermediateGameState
  const finalGameState = selectedState as FinalGameState
  let selectedStateInfo = (
    <div>None</div>
  )
  if (selectedState && selectedState.isFinal) {
    selectedStateInfo = (
      <>
        <div>id: {finalGameState.id}</div>
        <div>description: {finalGameState.description}</div>
        <div>isFinal: {finalGameState.isFinal}</div>
        <div>nextGameLink: {finalGameState.nextGameLink}</div>
      </>
    )
  } else if (selectedState && selectedState.isFinal === false) {
    selectedStateInfo = (
      <>
        <div>id: {intermediateGameState.id}</div>
        <div>description: {intermediateGameState.description}</div>
        <div>isFinal: {intermediateGameState.isFinal.toString()}</div>
        <div>choice1: {intermediateGameState.choice1}</div>
        <div>choice2: {intermediateGameState.choice2}</div>
        <div>choice1StateId: {intermediateGameState.choice1StateId}</div>
        <div>choice2StateId: {intermediateGameState.choice2StateId}</div>
      </>
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
      <div className={styles.selectedState__info}>
        {selectedStateInfo}
      </div>
      {selectedState && (
        <>
          <div className={styles.selectedState__graphic}>
            <img
              src={selectedState.imageSrc}
              alt='MISSING/MISNAMED IMAGE'
              className={styles.selectedState__graphic__image} />
            <div className={styles.selectedState__graphic__caption}>
              {selectedState.imageAlt}
            </div>
          </div>
          {canAddChildState && (
            <>
              <div>Add Child State</div>
              <button
                onClick={setChildChoiceToAdd(1)}
                disabled={!!intermediateGameState.choice1StateId}
                className={`
                  ${styles.selectedState__addChild}
                  ${childChoiceToAdd === 1 ? styles['selectedState__addChild--selected'] : ''}
                `}>
                Choice 1
              </button>
              <button
                onClick={setChildChoiceToAdd(2)}
                disabled={!!intermediateGameState.choice2StateId}
                className={`
                  ${styles.selectedState__addChild}
                  ${childChoiceToAdd === 2 ? styles['selectedState__addChild--selected'] : ''}
                `}>
                Choice 2
              </button>
              <button
                onClick={setChildChoiceToAdd(0)}
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

export default SelectedState
