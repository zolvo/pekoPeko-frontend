import React from 'react'
import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput type='text' placeholder='Find: food, drink, delivery' />
      </SearchWrapper>
      <div>
        - FOOD · DRINK · DELIVERY -
      </div>
      <Logo>
        <div>Peko</div>
        <div>Peko!</div>
      </Logo>
      <div>
        I'm always ぺこぺこ !
      </div>
    </Container>
  )
}



const SearchWrapper = styled.span`
display: flex;
align-items: center;
flex-direction: row;
justify-content: space-evenly;
margin-top: 10px;
margin-bottom: 20px;
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
margin: 0.5rem 0;
background-color:#A2A09B;
box-shadow: 0 14px 9px -15px rgba(0, 0, 0, 0, 0.25);
border-radius: 20px;
padding: 0 2rem;
font-size: 16px
`;

const Logo = styled.div`
div {
  font-family: 'Playfair Display';
  font-size: 110px;
  line-height: 1.4em;
  letter-spacing: 5.5em:
  text-align: center;
  box-sizing: borderbox;
  width: 250px;
  height: 50px;
  margin-top: 80px;
}

div {
  margin-top: 50px;
}
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

export default Home;
