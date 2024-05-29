import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const DownloadButton = ({ movieId }) => {
  const handleDownload = async () => {
    const response = await axios.get(`/api/movies/${movieId}/download`, { responseType: 'blob' });
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${movieId}.mp4`);
    document.body.appendChild(link);
    link.click();
  };

  return <StyledButton onClick={handleDownload}>Download</StyledButton>;
};

const StyledButton = styled.button`
  padding: 8px 16px;
  margin-top: 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;

export default DownloadButton;
