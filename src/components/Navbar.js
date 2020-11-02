import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Banner from './Banner';
// import avatar from '../assets/test01.png'

const Navbar = () => {
  return (
    <>
      <Banner />
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
          <MiniSearch>
            <i class="fas fa-search"></i>
            <SearchInput type='text' placeholder='Find: food, drink, delivery' />
          </MiniSearch>
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
    </>
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
height: 110px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
text-decoration: none;
position: fixed;
padding-top: 50px;
opacity: 0.8;
`;

const MiniSearch = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
margin-left: 5px;
padding-left: 5px;
box-sizing: border-box;
height: 30px;
border-radius: 20px;

border: 1px solid #FFFFFF;
background-color: #FEFEFE;
i{
  color:#413F39;
}
`;

const SearchInput = styled.input`
margin-left: 5px;
padding-left: 5px;
box-sizing: border-box;
height: 30px;
border-radius: 20px;
text-decoration: none;
border: 3px solid #FEFEFE;
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
