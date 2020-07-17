import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import EventScreen from "./components/EventScreen/EventScreen";
import Login from "./components/Login/Login";
import LoginTest from "./components/Login/LoginTest";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import SuccessPage from "./components/UserForm/SuccessPage";
import AdminPage from "./components/Admin/AdminPage";
import Modal from "react-modal"

import reducers from './reducers'

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

Modal.setAppElement('#root')

function AppContainer() {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={AdminPage} />
						<Route path="/login" component={Login} />
						<Route path="/login/test" component={LoginTest} />
						<Route path="/event/:eventId" component={EventScreen} />
						<Route path="/admin" component={Admin} />
						<Route path="/success" component={SuccessPage} />
						<Route path="/contactus" component={ContactUs} />
						<Route component={Home} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default AppContainer;
