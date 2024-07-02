import { baseURL, checkResponse } from "../utils/api";

export const register = ({name, avatar, email, password}) => {
  return fetch(`${baseURL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  })
    .then((res) => {
      return checkResponse(res);
    })
};

export const signIn = ({email, password}) => {
    return fetch(`${baseURL}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((res) => {
      return checkResponse(res);
    });
  };

  export const editProfile = ({name, avatar}, token) => {
    return fetch(`${baseURL}/users/me`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name, avatar }),
    }).then((res) => {
      return checkResponse(res);
    });
  };

  export const checkToken = (token) => {
    return fetch(`${baseURL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      return checkResponse(res);
    });
  }