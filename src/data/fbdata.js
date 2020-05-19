import {connect} from 'react-redux'
import React from 'react'
import { getUserId } from "../../reducers/user";

class fbdata extends React.Component {
    state = {
        date: new Date("2020-07-06 19:30:00"),
        name1: 'Ava Cohen',
        name2: 'Avi Levy',
        town: 'Tel Aviv',
        adress: '58 rue du Pognon',
        title: 'Mazal Tov',
        bassad: true,
        hall: 'Kesskesécher',
        invitText: 'Vous êtes conviés au mariage qui se déroulera le',
        template : 'a',
        form : 'a',
        posAnswer : 'Oui',
        negAnswer : 'Non',
        question: 'Participerez vous?',
        /* data who cannot be changed by user, maybe can be translate */
        numberOfGuests : 'Nombres d\'invités',
        lastName : 'Nom',
        firstName : 'Prénom',
        tel : 'Téléphone',
        email : 'Email',
        bsd: ' בס""ד ',
        userID: this.state.userID,
    };
}

const mapStateToProps = state => ({
    userID: getUserId(state)
});


export default connect(mapStateToProps)(fbdata);