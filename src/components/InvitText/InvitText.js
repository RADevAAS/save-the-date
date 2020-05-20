import React from "react";
import moment from 'moment';



const InvitText = (props) => {

        const {adress, town, invitText, hall, date} = props.data;
        
        const t = new Date(date._seconds * 1000);
    
        const eventDate = moment(t).format('DD/MM/YYYY');
     
        let navAdress = adress.split(' ').join('%20');

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

