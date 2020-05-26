import React from 'react';
//import { Provider } from 'react-redux'
import { createStore } from 'redux'
//import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
//import App from "./components/App/App";
// Login from "./components/Login/Login";
//import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
//import style from './index.css';
import reducers from './reducers'

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//const PageNotFound = () => <div>PageNotFound 404</div>

function AppContainer() {
	return (
		<Home></Home>
	);
}

export default AppContainer;
