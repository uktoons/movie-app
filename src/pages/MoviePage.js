import React from 'react';
import MovieDetails from '../components/MovieDetails';
import styled from 'styled-components';

const MoviePage = () => {
  return (
    <StyledMoviePage>
      <MovieDetails />
    </StyledMoviePage>
  );
};

const StyledMoviePage = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

export default MoviePage;
