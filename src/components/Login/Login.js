import React from "react";
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './Login.module.css'
import { signIn } from "../../firebase";
import { getUserId } from "../../reducers/user";

class Login extends React.Component {

    state = {
        email: '',
        password: '',
        error: null,
        user: null,
    }

    signIn = async (event) => {
        event.preventDefault();
        const {email, password} = this.state
        const user = await signIn(email, password)
        console.log('user', user)
	};


    onChangeHandler = (event) => {
    	const {name, value} = event.currentTarget;

        if(name === 'userEmail') {
            this.setState({email: value})
        } else if(name === 'userPassword'){
            this.setState({password: value})
        }
    };

    render() {
        const {email, password, error} = this.state
		const {userId} = this.props
		console.log('dddd', userId)
        if (userId) {
          return <Redirect to={`/admin/${userId}`} />
		}
		
        return (
            <div className={styles.container}>
              <div>Sign In</div>
              <div>
                {error !== null && <div >{error}</div>}
                <form>
                  <label htmlFor="userEmail">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    value = {email}
                    placeholder="E.g: your_mail@gmail.com"
                    id="userEmail"
                    onChange={this.onChangeHandler}
                  />
                  <label htmlFor="userPassword">
                    Password:
                  </label>
                  <input
                    type="password"
                    name="userPassword"
                    value = {password}
                    placeholder="Your Password"
                    id="userPassword"
                    onChange = {this.onChangeHandler}
                  />
                  <button onClick = {this.signIn}>
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          );
    }
}

const mapStateToProps = state => ({
  userId: getUserId(state)
})

export default connect(mapStateToProps)(Login);