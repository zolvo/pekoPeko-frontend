import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Main from './components/Main';
import Banner from './components/Banner';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { loadToken } from "./store/actions/authentication";
import { ProtectedRoute, PrivateRoute } from "./util/route-util";
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';

const App = ({ needLogin, loadToken }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, []);

  if (!loaded) {
    return null;
  }
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container>
        <Wrapper>
          <Banner />
          <Navbar />
          <Switch>
            <Route exact path='/login' component={LoginForm} />
            <Route exact path='/signup' component={SignupForm} />
            <Route exact path='/main' component={Main} />
            <Home />
            <Redirect to='/' />
          </Switch>
        </Wrapper>
      </Container>
    </BrowserRouter>
  )
}


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

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.authentication.token);
  const dispatch = useDispatch();
  return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
};

export default AppContainer;
