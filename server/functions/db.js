
// Events

exports.getEvent = (db, id) => {
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
    }).catch(err => {
        console.log('Error getting document', err);
    })
}
