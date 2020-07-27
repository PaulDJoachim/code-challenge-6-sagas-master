import React, { Component } from 'react';
import { connect } from 'react-redux';


class AnimalForm extends Component {

  state = {
    animal: '',
    class: '1',
  }

  setAnimal = (event) =>{
    this.setState({
      animal: event.target.value
    })
    console.log(this.state);
  }

  setClass = (event) =>{
    this.setState({
      class: event.target.value
    })
    console.log(this.state);
  }

  addAnimal = (event) =>{
    event.preventDefault();
    this.props.dispatch({type: 'ADD_ANIMAL', payload: this.state})
  }

    render() {
        return (
            <form onSubmit={this.addAnimal} className="AnimalForm">
              <input onChange={this.setAnimal} placeholder="Animal"></input>
                <label htmlFor="class">Choose a car:</label>
                <select onChange={this.setClass} name="class" id="class">
                  <option value="1">Mammal</option>
                  <option value="2">Bird</option>
                  <option value="3">Fish</option>
                  <option value="4">Reptile</option>
                  <option value="5">Amphibian</option>
              </select> 
              <button>Add Animal</button>
            </form>
        );
    }
}

// Makes our reducers available in our component
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AnimalForm);
