import supabase from "../../../services/supabase";
import { v4 } from "uuid";
export default async function nonceApi (req: any, res: any)  {
  try {
    const { walletAddr } = req.body;
    const nonce = v4();
    let { data, error } = await supabase
      .from("users")
      .select("nonce")
      .eq("walletAddr", walletAddr)
      .single();
  
    if (data) {
      // new pnce
      let {data, error} = await supabase.from('users').update({nonce}).match({walletAddr})
    } else {
      let {data, error} = await supabase.from("users").insert({ nonce, walletAddr });
      console.log("error",error);
     
    }
    res.status(200).json({nonce});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
