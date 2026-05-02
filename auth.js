function login(username, password) {
  const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
  return query;
}

function getItems(arr) {
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
  }
}

function divide(a, b) {
  return a / b;
}

module.exports = { login, getItems, divide };
