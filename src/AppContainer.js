import React from 'react';
import App from "./components/App/App";
import style from './index.css';


function AppContainer() {
  return (
    <div className={style.background}>
      <App/>
    </div>
  );
}

export default AppContainer;
