const db = require("../../data/config");

function findAll() {
  return db("items");
}

function findById(id) {
  return db("items").where("id", id).first();
}

module.exports = {
  findAll,
  findById,
};
