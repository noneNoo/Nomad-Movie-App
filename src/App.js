import React from 'react';
import axios from 'axios';
import Movie from './Movie';

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
      'https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating'
    );
    // this.setState({ movies: movies });
    this.setState({ movies, isLodaing: false });
  };
  // render함수가 실행되고 가장 먼저 실행됨
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLodaing, movies } = this.state;
    return (
      <div>
        {isLodaing
          ? 'Loading...'
          : movies.map((movie) => {
              // console은 찍히는데... 왜 Movie 컴포넌트에 적용이 안 되는 건지 모르겠음...!
              console.log(movie.title);
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
      </div>
    );
  }
}

export default App;
