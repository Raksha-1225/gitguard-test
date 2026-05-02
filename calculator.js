function divide(a, b) {
  return a / b;
}

function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  return query;
}

function processItems(items) {
  for (let i = 0; i <= items.length; i++) {
    console.log(items[i]);
  }
}

module.exports = { divide, getUser, processItems };
