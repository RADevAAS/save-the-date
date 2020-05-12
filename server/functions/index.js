const functions = require('firebase-functions');
const admin = require("firebase-admin")

admin.initializeApp(functions.config().firebase);
const db = admin.firestore();

const endpoints = require("./db")

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});


exports.getPublicEvent = functions.https.onRequest((req, res) => {
    if(req.method !== 'GET') {
        return res.status(401).json({
            message: 'Not allowed'
        })
    }
    const eventId = req.query.eventId
    if (!eventId) {
        return res.status(400).json({
            message: 'Event id is needed'
        })
    }
    endpoints.getEvent(db, eventId).then(event => {
        return res.status(200).send(event)
    }).catch(() => {
        return res.status(400).json({
            message: 'no event'
        })
    })
});