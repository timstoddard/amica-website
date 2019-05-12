import * as React from 'react'
import { Button } from 'reactstrap'

const styles = require('./scss/NotificationButton.scss') // tslint:disable-line no-var-requires

interface NotificationButtonProps {
  notificationCount: number
  className: string
}

const NotificationButton = ({
  notificationCount,
  className,
}: NotificationButtonProps) => {
  const hasNotifications = notificationCount > 0
  return (
    <Button
      disabled={!hasNotifications}
      className={[styles.notificationButton, className].join(' ')}>
      {hasNotifications && (
        <div className={styles.notificationButton__count}>
          {notificationCount}
        </div>
      )}
    </Button>
  )
}

export default NotificationButton
