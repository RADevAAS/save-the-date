import React from "react";
import style from "./FormC.module.css";

class FormC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        answer: null,
        numberOfGuests: '',
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
      };
    }

    handleChange= (event) => {
      const target = event.target;
      const value = target.name === 'answer' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value,
        answer : event.target.value
      });
    }

    handleSubmit= (event) => {
        event.preventDefault();
        const answer = this.state.answer;
        console.log(this.state.answer);
          return (
            answer!==this.state.tel

              ? alert(`${this.state.firstName}
              ${this.state.lastName}
              ${this.state.email}
              ${this.state.tel}
              réponse ${this.state.answer}
              et vous serez
              ${this.state.numberOfGuests} personnes`)
              : alert('Veuillez sélectionner une réponse')
              );


      };



    render() {
      const {negAnswer, posAnswer, question, numberOfGuests, firstName, lastName, tel, email} = this.props.data;

      return (
        <form onSubmit={this.handleSubmit} className={style.form}>
            <p>{ question }</p>

            <div className={style.inputGroup} >
              <input

                     id="yes"
                     name="answer"
                     type="radio"
                     value="positive"
                     checked={this.state.answer === "positive"}
                     onChange={this.handleChange}/>
              <label for="yes">{posAnswer}</label>
            </div>
            <div className={style.inputGroup}>
              <input id="no"
                     name="answer"
                     type="radio"
                     value="negative"
                     checked={this.state.answer === "negative"}
                     onChange={this.handleChange}/>
              <label for="no">{negAnswer}</label>
            </div>


            <ul>
                <label>
                    <input
                    required
                    className={style.inputText}
                    placeholder={numberOfGuests}
                    name="numberOfGuests"
                    type="number"
                    value={this.state.numberOfGuests}
                    onChange={this.handleChange} />
                </label>
            </ul>
            <ul>
                <label>
                    <input
                    required
                    className={style.inputText}
                    placeholder={firstName}
                    name="firstName"
                    type="string"
                    value={this.state.firstName}
                    onChange={this.handleChange} />
                </label>
            </ul>
            <ul>
                <label>
                    <input
                    required
                    className={style.inputText}
                    placeholder={lastName}
                    name="lastName"
                    type="string"
                    value={this.state.lastName}
                    onChange={this.handleChange} />
                </label>
            </ul>
            <ul>
                <label>
                    <input
                    className={style.inputText}
                    placeholder={email}
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange} />
                </label>
            </ul>
            <ul>
                 <label>
                    <input
                    className={style.inputText}
                    placeholder={tel}
                    name="tel"
                    type="tel"
                    value={this.state.tel}
                    onChange={this.handleChange} />
                </label>
            </ul>


            <button type="submit" className={style.submitButton} disabled={this.state.answer ===null}>Envoyez</button>
        </form>
      );
    }
  }



export default FormC;
