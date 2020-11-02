import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import bg from '../assets/bg.jpg';
import noodles from '../assets/noodles.png';
import spagethi from '../assets/spagethi.jpg';
import burger from '../assets/burger.png';


import Chinese from './categories/Chinese';
import Italian from './categories/Italian';
import Thai from './categories/Thai';
import Burger from './categories/Burger';
import About from './About';

function Category() {
  return (
    <Container>
      <SubContainer>
        <Home />
      </SubContainer>
      <SubContainer1>
        <Chinese />
      </SubContainer1>
      <SubContainer2 />
      <SubContainer1>
        <Burger />
      </SubContainer1>
      <SubContainer3 />
      <SubContainer1>
        <Italian />
      </SubContainer1>
      <SubContainer4 />
      <SubContainer1>
        <Thai />
      </SubContainer1>
      <About />
    </Container >
  )
}


const Container = styled.div`
`;

const SubContainer = styled.div`
height: 720px;
`;

const SubContainer1 = styled.div`
background-color: #FFFFFF;
height: 820px;
color: #000000;

`;

const SubContainer2 = styled.div`
background-color:#D7CBBB;
height: 608px;
background-image: url(${noodles});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;

const SubContainer3 = styled.div`
background-color:#D7CBBB;
height: 608px;
background-image: url(${burger});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;

const SubContainer4 = styled.div`
background-color:#D7CBBB;
height: 608px;
background-image: url(${spagethi});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;
const Mexican = styled.div`
`;

const Japanese = styled.div`
`;

const Burgers = styled.div`
`;

const Pizza = styled.div`
`;

const Sweets = styled.div`
`;


export default Category;
