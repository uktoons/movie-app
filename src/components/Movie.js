import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Movie = ({ movie }) => {
  return (
    <StyledMovie>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
      <p>{movie.overview}</p>
    </StyledMovie>
  );
};

const StyledMovie = styled.div`
  img {
    width: 100%;
    border-radius: 8px;
  }
  h3 {
    font-size: 1.5em;
    margin-top: 0.5em;
  }
  p {
    margin-top: 0.5em;
  }
`;

export default Movie;
