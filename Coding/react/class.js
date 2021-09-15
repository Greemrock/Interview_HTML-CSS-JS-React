import React from "react";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleAddTwo = this.handleAddTwo.bind(this);
    this.handleAddTwo = this.handleAddTwo.bind(this);
  }

  handleAddOne() {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleAddTwo() {
    this.setState((state) => ({ counter: state.counter + 1 }));
    this.setState((state) => ({ counter: state.counter + 1 }));
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleAddOne}>Add One</button>
        <button onClick={this.handleAddTwo}>Add Two</button>
      </div>
    );
  }
}
