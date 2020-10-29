import { baseUrl } from "../../config";
import { setCurrent } from "./current-poke";
import { hideForm } from "./ui";

export const LOAD = "pokedex/pokemon/LOAD";

export const load = (list) => ({ type: LOAD, list });

export const createPokemon = (data) => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${baseUrl}/pokemon`, {
    method: "post",
    headers: {
      // "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(data),
    body: data,
  });

  if (response.ok) {
    const { pokemon } = await response.json();
    dispatch(setCurrent(pokemon));
    dispatch(hideForm());
    dispatch(getPokemon());
    return pokemon;
  }
};

export const getPokemon = () => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${baseUrl}/pokemon`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};
