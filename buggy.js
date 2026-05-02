const password = "admin123";
const apiKey = "sk-1234567890abcdef";

function getUserById(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  return db.execute(query);
}

function sendEmail(emails) {
  for (let i = 0; i <= emails.length; i++) {
    sendMail(emails[i]);
  }
}

function divide(a, b) {
  return a / b;
}

function saveUser(data) {
  fetch('/api/user', {
    method: 'POST',
    body: data
  });
}

module.exports = { getUserById, sendEmail, divide, saveUser };
