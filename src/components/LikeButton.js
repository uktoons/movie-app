import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const LikeButton = ({ movieId }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchLikes = async () => {
      const response = await axios.get(`/api/movies/${movieId}/likes`);
      setLikes(response.data.likes);
      setLiked(response.data.userLiked);
    };
    fetchLikes();
  }, [movieId]);

  const handleLike = async () => {
    if (liked) return;
    const response = await axios.post(`/api/movies/${movieId}/like`);
    setLikes(response.data.likes);
    setLiked(true);
  };

  return (
    <StyledButton onClick={handleLike} disabled={liked}>
      {liked ? 'Liked' : 'Like'} ({likes})
    </StyledButton>
  );
};

const StyledButton = styled.button`
  padding: 8px 16px;
  margin-top: 16px;
  margin-right: 8px;
  border: none;
  border-radius: 4px;
  background-color: ${props => (props.disabled ? '#6c757d' : '#007bff')};
  color: white;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
`;

export default LikeButton;
