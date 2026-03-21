import * as authService from "./auth.service.js";

const users = authService.users || [];

export async function getById(id) {
  const user = users.find((u) => u.id === id);

  const { email } = user;

  return { id, email };
}
