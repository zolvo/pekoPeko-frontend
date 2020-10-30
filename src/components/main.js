import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Home from '/Home';

function Main() {
  return (
    <BrowserRouter>
      <Switch>
        <Home />
        <Component>
          Hi My Name is Main
      </Component>
      </Switch>
    </BrowserRouter>
  )
}

const Component = styled.div`

`;


export default Main
