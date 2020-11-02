import React from 'react';
import styled from 'styled-components';
import test01 from '../../assets/test01.webp';

function Chinese() {
  return (
    <Container>
      <ImgContainer>
        <img src={test01} />
      </ImgContainer>
      <TextContainer>
        <Title>
          Chinese
        </Title>
        <Subtitle>
          <h3>
            MEET FRIED RICE, NOODLES, AND DUMPLINGS
          </h3>
        </Subtitle>
        <Line>
          _____________
        </Line>
        <Description>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sagittis ex vitae ipsum sagittis vehicula. Proin nec justo sed erat tempus iaculis. Praesent condimentum pretium velit nec cursus. Suspendisse quis ipsum euismod, laoreet odio non, lacinia erat. Maecenas sed mollis metus, sit amet dignissim ante.
          <p>
              Donec vehicula semper risus, a pretium quam sodales eget. Sed augue velit, eleifend eu ultricies a, tempus sed diam. Phasellus et elit quis odio placerat varius. Integer ex eros, ultricies tristique maximus id, bibendum in tortor.
          </p>
          </div>
        </Description>
      </TextContainer>
    </Container>
  )
}

const Container = styled.div`
display:flex;
flex-direction: row;
align-items:center;
justify-content: center;
width:100%;
height:100%;

`;

const ImgContainer = styled.div`
img{
  height:600px;
  width:460px;
}
`;

const TextContainer = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items:center;
height:600px;
width:680px;
outset: none;
`;

const Title = styled.div`
color: #756F63;
text-align: center;
font-family: 'playfair display';
font-size: 40px;
padding-bottom: 0.2em;
`;

const Subtitle = styled.div`
h3{
color: #756F63;
text-align: center;
font-family: open sans,sans-serif;
letter-spacing:0.15em;
font-size:15px;
font-weight: 200;
}
`;

const Line = styled.div`
color: #756F63;
margin: 0px 0px;
text-align: center;
font-family: monserrat;
padding-bottom:1em;

`;
const Description = styled.div`
display:flex;
flex-direction: row;
flex-wrap: wrap;
align-items:center;
justify-content: center;
div{
  box-sizing: border-box;
  height: 20em;
  width: 28em;
  padding-top: 30px;
  text-align: center;
  color: #756F63;
  font-family: monserrat;
  font-size: 15px;
  letter-spacing:0.05em;
  font-weight: 200;
}p{
  box-sizing: border-box;
  height: 12em;
  width: 28em;
  padding-top: 30px;
  text-align: center;
  color: #756F63;
  font-family: monserrat;
  font-size: 15px;
  letter-spacing:0.05em;
  font-weight: 200;
}
`;



export default Chinese
