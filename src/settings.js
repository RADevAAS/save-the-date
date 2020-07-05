export const paypalClient = {
    sandbox:    process.env.REACT_APP_PAYPAL_SANDBOX_APP_ID,
    production: process.env.REACT_APP_PAYPAL_PRODUCTION_APP_ID,
}

export const baseURL = process.env.REACT_APP_BASE_URL

export const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}
