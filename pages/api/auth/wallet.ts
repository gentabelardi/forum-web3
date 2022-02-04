import supabase from "../../../services/supabase";
import { ethers } from "ethers";
import jwt from "jsonwebtoken";
import cookie from 'cookie'
export default async function walletApi(req: any, res: any) {
  try {
    const { walletAddr, signature, nonce } = req.body;
    const signerAddr = ethers.utils.verifyMessage(nonce, signature);
    if (signerAddr !== walletAddr) {
      throw new Error("wrong_signature");
    }
    let { data: user, error } = await supabase
      .from("users")
      .select("*")
      .eq("walletAddr", walletAddr)
      .eq("nonce", nonce)
      .single();

    const token = jwt.sign(
      {
        aud: "authenticated",
        exp: Math.floor(Date.now() / 1000 + 60 * 60),
        sub: user.id,
        user_metadata: {
          id: user.id,
        },
        role: "authenticated",
      },
      process.env.SUPABASE_JWT_SECRET || "39771682-be8b-410e-a18d-4a4a4454a652"
    );
    res.setHeader(
      "Set-Cookie",
      cookie.serialize("token", token, {
        httpOnly: true,
        maxAge: 60 * 60,
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(200).json({ user, token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
