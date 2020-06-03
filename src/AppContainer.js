import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import App from "./components/App/App";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import ContactUs from "./components/ContactUs/ContactUs";
import SuccessPage from "./components/UserForm/SuccessPage";
import AdminPage from "./components/Admin/AdminPage";

import reducers from './reducers'

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function AppContainer() {
	return (
		<Provider store={store}>
			<Router>
				<div>
					<Switch>
						<Route exact path="/" component={AdminPage} />
						<Route path="/login" component={Login} />
						<Route path="/event/:eventId" component={App} />
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
