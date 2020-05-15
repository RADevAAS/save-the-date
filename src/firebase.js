import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { store } from './AppContainer'
import { login, logout } from './reducers/user'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const signIn = async (email, password) => {
	try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password)
        const userId = userCredential.user.uid
        store.dispatch(login(userId))
        localStorage.setItem('user', userId)
		return userCredential.user
	} catch (err) {
		console.error("Error signing in with password and email", err);
	}
};


export const signOut = () => {
    auth.signOut()
    store.dispatch(logout())
    localStorage.removeItem('user')
};
