import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Main from './Main';


const Home = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput type='text' placeholder='Find: food, drink, delivery' />
      </SearchWrapper>
      <Word1>
        - FOOD · DRINK · DELIVERY -
      </Word1>
      <Logo>
        <div>Peko</div>
        <div>Peko!</div>
      </Logo>
      <Word2>
        I'm always ぺこぺこ !
      </Word2>
      <Word3>
        <NavLink exact to='/Login'>
          <div>
            GET ME FOOD!
          </div>
        </NavLink>
      </Word3>
    </Container>
  )
}



const SearchWrapper = styled.span`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
margin-top: 20px;
margin-bottom: 30px;
`;

const SearchInput = styled.input`
::placeholder{
  color: #FFFFFF;
}
width: 100%;
max-width: 960px;
min-width: 950px;
height: 42px;
border: 3px solid #CCA43D;
background-color:#A2A09B;
border-radius: 20px;
padding: 0 2rem;
font-size: 16px
`;

const Container = styled.div`
top: 1em;
background: #302D22;
width: 100%;
height: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;

const Word1 = styled.div`
  margin-top: 2em;
  letter-spacing: 0.25em;
  font-family: 'Montserrat';
`;

const Word2 = styled.div`
  font-family: 'Montserrat';
  margin-top: 130px;
  font-size: 23px;
  letter-spacing: -0.02em;
`;

const Word3 = styled.div`
font-family: 'Montserrat';
font-size: 20px;
margin-top: 5em;
letter-spacing: -0.02em;
text-decoration: underline;
`;

const Logo = styled.div`
div {
  font-family: 'Playfair Display';
  font-size: 110px;
  letter-spacing: 0.5em:
  text-align: center;
  box-sizing: borderbox;
  width: 250px;
  height: 50px;
}
div {
  margin-top: 50px;
}
`;

export default Home;
