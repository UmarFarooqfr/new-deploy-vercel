import * as jwtTokenKey from '../..'
import jwt from 'jsonwebtoken';

export function checkToken(req, res, next) {
  const token =
    req?.body?.token || req?.query?.token || req?.headers["x-access-token"] || req?.headers["authorization"];
  if (!token) {
    return res?.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, (jwtTokenKey.TOKEN_KEY || process.env.TOKEN_KEY));
    req.user = decoded;
  } catch (err) {
    return res?.status(401).send("Invalid Token");
  }

  return next();
}