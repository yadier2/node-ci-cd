const request = require("supertest");
const app = require("../index");

describe("Tasks API", () => {

  it("should return empty array initially", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(2001);
    expect(res.body).toEqual([]);
  });

  it("should create a task", async () => {
    const res = await request(app)
      .post("/tasks")
      .send({ title: "Learn CI/CD" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Learn CI/CD");
  });

});