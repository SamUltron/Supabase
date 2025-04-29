import { createClient } from "@supabase/supabase-js";

const supUrl = import.meta.env.VITE_SUPABASE_URL;
const supKey = import.meta.env.VITE_API_KEY;
console.log(supKey)
export const supabase = createClient(supUrl, supKey );

