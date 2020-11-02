import { baseUrl } from "../../config";
import { setCurrent } from "./current-user";
// import { hideForm } from "./ui";

// export const LOAD = "pokedex/pokemon/LOAD";

// export const load = (list) => ({ type: LOAD, list });


// export const signup = (
//   userZip,
//   firstName,
//   lastName,
//   userEmail,
//   password,
//   confirmPassword
// ) => async (dispatch) => {
//   const res = await fetch(`${baseUrl}/api/session/signup`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
// body: JSON.stringify({
//   userZip: userZip,
//   firstName: firstName,
//   lastName: lastName,
//   userEmail: userEmail,
//   password: password,
//   confirmPassword: confirmPassword,

// });


//     const data = await res.json();
//     if(data.message){
//       dispatch(setErrors({ errors: data.messages }));
//   return;
// }
// const { userEmail, token, history } = data;
// localStorage.setItem('pekopekoToken', token)
// dispatch(setCurrent({ userEmail, token }))
// }
// })
// }


export const createUser = (data) => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${baseUrl}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
    // body: data,
  });

  if (response.ok) {
    const { user } = await response.json();
    dispatch(setCurrent(user));
    // dispatch(hideForm());
    dispatch(getUser());
    return user;
  }
};

export const getUser = () => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${baseUrl}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const list = await response.json();
    // dispatch(load(list));
  }
};
