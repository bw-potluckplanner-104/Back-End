const db = require("../../data/config");

function getUsers() {
  return db("users");
}

function getUserById(id) {
  return db("users").where("id", id).first();
}

function findBy(filter) {
  return db("users")
    .select("id", "username", "email", "password")
    .where(filter);
}

async function add(payload) {
  const [id] = await db("users").insert(payload);
  return getUserById(id);
}

module.exports = {
  getUsers,
  getUserById,
  findBy,
  add,
};
