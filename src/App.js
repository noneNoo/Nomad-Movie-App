import React from 'react';

class App extends React.Component {
  state = {
    isLodaing: true,
    movie: [],
  };
  // render함수가 실행되고 가장 먼저 실행됨
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLodaing: false });
    }, 4000);
  }
  render() {
    const { isLodaing } = this.state;
    return <div>{isLodaing ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
