import supabase from "../../../services/supabase";

export default async function deleteUserApi(req: any, res: any) {
    try {

        const { walletAddr } = req.body;

        let { data, error } = await supabase
            .from('users')
            .delete()
            .match({ walletAddr: walletAddr })

        res.status(200).json("delted succes", data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
