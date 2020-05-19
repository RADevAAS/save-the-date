import React from "react";
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import style from './Admin.module.css'
import { getUserId } from "../../reducers/user";
import {signOut} from '../../firebase';
import data from '../../data/data';

const {name1, name2, userID} = data

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
            <div className={style.container}>
                Hello Admin {userID}
                    <div className={style.names}>
                    <div className={style.name}>
                        {name1}
                    </div>
                    <div className={style.name}>
                        {'&'}
                    </div>
                    <div className={style.name}>
                        {name2}
                    </div>
                </div>
                <button onClick={this.logout}> LOGOUT </button>
            </div>
          );
    }
}

const mapStateToProps = state => ({
    userID: getUserId(state)
})


export default connect(mapStateToProps)(Admin);