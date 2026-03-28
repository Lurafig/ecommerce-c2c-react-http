import request from "supertest";
import server from "../../src/app";

describe("UsersE2E", () => {
  const body = {
    email: "eu@mesmo.com",
    password: "euMesmo123",
  };

  it("should register an user", async () => {
    const response = await request(server)
      .post("/api/auth/register")
      .send(body);

    expect(response.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        email: expect.any(String),
      }),
    );
    expect(response.status).toBe(201);
  });
  it("Should log in an user", async () => {
    const loginRes = await request(server).post("/api/auth/login").send(body);

    expect(loginRes.body).toEqual(
      expect.objectContaining({
        token: expect.any(String),
      }),
    );
    expect(loginRes.status).toBe(200);
  });
});
