import React, { Component } from 'react';
import style from "./Home.module.css";

export class Home extends Component {
    render() {
        return (
            <div>
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
            <button>Contact us</button>
            </div>
        )
    }
}

export default Home
