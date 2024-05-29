import React from 'react';
import Movie from './Movie';
import styled from 'styled-components';

const MovieList = ({ movies }) => {
  return (
    <StyledMovieList>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </StyledMovieList>
  );
};

const StyledMovieList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default MovieList;
