import React, { Component } from 'react';
import style from './FormsStyles.module.css';
import DateTimePicker from 'react-time-picker';

export class FormUserDetails extends Component {
continue = event => {
    event.preventDefault();
    this.props.nextStep();
}

    render() {

        const { values, handleChange } = this.props;

        return (
            <form><p>Entrez vos Information</p>

                <div>
                    <label>bride
                    <input
                        required
                        name="brideName"
                        className={style.inputText}
                        placeholder="enter your name"
                        type="string"
                        onChange={handleChange('brideName')}
                        defaultValue={values.brideName}
                    />
                    </label>
                </div>
                    <br/>
                <div>
                <label>groom
                    <input
                        required
                        name="groomName"
                        className={style.inputText}
                        placeholder="enter your name"
                        type="string"
                        onChange={handleChange('groomName')}
                        defaultValue={values.groomName}
                    />
                    </label>
                    </div>
                    <br/>
                 <div>
                 <label>date
                 <DateTimePicker
                      
                        required
                        name="date"
                        className={style.inputText}
                        placeholder="enter your date"
                        onChange={handleChange('date')}
                        defaultValue={values.date}
                    />
                    </label>
                    </div>
                    <br/>
                 
                    <br/>
                <div>    
                    <button
                    className={style.submitButton}
                    label="continue"
                    primary={true}
                    style={style.button}
                    onClick={this.continue}
                    >
                        continuer
                        </button>
                        
                </div>
                </form>
        );
    }
}



export default FormUserDetails
