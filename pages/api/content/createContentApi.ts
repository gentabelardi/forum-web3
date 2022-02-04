import supabase from "../../../services/supabase";
const authorization = require("../../../middleware/authorization");

export default async function createContentApi(req: any, res: any) {
  try {

    const { description, title } = req.body;
    const auth = await authorization(req, res);

    let { data, error } = await supabase
      .from("content")
      .insert([
        {
          'title': title,
          'description': description,
          'authorID': auth.user_metadata.id,
        }
      ])

    res.status(200).json({ data, message: "created success" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
