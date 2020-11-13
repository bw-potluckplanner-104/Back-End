const db = require("../../data/config");

function find() {
  return db("potlucks");
}

function findById(id) {
  return db("potlucks").where("id", id).first();
}

function add(payload) {
  return db("");
}

module.exports = {
  find,
  findById,
};
