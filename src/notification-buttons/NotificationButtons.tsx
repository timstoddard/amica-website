import * as React from 'react'
import { connect } from 'react-redux'
import { Action } from 'redux'
import { newNotification } from '../redux/actions/types'
import { AppState, Notification, NotificationType } from '../shared/types'
import NotificationButton from './notification-button/NotificationButton'

const styles = require('./scss/NotificationButtons.scss') // tslint:disable-line no-var-requires

interface Props {
  socialMediaNotifications: Notification[]
  textMessageNotifications: Notification[]
  emailNotifications: Notification[]
  newRandomNotification: () => void
  newSocialMediaNotification: () => void
  newTextMessageNotification: () => void
  newEmailNotification: () => void
}

const NotificationButtons = ({
  socialMediaNotifications,
  textMessageNotifications,
  emailNotifications,
  newRandomNotification,
  newSocialMediaNotification,
  newTextMessageNotification,
  newEmailNotification,
}: Props) => (
  <div className={styles.notificationButtons}>
    <NotificationButton
      notificationCount={socialMediaNotifications.length}
      className={styles['notificationButtons--socialMedia']} />
    <NotificationButton
      notificationCount={textMessageNotifications.length}
      className={styles['notificationButtons--textMessage']} />
    <NotificationButton
      notificationCount={emailNotifications.length}
      className={styles['notificationButtons--email']} />
    <div style={{border: '1px solid gray'}}>
      <div>test panel (remove later)</div>
      <button onClick={newRandomNotification}>
        new random
      </button>
      <button onClick={newSocialMediaNotification}>
        new social media
      </button>
      <button onClick={newTextMessageNotification}>
        new text message
      </button>
      <button onClick={newEmailNotification}>
        new email
      </button>
    </div>
  </div>
)

const mapStateToProps = ({
  socialMediaNotifications,
  textMessageNotifications,
  emailNotifications,
}: AppState) => ({
  socialMediaNotifications,
  textMessageNotifications,
  emailNotifications,
})

const mapDispatchToProps = (dispatch: (a: Action) => void) => ({
  newRandomNotification: () => dispatch(newNotification()),
  newSocialMediaNotification: (message: string) => dispatch(newNotification(NotificationType.SOCIAL_MEDIA, message)),
  newTextMessageNotification: (message: string) => dispatch(newNotification(NotificationType.TEXT_MESSAGE, message)),
  newEmailNotification: (message: string) => dispatch(newNotification(NotificationType.EMAIL, message)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationButtons)
