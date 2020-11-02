import React from 'react';
import styled from 'styled-components';
import Home from './Home';
import bg from '../assets/bg.jpg'
import Chinese from './categories/Chinese';


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
        <Thai>
          Thai
        </Thai>
      </SubContainer1>
      <SubContainer2 />
      <SubContainer1>
        <Italy>
          Italy
        </Italy>
      </SubContainer1>
      <SubContainer2>
        <Mexican>
          Mexican
        </Mexican>
      </SubContainer2>
      <SubContainer1>
        <Japanese>
          Japanese
        </Japanese>
      </SubContainer1>
      <SubContainer2>
        <Burgers>
          Burgers
        </Burgers>
      </SubContainer2>
      <SubContainer1>
        <Pizza>
          Pizza
        </Pizza>
      </SubContainer1>
      <SubContainer2>
        <Sweets>
          Sweets
        </Sweets>
      </SubContainer2>
    </Container>
  )
}


const Container = styled.div`
background-image: url(${bg.jpg});
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
background-image: url(${bg});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;

const Thai = styled.div`
`;

const Italy = styled.div`
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
