import React from 'react';
import { Link } from 'react-router-dom';

import propTypes from 'prop-types';

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
};

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    // 클릭하면 movie-detail 페이지로 이동됨과 동시에
    // 클릭한 컴포넌트의 props를 전달할 수 있다
    <Link
      className="movie"
      to={{
        pathname: `/movie/${id}`,
        state: {
          year: year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
      <div className="movie__container">
        <img src={poster} alt={title} title={title}></img>
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
