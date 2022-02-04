import cookie from 'cookie'

export default async function logoutApi(req: any, res: any) {
  try {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", "", {
        httpOnly: true,
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
   
    res.status(200).json("succes logout");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
