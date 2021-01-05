import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('constructor');
  }
  state = {
    count: 0,
  };
  add = () => {
    this.setState({ count: this.state.count + 1 });
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  componentDidMount() {
    console.log('component rendered');
  }
  componentDidUpdate() {
    console.log('I just updated');
  }
  componentWillUnmount() {
    console.log('good bye');
  }
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}

export default App;
