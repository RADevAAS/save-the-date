import React from "react";
import moment from 'moment';

const InvitText = (props) => {
    const {adress, town, invitText, hall, ts} = props.data;
    const eventDate = moment(ts).format('DD/MM/YYYY HH:mm');
    let navAdress = adress && adress.split(' ').join('%20');

    return (
        <div>
            <div> { invitText } </div>
            <div> { eventDate } </div>
            <div> { hall } </div>
            <div> { adress }, {town} </div>
            <a
                href={`https://waze.com/ul?q=${navAdress}%20${town}`}
                target='_blank'
                rel="noopener noreferrer">
                Waze
            </a>
        </div>
    )


}

export default InvitText;

