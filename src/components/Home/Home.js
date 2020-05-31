import React, { Component } from 'react';
import style from "./Home.module.css";
import { Link } from 'react-router-dom'


export class Home extends Component {
    render() {
        return (
            <div>
                <Link to={`/login`}>
                <button className={style.loginButton}>Login</button>
                </Link>
                <div className={style.title}>
                    SAVE THE DATE
                </div>
                <div className={style.description}>
                    description description description description 
                    description description description description
                    description description description description
                </div>
            <div className={style.images}>
                <span className={style.imagesSegment}>images</span>
                <span className={style.imagesSegment}>images</span>
                <span className={style.imagesSegment}>images</span>            
            </div>
            <Link to={`/contactus`}>
            <button>Contact us</button>
            </Link>
            </div>
        )
    }
}

export default Home
