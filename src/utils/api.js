export const baseURL = "http://localhost:3001";

function getItems() {
  return fetch(`${baseURL}/items`).then((res) => {
    return checkResponse(res);
  });
}

function addNewItem({name, imageUrl, weather}, token) {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
  }),
  }).then((res) => {
    return checkResponse(res);
  });
}

function deleteItem(_id, token) {
  return fetch(`${baseURL}/items/${_id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
}

function addCardLike(_id, token) {
  return fetch(`${baseURL}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
}

function removeCardLike(_id, token) {
  return fetch(`${baseURL}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    return checkResponse(res);
  });
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export { getItems, addNewItem, deleteItem, checkResponse, addCardLike, removeCardLike };