import React from "react";
import { Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import styles from './Login.module.css'
import { signIn } from "../../firebase";
import { getUserId } from "../../reducers/user";
import {
	getEventPublicData,
	createEvent,
	getGuestList,
	setGuestData,
	updateEvent,
} from "../../api/api"

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


	getEventPublicData = async () => {
		const x = await getEventPublicData('abcdefg')
		console.log('getEventPublicData', x)
	}


	getGuestList = async () => {
		const x = await getGuestList('abcdefg')
		console.log('getGuestList', x)
	}
	
	setGuestData = async () => {
		const x = await setGuestData('abcdefg', {
			isComming: true,
            name: 'name1',
			count: Date.now(),
			tel: Date.now()
		})
		console.log('setGuestData', x)
	}


	createEvent = async () => {
		const x = await createEvent()
		console.log('createEvent', x)
	}


	updateEvent = async () => {
		const x = await updateEvent()
		console.log('updateEvent', x)
	}


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
        if (userId) {
          return <Redirect to={`/admin`} />
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
              <div>
				<button onClick={this.getEventPublicData}>getEventPublicData</button>
				<button onClick={this.createEvent}>createEvent</button>
				<button onClick={this.getGuestList}>getGuestList</button>
				<button onClick={this.setGuestData}>setGuestData</button>
				<button onClick={this.updateEvent}>updateEvent</button>
              </div>
            </div>
          );
    }
}

const mapStateToProps = state => ({
  userId: getUserId(state)
})

export default connect(mapStateToProps)(Login);