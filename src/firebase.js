import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { store } from './AppContainer'
import { login, logout } from './reducers/user'
import { firebaseConfig } from "./settings"

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()

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
