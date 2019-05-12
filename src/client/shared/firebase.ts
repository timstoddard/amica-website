import * as firebase from 'firebase'
import 'firebase/database'

const config = {
    apiKey: 'AIzaSyBLM9dBJXnyEmBFazcWKOqj5JCWlWANYqw',
    authDomain: 'amica-4add2.firebaseapp.com',
    databaseURL: 'https://amica-4add2.firebaseio.com',
    projectId: 'amica-4add2',
    storageBucket: 'amica-4add2.appspot.com',
    messagingSenderId: '861216641351',
    appId: '1:861216641351:web:2e9efffd2f1d88b2',
}

if (!firebase.apps.length) {
    firebase.initializeApp(config)
}

export const auth = firebase.auth()
