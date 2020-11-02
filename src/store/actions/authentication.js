import { baseUrl } from '../../config';

export const TOKEN_KEY = 'pekopeko/authentication/token';
export const SET_TOKEN = 'pekopeko/authentication/SET_TOKEN';
export const REMOVE_TOKEN = 'pekopeko/authentication/REMOVE_TOKEN';


export const removeToken = token => ({ type: REMOVE_TOKEN });
export const setToken = token => ({ type: SET_TOKEN, token });

export const loadToken = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const login = (userEmail, password) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userEmail, password }),
  });

  if (res.ok) {
    const { token } = await res.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }
};


export const signup = (user) => async (dispatch) => {
  // const { userZip, firstName, lastName, userEmail, password } = props
  const res = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });

  if (res.ok) {
    const { token } = await res.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }

  // console.log(userZip, firstName, lastName, userEmail, password);
};


export const logout = () => async (dispatch, getState) => {
  const { authentication: { token } } = getState();
  const response = await fetch(`${baseUrl}/session`, {
    method: 'delete',
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.ok) {
    window.localStorage.removeItem(TOKEN_KEY);
    dispatch(removeToken());
  }
}
