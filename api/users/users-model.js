const db = require("../../data/config");

function find() {
  return db("users");
}

function findById(id) {
  return db("users").where("id", id).first();
}

function add(payload) {
  return db("users").insert(payload);
}

module.exports = {
  find,
  findById,
  add,
};
