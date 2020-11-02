import React from 'react';
import styled from 'styled-components';
import test01 from '../../assets/test01.webp';
import mixer from '../../assets/mixer.jpg';

function Thai() {
  return (
    <Container>
      <ImgContainer>
        <img src={mixer} />
      </ImgContainer>
      <TextContainer>
        <Title>
          Thai
        </Title>
        <Subtitle>
          <h3>
            QUALITY FOOD FROM THE EXOTIC PLACE
          </h3>
        </Subtitle>
        <Line>
          _____________
        </Line>
        <Description>
          <div>
            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
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
  height:335px;
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


export default Thai;
