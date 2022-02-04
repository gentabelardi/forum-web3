import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "NEXT_PUBLIC_SUPABASE_URL",
  process.env.SUPABASE_SERVICE_KEY ||
    "SUPABASE_SERVICE_KEY"
);

export default supabase;
