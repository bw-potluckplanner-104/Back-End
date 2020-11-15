const db = require("../../data/config");

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where("id", id).first();
}

function findUserBy(filter) {
  return db("users")
    .select("id", "username", "email", "password")
    .where(filter)
    .first();
}

async function addUser(payload) {
  const [id] = await db("users").insert(payload);
  return getUserById(id);
}

function removeUser(id) {
  return db("users").where("id", id).del();
}

module.exports = {
  getUsers,
  getUserById,
  findUserBy,
  addUser,
  removeUser,
};
