import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import AddComment from './AddComment';
import DownloadButton from './DownloadButton';
import LikeButton from './LikeButton';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=7917de5a042a75bbede9ebcf3701fa95`);
      setMovie(response.data);
    };
    const fetchComments = async () => {
      const response = await axios.get(`/api/movies/${id}/comments`);
      setComments(response.data);
    };
    fetchMovie();
    fetchComments();
  }, [id]);

  const handleCommentAdded = (newComment) => {
    setComments([...comments, newComment]);
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <StyledMovieDetails>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <DownloadButton movieId={id} />
      <LikeButton movieId={id} />
      <AddComment movieId={id} onCommentAdded={handleCommentAdded} />
      <CommentList>
        {comments.map(comment => (
          <li key={comment._id}>{comment.text}</li>
        ))}
      </CommentList>
    </StyledMovieDetails>
  );
};

const StyledMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
    border-radius: 8px;
    margin-top: 16px;
  }
`;

const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 16px;
  li {
    background: #f0f0f0;
    padding: 8px;
    border-radius: 4px;
    margin-bottom: 8px;
  }
`;

export default MovieDetails;
