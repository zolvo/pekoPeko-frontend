import React from 'react'
import styled from 'styled-components';

const Banner = () => {
  return (
    <Container>
      This apps is designed to help you to <span>find good food</span>. Created by someone who <span>loves to eat</span>.
    </Container>
  )
}

const Container = styled.div`
  background-color: #EFF1F2;
  color: #20303C;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  position:fixed;
  width: 100%;
  z-index: 10;

  span {
    color: #20303C;
    font-weight: 900;
    margin-left: 5px;
  }

`;

export default Banner;
