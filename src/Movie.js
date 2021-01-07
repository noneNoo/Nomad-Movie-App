import React from 'react';
import propTypes from 'prop-types';

Movie.propTypes = {
  id: propTypes.number.isRequired,
  year: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
};

function Movie(id, year, title, summary, poster, key) {
  return <h4>{title}</h4>;
}

export default Movie;
