import * as firebase from 'firebase'
import 'firebase/database'

const config = {
    apiKey: 'AIzaSyB3iIwf-CsAzf06WK82gyiHTWaKNOxtXdU',
    authDomain: 'amica-49406.firebaseapp.com',
    databaseURL: 'https://amica-49406.firebaseio.com',
    projectId: 'amica-49406',
    storageBucket: 'amica-49406.appspot.com',
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export const auth = firebase.auth()
