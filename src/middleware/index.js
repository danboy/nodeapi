import { auth } from 'express-oauth2-jwt-bearer';
import { User } from "../models/User.js";

export const localActorByJwt = () => {
  return async (req, res, next) => {
    next();
  };
}

export const  requireContentType = (aTypeRegexp) => {
  return (req, res, next) => {
    let contentType = (req.headers && req.headers["content-type"]) || "";

    if (contentType.match(aTypeRegexp)) {
      next();
    } else {
      return res
        .status(415)
        .send({ message: res.__("errors.unsupported_media") });
    }
  };
}

export const requireAuth  = auth({
    audience: process.env.AUTH0_AUDIENCE,
    issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
    tokenSigningAlg: process.env.AUTH0_SIGNING_ALG,
  });
//
export default {localActorByJwt, requireAuth, requireContentType}
