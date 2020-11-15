const db = require("../../data/config");

function getPotlucks() {
  return db("potlucks");
}

function getPotluckById(id) {
  return db("potlucks").where("id", id).first();
}

async function addPotluck(payload) {
  const [id] = await db("payloads").insert(payload);
  return getPotluckById(id);
}

function removePotluck(id) {
  return db("potlucks").where("id", id).del();
}

module.exports = {
  getPotlucks,
  getPotluckById,
  addPotluck,
  removePotluck,
};
