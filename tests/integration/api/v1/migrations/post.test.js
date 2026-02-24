const { Exception } = require("bycontract");
import database from "infra/database.js";

beforeAll(cleanDatabase);
async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public");
}
test("POST to /api/v1/migrations should return 200", async () => {
  const response2 = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(201);

  const response2Body = await response2.json();
  console.log(response2Body);
  expect(response2Body.length).toBeGreaterThan(0);
  expect(Array.isArray(response2Body)).toBe(true);

  const migrationResult = await database.query(
    "SELECT * FROM pgmcifraigrations",
  );
  expect(migrationResult.rows.length).toBeGreaterThan(0);
});
