import * as React from 'react'

const styles = require('./scss/LoadingPage.scss') // tslint:disable-line no-var-requires

interface Props {
  error: boolean
  timedOut: boolean
  pastDelay: boolean
}

const LoadingPage: React.StatelessComponent<Props> = ({ error, timedOut, pastDelay }: Props): JSX.Element => {
  let loadingText
  if (error) {
    loadingText = 'Error!'
  } else if (timedOut) {
    loadingText = 'Taking a long time...'
  } else if (pastDelay) {
    loadingText = 'Loading...'
  } else {
    return null
  }
  return (
    <div className={styles.loadingPage}>
      {loadingText}
    </div>
  )
}

export default LoadingPage
