import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://krpzicuxulbjnfiwhbdw.supabase.co",
  process.env.SUPABASE_SERVICE_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzNzMwMzAyLCJleHAiOjE5NTkzMDYzMDJ9.yR8NDU-1d6yszfPk3AKZTt2pPK-nQwwAhUnZ9mt_FrM"
);

export default supabase;
