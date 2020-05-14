import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import App from "./components/App/App";
import Login from "./components/Login/Login";
import style from './index.css';
import reducers from './reducers'

const store = createStore(reducers)

const Home = () => <div>Home</div>
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
						<Route component={PageNotFound} />
					</Switch>
				</div>
			</Router>
		</Provider>
	);
}

export default AppContainer;
