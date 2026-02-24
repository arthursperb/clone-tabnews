import database from "infra/database.js";
const { Exception } = require("bycontract");

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}

test("GET to /api/v1/migrations should return 200", async () => {
  const response1 = await fetch("http://localhost:3000/api/v1/migrations");
  expect(response1.status).toBe(200);

  const response1Body = await response1.json();
  console.log(response1Body);

  expect(response1Body.length).toBeGreaterThan(0);

  expect(Array.isArray(response1Body)).toBe(true);
});
