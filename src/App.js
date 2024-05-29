import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import MoviePage from './pages/MoviePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <StyledApp>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movie/:id" component={MoviePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
        </Switch>
      </StyledApp>
    </Router>
  );
};

const StyledApp = styled.div`
  font-family: Arial, sans-serif;
`;

export default App;
