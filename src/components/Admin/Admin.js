import React from "react";
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import styles from './Admin.module.css'
import { getUserId } from "../../reducers/user";
import {signOut} from '../../firebase'


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
            <div className={styles.container}>
                Hello Admin {userID}
                <button onClick={this.logout}> LOGOUT </button>
            </div>
          );
    }
}

const mapStateToProps = state => ({
    userID: getUserId(state)
})


export default connect(mapStateToProps)(Admin);