import { https } from 'firebase-functions';
import { initializeApp, firestore } from "firebase-admin";
const cors = require('cors')({origin: true});

initializeApp();
const db = firestore();

import * as dbApi from "./db";

export const helloWorld = https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});


export const getPublicEvent = https.onRequest((req, res) => {
    cors(req, res, () => {
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
        dbApi.getEvent(db, eventId).then((event: { [x: string]: any; guests: any; }) => {
            const {guests, ...rest} = event
            return res.status(200).send(rest)
        }).catch(() => {
            return res.status(400).json({
                message: 'no event'
            })
        })
    })
});


export const setGuestData = https.onRequest((req, res) => {
    cors(req, res, () => {
        if(req.method !== 'POST') {
            return res.status(401).json({
                message: 'Not allowed'
            })
        }

        const eventId = req.body.eventId

        const data = {
            isComming: req.body.isComming,
            name: req.body.name,
            count: req.body.count,
            tel: req.body.tel,
        }

        // TODO sanitize

        dbApi.setGuestData(db, eventId, data).then(() => {
            return res.status(200).send(data)
        }).catch((err: any) => {
            console.log(err)
            return res.status(400).json({
                message: 'not saved'
            })
        })
    })
});

export const createEvent = https.onRequest((req, res) => {
    cors(req, res, () => {
        if(req.method !== 'POST') {
            return res.status(401).json({
                message: 'Not allowed'
            })
        }

        const userId = req.body.userId

        const data = {
            config: {
                template: req.body.template,
                form: req.body.form,
            },
            details: {
                brideName: req.body.brideName,
                groomName: req.body.groomName,
                ts: req.body.ts,
                mail: req.body.mail,
                title: req.body.title,
                town: req.body.title,
                adress: req.body.title,
                invitText: req.body.title,
                hall: req.body.title,
            },
            guests: [],
        }

        dbApi.createEvent(db, userId, data).then(() => {
            return res.status(200).send({ok: true})
        }).catch((err: any) => {
            console.log(err)
            return res.status(400).json({
                message: 'not created'
            })
        })
    })
});

export const getGuestList = https.onRequest((req, res) => {
    cors(req, res, async () => {
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
        try {
            const event = await dbApi.getEvent(db, eventId)
            const {guests} = event
            return res.status(200).send({guests})
        } catch (e) {
            return res.status(400).json({
                message: 'no event'
            })
        }
    })
});


export const updateEvent = https.onRequest((req, res) => {
    cors(req, res, () => {
        if(req.method !== 'PATCH') {
            return res.status(401).json({
                message: 'Not allowed'
            })
        }

        const userId = req.body.userId

        const data = {
                'config.template': req.body.template,
                'config.form': req.body.form,
                'details.brideName': req.body.brideName,
                'details.groomName': req.body.groomName,
                'details.ts': req.body.ts,
                'details.mail': req.body.mail
        }

        Object.keys(data).forEach(key => data[key] === undefined && delete data[key])


        dbApi.updateEvent(db, userId, data).then(() => {
            return res.status(200).send({ok: true})
        }).catch((err: any) => {
            console.log(err)
            return res.status(400).json({
                message: 'not updated'
            })
        })
    })
});
