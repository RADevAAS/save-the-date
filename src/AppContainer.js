import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import App from "./components/App/App";
import style from './index.css';

const Home = () => <div>Home</div>
const Login = () => <div>Login</div>
const PageNotFound = () => <div>PageNotFound 404</div>

function AppContainer() {
	return (
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

	);
}

export default AppContainer;
