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
                    <div>https://waze.com/ul?q=search_terms</div>
            </div>
        )
}


export default InvitText;

