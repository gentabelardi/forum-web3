const authorization = require("../../../middleware/authorization");
import supabase from "../../../services/supabase";

export default async function getUserApi(req: any, res: any) {
    try {
        const auth = await authorization(req, res);

        
        // const { walletAddr } = req.body;
        
        let { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", auth.user_metadata.id)
        .single();
        res.status(200).json({message: "Succes get data", data: data});
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
