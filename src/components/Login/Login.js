import React from "react";
import styles from './Login.module.css'
import { signIn, signOut } from "../../firebase";

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
	
	
    signOut = async (event) => {
        event.preventDefault();
        signOut()
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
                  <button onClick = {this.signOut}>
                    Sign out
                  </button>
                </form>
              </div>
            </div>
          );
    }
}


export default Login;