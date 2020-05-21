import React from "react";
import style from "./FormA.module.css";
 
import data from '../../data/data';

const {negAnswer, posAnswer, question, numberOfGuests, firstName, lastName, tel} = data;


class FormA extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        answer: null,
        numberOfGuests: 0,
        guestName: [],
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
      };
    }
      
    handleChange = (event, index) => {
      const target = event.target;
      let value = target.value;
      const name = target.name;
      
  
      if (name === 'numberOfGuests' && value < 0) {
          value = 0
      }

      this.setState({
        ...this.state,
        [name]: value,
        guestName: this.state.guestName
      });
    }

          
    handleChangeRadio = (event) => {      
      const answer = event.target.value === 'positive' ? true : false

      this.setState({
        answer
      });
    }

    handleSubmit= (event) => {
        event.preventDefault();
        console.log(this.state.answer);

        alert(`${this.state.firstName}
              ${this.state.lastName}
              ${this.state.email}
              ${this.state.tel}
              réponse ${this.state.answer}
              et vous serez
              ${this.state.numberOfGuests} personnes`)
      };
        
    addGuestName(){

      this.setState({guestName: [...this.state.guestName, ""]}
      )
      
    }

    changeGuestNumber = event => {
      const { guestName } = this.state
      const value = event.target.value;
      console.log('guestName1', guestName);
      
   
      
  
      this.setState({guestNumber: value}, () => {
          if (guestName.length < numberOfGuests.value) {
              const numberToAdd = value - guestName.length
              const newGuests = [...this.state.guestName, ""]
              
              for (let i = numberToAdd; i < 0; i--) {
                  newGuests.push("")
              } 
  
              this.setState({guestName: newGuests})
              console.log('guestName', guestName);
          }
          else{
            const numberToRemove = guestName.length - value
              const newGuests = [...this.state.guestName, ""]
              
              for (let i = numberToRemove; i < 0; i--) {
                  newGuests.pop("")
              } 
  
              this.setState({guestName: newGuests})
          }
      })
  }
  
    render() {
      const {answer} = this.state

      return (
        <form onSubmit={this.handleSubmit} className={style.form}>
            <p>{ question }</p>

            <div className={style.inputGroup} >
              <input 
                     
                     id="yes"
                     name="answer"
                     type="radio"
                     value="positive"
                     checked={answer === true}
                     onChange={this.handleChangeRadio}/>
              <label for="yes">{posAnswer}</label>
            </div>
            <div className={style.inputGroup}>
              <input id="no"
                     name="answer"
                     type="radio"
                     value="negative"
                     checked={answer === false}
                     onChange={this.handleChangeRadio}/>
              <label for="no">{negAnswer}</label>
            </div>

          
            <ul>   
                <label>
                    <input
                    onClick={(event)=>this.changeGuestNumber(event)} 
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

                  {
                    this.state.guestName.map((guest, index) =>  {
                      return (
                        <div key={index}>
                          <input 
                          className={style.inputText}
                          placeholder='nom de ceux qui vienne'                 
                          name="guestName"
                          type="string"
                          onChange={(event) => this.handleChange(event)}
                          value = {this.state.guestName[index]} />
                        </div>
                      )
                    })
                  }
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

        

export default FormA;
