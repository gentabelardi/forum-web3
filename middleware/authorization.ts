const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorization = (req: any, res: any) => {
  return new Promise((resolve, reject) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).end();
    const authSplit = authorization.split(" ");
    const [authType, authToken] = [authSplit[0], authSplit[1]];

    if (authType !== "Bearer") return res.status(401).end();
    console.log("auth", authToken);
    return jwt.verify(
      authToken,
      process.env.SUPABASE_JWT_SECRET || "supabase_jwt_secret",
      function (err: any, decoded: any) {
        
        if (err) return res.status(401).end();
        return resolve(decoded);
      }
    );
  });
};

module.exports = authorization;

