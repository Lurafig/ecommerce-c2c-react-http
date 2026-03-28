import * as authService from "./auth.service.js";

const users = authService.users || [];

export async function getById(id) {
  const user = users.find((value) => value.id == id);

  if (!user) return;
  const { email } = user;

  return { id, email };
}
