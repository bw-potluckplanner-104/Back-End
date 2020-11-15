const db = require("../../data/config");

function getItems() {
  return db("items");
}

function getItemById(id) {
  return db("items").where("id", id).first();
}

async function addItem(payload) {
  const [id] = await db("items").insert(payload);
  return getItemById(id);
}

function removeItem(id) {
  return db("items").where("id", id).del();
}

module.exports = {
  getItems,
  getItemById,
  addItem,
  removeItem,
};
