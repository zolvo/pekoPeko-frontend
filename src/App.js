import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Banner from './components/Banner';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Container>
      <Wrapper>
        <Banner />
        <Navbar />
        <Switch>
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/signup' component={SignupForm} />
          <Home />
        </Switch>
      </Wrapper>
    </Container>
  </BrowserRouter>
)

const Container = styled.div`
  background: #302D22;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-item: center;
  flex-direction: column;
`;

export default App;
