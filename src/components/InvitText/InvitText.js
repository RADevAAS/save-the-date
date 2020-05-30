import React from "react";
import moment from 'moment';
import { getDateFromFirebaseDate } from '../../utils';



const InvitText = (props) => {

        const {adress, town, invitText, hall, date} = props.data;

        const formattedTime = date;

        const eventDate = moment(formattedTime).format('DD/MM/YYYY HH:mm');

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

