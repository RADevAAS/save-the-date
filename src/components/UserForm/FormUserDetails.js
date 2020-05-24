import React, { Component } from 'react';
import style from './FormsStyles.module.css';
import DatePicker from  "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export class FormUserDetails extends Component {
continue = event => {
    event.preventDefault();
    this.props.nextStep();
}

reset = () => {
    this.values.brideName= '';
    this.values.groomName= '';
    this.values.eventDate= '';
}


    render() {

        const { values, handleChange } = this.props;

  
        return (
            <form><p>Entrez vos Information</p>

                <div>
                    <label>bride</label>
                    <br/>
                    <input
                        
                        name="brideName"
                        className={style.inputText}
                        placeholder="enter your name"
                        type="string"
                        onChange={handleChange('brideName')}
                        defaultValue={values.brideName}
                    />
                    
                </div>
                    <br/>
                <div>
                <label>groom</label>
                <br/>
                    <input
                        
                        name="groomName"
                        className={style.inputText}
                        placeholder="enter your name"
                        type="string"
                        onChange={handleChange('groomName')}
                        defaultValue={values.groomName}
                    />
                    
                    </div>
                    <br/>
                    <div>
                    <label>date
                    <DatePicker
                           name="eventDate"
                           selected={values.eventDate}
                           onChange={handleChange}
                           showTimeSelect
                           minDate={new Date()}
                           dateFormat="dd-MMMM-yyyy HH:MM"
                           className="form-control"
                           isClearable
                           showMonthDropdown
                           showYearDropdown
                           scrollableYearDropdown
                           defaultValue={values.eventDate}
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
                <button
                    className={style.submitButton}
                    label="reset"
                    primary={true}
                    style={style.button}
                    onClick={this.reset}
                    >
                        reset
                        </button>
                </form>
        );
    }
}



export default FormUserDetails
