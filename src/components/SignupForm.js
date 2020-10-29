import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';

function Signup() {
  const [userZip, setUserZip] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const updateUserZip = (e) => {
    setUserZip(e.target.value);
  };
  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const updateLastName = (e) => {
    setLastName(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Container>
      <LoginHeader>
        SIGNUP
      </LoginHeader>
      <LoginFormWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <input type='text' placeholder='ZIP code' value={userZip} onChange={updateUserZip} required />
          </div>
          <div>
            <input type='text' placeholder='first Name' value={firstName} onChange={updateFirstName} required />
          </div>
          <div>
            <input type='text' placeholder='last Name' value={lastName} onChange={updateLastName} required />
          </div>
          <div>
            <input type='text' placeholder='email' value={userEmail} onChange={updateEmail} required />
          </div>
          <div>
            <input type='text' placeholder='password' value={password} onChange={updatePassword} required />
          </div>
          <div>
            <button type="submit">SignUp</button>
          </div>
          <Footer>
            <div>
              have an account?
              <span>Login</span>
            </div>
            <p>
              @2020 created by: PekoPeko.
            </p>
          </Footer>
        </form>
      </LoginFormWrapper>
    </Container>
  )
}

const Container = styled.div`
background-color: #FFFFFF;
height: 100%;
display:flex;
flex-direction:column;
align-items:center;
`;

const LoginHeader = styled.div`
background-color: #594A41;
height: 4em;
width: 100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
`;

const LoginFormWrapper = styled.div`
background-color: #F4F3F2;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
width: 500px;
height: 500px;
div{
  margin-top:20px;
  text-decoration: none;
}
input{
  color: #292721;
  border: none;
  width: 18em;
  height: 3em;
  padding-left: 1em;
  border-radius: 1em;
}

button{
  background-color: #EF9D55;
  font-weight: 700;
  border: none;
  width: 18em;
  height: 3em;
  border-radius: 2em;

  `;

const Footer = styled.div`
  display:flex;
flex-direction:column;
align-items:center;
div{
  margin-top: 20px;
color: #292721;
}

span {
  margin-left: 5px;
  font-weight: 700;
  color: #EF9D55;
}
p{
  margin-top: 15px;
  font-size: 10px;
  color: #292721;
}

`;

export default Signup;
