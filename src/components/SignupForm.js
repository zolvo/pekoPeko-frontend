import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
import { createUser } from '../store/actions/user'
import { useHistory, NavLink } from 'react-router-dom';
import { setCurrent } from '../store/actions/current-user';

function SignupForm(createUser) {
  const history = useHistory();
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrent(null))
  }, [])

  useEffect(() => {
    if (user)
      return () => {
        history.push('/');
      }
  }, [user])

  const [userZip, setUserZip] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('userZip', userZip);
    data.append('firstName', firstName);
    data.append('lastName', lastName);
    data.append('userEmail', userEmail);
    data.append('password', password);

    createUser(data).then((s) => {
      console.log(s);
    });
  };

  const updateProperty = (callback) => (e) => {
    callback(e.target.value);
  }

  return (
    <Container>
      <LoginHeader>
        SIGNUP
      </LoginHeader>
      <LoginFormWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <input type='text' placeholder='ZIP code' value={userZip} onChange={updateProperty(setUserZip)} required />
          </div>
          <div>
            <input type='text' placeholder='first Name' value={firstName} onChange={updateProperty(setFirstName)} required />
          </div>
          <div>
            <input type='text' placeholder='last Name' value={lastName} onChange={updateProperty(setLastName)} required />
          </div>
          <div>
            <input type='text' placeholder='email' value={userEmail} onChange={updateProperty(setUserEmail)} required />
          </div>
          <div>
            <input type='text' placeholder='password' value={password} onChange={updateProperty(setPassword)} required />
          </div>
          <div>
            <input type='text' placeholder='confirm password' value={confirmPassword} onChange={updateProperty(setPassword)} required />
          </div>
          <div>
            <button type="submit">SignUp</button>
          </div>
          <Footer>
            <div>
              have an account?
              <NavLink exact to='/Login'>
                <span>Login</span>
              </NavLink>
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
height: 550px;
div{
  margin-top:18px;
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

const SignupFormContainer = () => {
  const dispatch = useDispatch();

  return (
    <SignupForm createUser={(user) => dispatch(createUser(user))} />
  );
};

export default SignupFormContainer;
