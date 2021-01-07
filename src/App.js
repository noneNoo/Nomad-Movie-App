import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    isLodaing: true,
    movies: [],
  };
  // axios가 느릴 수 있기 때문에 ansync(비동기)사용
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.nomadcoders1.now.sh/list_movies.json'
    );
    // this.setState({ movies: movies });
    this.setState({ movies, isLodaing: false });
  };
  // render함수가 실행되고 가장 먼저 실행됨
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLodaing } = this.state;
    return <div>{isLodaing ? 'Loading...' : 'We are ready'}</div>;
  }
}

export default App;
