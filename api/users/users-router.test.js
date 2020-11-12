const supertest = require("supertest");
const server = require("../server");
const db = require("../../data/config.js");

describe("tests for users-router", () => {
  it("tests GET /users endpoint", async () => {
    const res = await supertest(server).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("application/json");
    //expect(res.body.length).toEqual(5);
  });
});
