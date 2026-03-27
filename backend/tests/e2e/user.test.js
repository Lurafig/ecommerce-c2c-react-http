import request from "supertest";
import server from "../../src/app";

let userId, token;

const body = {
  email: "teste@teste.com",
  password: "1239",
};

async function registerAndLogin() {
  const register = await request(server).post("/api/auth/register").send(body);

  userId = register.body.id;

  const login = await request(server).post("/api/auth/login").send(body);

  token = login.body.token;
}

beforeAll(registerAndLogin);

describe("Should handle user data", () => {
  it("Get my user data", async () => {
    const getMyUser = await request(server)
      .get(`/api/user/me/?id=${userId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(getMyUser.body).toStrictEqual({
      id: userId.toString(),
      email: body.email,
    });
    expect(getMyUser.status).toBe(200);
  });
});
