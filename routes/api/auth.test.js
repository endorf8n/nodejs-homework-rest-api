const mongoose = require("mongoose");
const request = require("supertest");

const app = require("../../app");

const { DB_HOST_TEST, PORT = 3000 } = process.env;

const userData = {
  email: "test2@gmail.com",
  password: "123456",
};

describe("users routes", () => {
  let server = null;

  beforeAll(async () => {
    await mongoose.connect(DB_HOST_TEST);
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    server.close();
  });

  test("should register a user", async () => {
    const { statusCode, body } = await request(app)
      .post("/api/users/register")
      .send(userData);

    expect(statusCode).toBe(201);

    const { user } = body;
    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("subscription");

    expect(typeof user.email).toBe("string");
    expect(typeof user.subscription).toBe("string");
  });

  test("response login status 200 test", async () => {
    const { statusCode } = await request(app)
      .post("/api/users/login")
      .send(userData);
    expect(statusCode).toBe(200);
  });

  test("return token test", async () => {
    const { body } = await request(app).post("/api/users/login").send(userData);

    expect(body).toHaveProperty("token");
  });

  test("return user object test", async () => {
    const {
      body: { user },
    } = await request(app).post("/api/users/login").send(userData);

    expect(user).toHaveProperty("email");
    expect(user).toHaveProperty("subscription");
    expect(typeof user.email).toBe("string");
    // eslint-disable-next-line no-undef
    expect(typeof user.subscription).toBe("string");
  });
});
