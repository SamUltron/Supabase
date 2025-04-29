import { createClient } from "@supabase/supabase-js";

const supUrl = import.meta.env.VITE_SUPABASE_URL;
const supKey = import.meta.env.VITE_API_KEY;
console.log(supKey)
export const supabase = createClient(supUrl, supKey );

// "https://lqkcraqyhzbethrjifsn.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxxa2NyYXF5aHpiZXRocmppZnNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMyNDk5NzUsImV4cCI6MjA1ODgyNTk3NX0.fur-M2yPBGaq19-97JrUeNRVDN0zA-_NEtXh5_mnvg8"