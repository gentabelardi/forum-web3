const authorizationToken = ( token:any) => {
    return new Promise((resolve, reject) => {
  
      return jwt.verify(
        token,
        process.env.SUPABASE_JWT_SECRET || "39771682-be8b-410e-a18d-4a4a4454a652",
        function (err: any, decoded: any) {
          return resolve(decoded);
        }
      );
    });
  };
  
module.exports = authorizationToken;
  