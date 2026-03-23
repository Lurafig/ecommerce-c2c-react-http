import * as authService from "./auth.service.js";

const users = authService.users || [];

export async function getById(id) {
  const user = users.find((value) => value.id == id);

  console.log(id == users[0].id, "valores: ", id, " ", users[0].id);
  console.log(users, 1);

  if (!user) return;
  const { email } = user;

  return { id, email };
}
