import supabase from "../../../services/supabase";
const authorization = require("../../../middleware/authorization");

export default async function upadetUserApi(req: any, res: any) {
    try {

        const { displayName, username, bio } = req.body;
        const auth = await authorization(req, res);
        let { data, error } = await supabase
            .from('users')
            .update({ displayName: displayName, username: username, bio: bio })
            .match({ id: auth.user_metadata.id, })
            console.log(error)

        res.status(200).json({ data, message: "created success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
