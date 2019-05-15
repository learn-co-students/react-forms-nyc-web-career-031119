import React, {Component} from 'react'


class ControlledInput extends Component {

  state = {
    value: ''
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      // this.sendFormDataSomewhere(this.state)
    })
  };

  render() {
    return (
      <form action="">
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </form>
    );
  }
}

export default ControlledInput
