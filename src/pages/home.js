import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import styled from 'styled-components';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7917de5a042a75bbede9ebcf3701fa95');
      setMovies(response.data.results);
    };
    fetchMovies();
  }, []);

  return (
    <StyledHome>
      <h1>Popular Movies</h1>
      <MovieList movies={movies} />
    </StyledHome>
  );
};

const StyledHome = styled.div`
  h1 {
    text-align: center;
    margin-top: 16px;
  }
`;

export default Home;
