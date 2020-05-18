import React from "react";
import style from "./FormA.module.css";
 
import data from '../../data/data';

const {negAnswer, posAnswer} = data;


class FormA extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        answer: '',
        numberOfGuests: 0,
        name: '',
        email: '',
        tel: '',
      };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      const target = event.target;
      const value = target.name === 'answer' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value,
        answer : event.target.value
      });
    }

    handleSubmit(event) {
        event.preventDefault();

        alert(`${this.state.name}
        ${this.state.email}
        ${this.state.tel}
        ${this.state.answer}
        et vous serez
        ${this.state.numberOfGuests} personnes`);
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <p className={style.title}>Participerez vous?</p>

                <ul>

                <div class="inputGroup">
   
 
                    
                        <input
                            type="radio"
                            value="vous venez"
                            checked={this.state.answer === "postive"}
                            onChange={this.handleChange}
                            />
                           <label>{posAnswer}</label>
                    
                    
                        <input
                            type="radio"
                            value="vous ne venez pas"
                            checked={this.state.answer === "negative"}
                            onChange={this.handleChange}
                            />
                            <label>{negAnswer}</label>
                            </div>
                    
                </ul>
            <ul>   
                <label>
                    Nombre d'invités :
                    <input
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleChange} />
                </label>
            </ul>  
            <ul>
                <label>
                    nom prénom :
                    <input
                    name="name"
                    type="string"
                    value={this.state.name}
                    onChange={this.handleChange} />
                </label>
            </ul> 
            <ul>
                <label>
                    email :
                    <input
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange} />
                </label>
            </ul>
            <ul>
                 <label>
                    tel :
                    <input
                    name="tel"
                    type="tel"
                    value={this.state.tel}
                    onChange={this.handleChange} />
                </label>
            </ul>
            <br />
            <button type="submit" className={style.submitButton}>Envoyez</button>
        </form>
      );
    }
  }

        

export default FormA;
