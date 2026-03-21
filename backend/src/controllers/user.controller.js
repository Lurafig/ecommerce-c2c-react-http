import * as userService from "../services/user.service.js";

export async function getMe(req, res) {
  const user = await userService.getById(req.user.id);

  res.end(JSON.stringify(user));
}
