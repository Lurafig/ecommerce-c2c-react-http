import request from "supertest";
import server from "../../src/app";

describe("UsersE2E", () => {
  const body = {
    email: "eu@mesmo.com",
    password: "euMesmo123",
  };

  let userId, token;

  it("should register an user", async () => {
    const response = await request(server)
      .post("/api/auth/register")
      .send(body);

    userId = response.body.id;

    expect(response.status).toBe(201);
  });
  it("Shoud log in an user", async () => {
    const loginRes = await request(server).post("/api/auth/login").send(body);
    token = loginRes.body.token;

    const getMyUserInfo = await request(server)
      .get(`/api/user/me/?id=${userId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(getMyUserInfo.body).toBe({ id: userId, email: body.email });
  });
});
