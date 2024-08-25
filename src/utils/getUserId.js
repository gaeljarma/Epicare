// src/utils/getUserId.js
import { supabase } from '../components/supabaseClient';

export async function getUserId() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) {
        console.error("Error getting user:", error);
        return null;
    }
    return user?.id;
}
