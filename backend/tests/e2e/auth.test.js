import request from "supertest";
import server from "../../src/app";

describe("UsersE2E", () => {
  it("should create a user", async () => {
    const response = await request(server).post("/api/auth/register").send({
      email: "eu@teste.com",
      password: "eu lucas",
    });

    console.log("1", response.headers);
    console.log("2", response.text);

    expect(response.status).toBe(201);
    expect(response.body.email).toBe("eu@teste.com");
  });
});
