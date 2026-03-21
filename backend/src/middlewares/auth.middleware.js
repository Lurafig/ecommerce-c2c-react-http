import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    res.statusCode = 401;
    return res.end(JSON.stringify({ error: "Token não fornecido" }));
  }

  try {
    const decoded = jwt.verify(token, "SECRET");
    req.user = decoded;
  } catch (error) {
    res.statusCode = 401;
    res.end(JSON.stringify({ error: error.message }));
  }
}
