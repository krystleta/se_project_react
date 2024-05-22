const baseURL = "http://localhost:3001";

function getItems() {
  return fetch(`${baseURL}/items`).then((res) => {
    return _checkResponse(res);
  });
}

function addNewItem({name, imageUrl, weather}) {
  return fetch(`${baseURL}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
  }),
  }).then((res) => {
    return _checkResponse(res);
  });
}

function deleteItem(_id) {
  return fetch(`${baseURL}/items/${_id}`, {
    method: "DELETE",
  }).then((res) => {
    return _checkResponse(res);
  });
}

function _checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export { getItems, addNewItem, deleteItem };