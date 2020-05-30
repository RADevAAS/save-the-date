import React from "react";
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getUserId } from "../../reducers/user";
import {signOut} from '../../firebase'
import UserForm from "../UserForm/UserForm"


class Admin extends React.Component {

    logout = () => {
        signOut()
    }

    render() {
        const { userID } = this.props
        if (!userID) {
            return <Redirect to='/login' />
        }

        return (
            <UserForm/>
          );
    }
}

const mapStateToProps = state => ({
    userID: getUserId(state)
})


export default connect(mapStateToProps)(Admin);
