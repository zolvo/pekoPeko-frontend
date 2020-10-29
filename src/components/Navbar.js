import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
// import avatar from '../assets/test01.png'

const Navbar = () => {
  return (
    <Container>
      <SubContainer1>
        <SubContainer2>
          <NavLink exact to='/' className='is-active'>
            <div>HOME</div>
          </NavLink>
          <NavLink exact to='/category' className='is-active'>
            <div>CATEGORY</div>
          </NavLink>
          <NavLink exact to='/delivery' className='is-active'>
            <div>DELIVERY</div>
          </NavLink>
        </SubContainer2>
        <SubContainer3>
          <NavLink exact to='/login' className='is-active'>
            <div>LOGIN</div>
          </NavLink>
          <NavLink exact to='/signup' className='is-active'>
            <div>SIGNUP</div>
          </NavLink>
        </SubContainer3>
      </SubContainer1>
    </Container>
  )
}

// const AvatarWrapper = styled.span`
// img {
//   height: 3rem;
//   width: 3rem;
//   border-radius: 50% 50%;
// }
// `;

const Container = styled.div`
font-family: 'Monserrat';
min - width: 200px;
backdrop - filter: blur(35px);
background: #292721;
width: 100%;
height: 55px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
`;

const SubContainer1 = styled.div`
width: 60%;
height: 55px;
font-family: 'Montserrat';
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
`;

const SubContainer2 = styled.div`
width: 35%;
font-family: 'Montserrat';
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
div {
  margin-right: 3em
  box-sizing: border-box;
};
`;

const SubContainer3 = styled.div`
width: 15%;
font-family: 'Montserrat';
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;
div {
  margin-right: 2em;
  box-sizing: border-box;
}
`;


export default Navbar;
