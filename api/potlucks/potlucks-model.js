const db = require("../../data/config");

function find() {
  return db("potlucks");
}

function findById(id) {
  return db("potlucks").where("id", id).first();
}

module.exports = {
  find,
  findById,
};
