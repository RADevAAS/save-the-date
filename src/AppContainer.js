import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import App from "./components/App/App";
import Login from "./components/Login/Login";
import Admin from "./components/Admin/Admin";
import UserForm from "./components/UserForm/UserForm";
import style from './index.css';
import reducers from './reducers'

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


const HomeText = 'Home-Home-Home-Home'

const Home = () => <div >{HomeText}</div>
const PageNotFound = () => <div>PageNotFound 404</div>

function AppContainer() {
	return (
		<Provider store={store}>
			<Router>
				<div className={style.background}>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/login" component={Login} />
						<Route path="/event/:eventId" component={App} />
						<Route path="/admin/:eventId" component={UserForm} />
						<Route path="/admin" component={Admin} />
						<Route component={PageNotFound} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default AppContainer;