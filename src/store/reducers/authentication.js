import { SET_TOKEN, REMOVE_TOKEN, TOKEN_KEY } from '../actions/authentication';

const previousState = {
  token: window.localStorage.getItem(TOKEN_KEY)
}

export default function reducer(state = previousState, action) {
  switch (action.type) {
    case SET_TOKEN: {
      // return {
      //   ...state,
      //   token: action.token,
      // };

      console.log('authentication reducer', action.token);
      return {
        token: action.token
      }
    }

    case REMOVE_TOKEN: {
      // const newState = { ...state };
      // delete newState.token;
      // return newState;
      return {
        token: null,
      }
    }
    default: return state;
  }
}
