import app from 'firebase/app'

// The following is an alternative setup

// const prodConfig = {
//   apiKey: process.env.REACT_APP_PROD_API_KEY,
//   authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
//   projectId: process.env.REACT_APP_PROD_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_PROD_APP_ID,
// }

// const devConfig = {
//   apiKey: process.env.REACT_APP_DEV_API_KEY,
//   authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//   projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//   storageBucket: '',
//   messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_DEV_APP_ID,
// }

// const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: '',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}

export default class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }

  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password)
  }

  doSignInWithEmailAndPassword = (email, password) => {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  doSignOut = () => {
    return this.auth.signOut()
  }

  doPasswordReset = email => {
    return this.auth.sendPasswordResetEmail(email)
  }

  doPasswordUpdate = password => {
    return this.auth.currentUser.updatePassword(password)
  }
}
