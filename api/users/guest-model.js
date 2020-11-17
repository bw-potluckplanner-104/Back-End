const db = require("../../data/config");

function find() {
  return db("potluck_guests").orderBy("potluck_id");
}

function getGuest(guest) {
  return db("potluck_guests").where("guest", guest).first();
}

async function addGuest(payload) {
  const [guest] = await db("potluck_guests").insert(payload);
  return getGuest(guest);
}

function removeGuest(id) {
  return db("potluck_guests").where("id", id).del();
}

module.exports = {
  find,
  getGuest,
  addGuest,
  removeGuest,
};
