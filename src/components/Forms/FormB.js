import React from "react";
//import style from "./FormB.module.css";
 
//import data from '../../data/data';

//const {negAnswer, posAnswer} = data;


class FormB extends React.Component {
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
        <form class="form">
  
  <h2>Checkboxes</h2>
  <div class="inputGroup">
    <input id="option1" name="option1" type="checkbox"/>
    <label for="option1">Option One</label>
  </div>
  
  <div class="inputGroup">
    <input id="option2" name="option2" type="checkbox"/>
    <label for="option2">Option Two</label>
  </div>
  
  <h2>Radio Buttons</h2>
  <div class="inputGroup">
    <input id="radio1" name="radio" type="radio"/>
    <label for="radio1">Yes</label>
  </div>
  <div class="inputGroup">
    <input id="radio2" name="radio" type="radio"/>
    <label for="radio2">No</label>
  </div>
</form>

  );
    }
  }

        

export default FormB;
