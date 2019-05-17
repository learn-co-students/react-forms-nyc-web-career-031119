// Code ControlledInput Component Here
import React, {Component} from 'react'

class Form extends Component {

  state = {
    firstName: "John",
    lastName: "Henry"
  }

  handleChange = event => {
  this.setState({
    [event.target.id]: event.target.value
  })
}

  render() {
    return (
      <form>
        <input type="text" id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
        <input type="text" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
      </form>
    )
  }
}

export default Form
