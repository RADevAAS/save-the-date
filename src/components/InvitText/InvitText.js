import React from "react";
import moment from 'moment';
 
import data from '../../data/data';

const {adress, town, invitText, hall, date} = data;

const eventDate = moment(`${date}`).format('DD-MM-YYYY');

let navAdress = adress.split(' ').join('%20');

const InvitText = () => {
        return (
            <div>
                    <div> {invitText} </div>
                    <div> {eventDate} </div>
                    <div>  {hall} </div>
                    <div>  {adress}, {town} </div>
                    <div> { navAdress } </div>
                    <a href={`https://waze.com/ul?q=${navAdress}%20${town}`} target='_blank'>Waze</a>
            </div>
        )
}


export default InvitText;

