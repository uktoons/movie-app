import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AddComment = ({ movieId, onCommentAdded }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`/api/movies/${movieId}/comments`, { text: comment });
    onCommentAdded(response.data);
    setComment('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
        required
      ></textarea>
      <button type="submit">Add Comment</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  textarea {
    margin-bottom: 8px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    padding: 8px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
`;

export default AddComment;
