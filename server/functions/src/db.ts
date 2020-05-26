import * as admin from "firebase-admin";

// Events
export const getEvent = (db: any, id: any) => {
    console.log('id', id)
    let eventRef = db.collection('events').doc(id);
    return eventRef.get().then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
            return null
        } else {
            console.log('Document data:', doc.data());
            return doc.data()
        }
    }).catch((err: any) => {
        console.log('Error getting document', err);
    })
}


export const setGuestData = (db: any , eventId: string, data: any) => {
    let eventRef = db.collection('events').doc(eventId);

    return eventRef.update({
        guests: admin.firestore.FieldValue.arrayUnion(data)
    })
}

export const createEvent = (db: any , userId: string, data: any) => {
    return db.collection("events").doc(userId).set(data)
}

export const updateEvent = (db: any , userId: string, data: any) => {
    return db.collection("events").doc(userId).update(data)
}