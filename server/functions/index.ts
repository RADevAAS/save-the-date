// import { https } from 'firebase-functions';
// import { initializeApp, firestore } from "firebase-admin";
// const cors = require('cors')({origin: true});

// initializeApp();
// const db = firestore();

// import { getEvent, setGuestData: _setGuestData } from "./db";

// export const helloWorld = https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });


// export const getPublicEvent = https.onRequest((req, res) => {
//     cors(req, res, () => {
//         if(req.method !== 'GET') {
//             return res.status(401).json({
//                 message: 'Not allowed'
//             })
//         }
//         const eventId = req.query.eventId
//         if (!eventId) {
//             return res.status(400).json({
//                 message: 'Event id is needed'
//             })
//         }
//         getEvent(db, eventId).then(event => {
//             const {guests, ...rest} = event
//             return res.status(200).send(rest)
//         }).catch(() => {
//             return res.status(400).json({
//                 message: 'no event'
//             })
//         })
//     })
// });


// export const setGuestData = https.onRequest((req, res) => {
//     cors(req, res, () => {
//         if(req.method !== 'POST') {
//             return res.status(401).json({
//                 message: 'Not allowed'
//             })
//         }

//         const eventId = req.body.eventId
        
//         const data = {
//             isComming: req.body.isComming,
//             name: req.body.name,
//             count: req.body.count,
//         }

//         // TODO sanitize

//         _setGuestData(db, eventId, data).then(() => {
//             return res.status(200).send(data)
//         }).catch((err) => {
//             console.log(err)
//             return res.status(400).json({
//                 message: 'not saved'
//             })
//         })
//     })
// });
