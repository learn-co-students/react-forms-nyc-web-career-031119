// Code ControlledInput Component Here
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
        <p style={{color: "blue"}}>{this.state.value}</p>
      </div>
    );
  }
}

export default ControlledInput;
