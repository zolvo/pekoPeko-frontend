import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions/authentication';
import styled from 'styled-components';
import { Redirect, Switch, NavLink, useHistory } from 'react-router-dom';

function Login() {

  const history = useHistory();
  const user = useSelector(state => state.user);
  useEffect(() => {
    if (user)
      return () => {
        history.push('/');
      }
  }, [user])

  const [email, setEmail] = useState('demo@1234.com');
  const [password, setPassword] = useState('1234');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  //   const ProtectedComponent = () => {
  //     if (authFails)
  //       return <Redirect to='/login' />
  //   }
  //   return <Redirect to='/' />
  // }

  return (
    <Container>
      <LoginHeader>
        LOGIN
      </LoginHeader>
      <LoginFormWrapper>
        <form onSubmit={handleSubmit}>
          <div>
            <input type='text' placeholder='email' value={email} onChange={updateEmail} required />
          </div>
          <div>
            <input type='text' placeholder='password' value={password} onChange={updatePassword} required />
          </div>
          <div>
            <button type="submit" onClick='loggin'>Login</button>
          </div>
          <Footer>
            <div>
              don't have any account?
              <NavLink exact to='/signup'>
                <span>Signup</span>
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
  margin-bottom:30px;
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
}
`;

const Footer = styled.div`
  display:flex;
flex-direction:column;
align-items:center;

div{
  margin-top: 30px;
color: #292721;
}

span {
  margin-left: 5px;
  font-weight: 700;
  color: #EF9D55;
}

p {
  font-size: 10px;
  color: #292721;
}
`;

export default Login;
