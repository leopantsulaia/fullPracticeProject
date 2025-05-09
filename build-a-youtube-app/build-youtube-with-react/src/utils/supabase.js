import { createClient } from "@supabase/supabase-js";
// import { queryClient } from "../components/AppProviders";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// console.log("VITE_SUPABASE_URL:", import.meta.env.VITE_SUPABASE_URL);
// console.log("VITE_SUPABASE_ANON_KEY:", import.meta.env.VITE_SUPABASE_ANON_KEY);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function signInWithGoogle() {
  supabase.auth.signInWithOAuth({
    provider: "google",
  });
}

export function signOut() {}

export function getCurrentProfile() {}

export function getVideos() {}

export function getLikedVideos() {}

// create function view_count(video) returns bigint as $$
//   select count(*) from view where video_id = $1.id;
// $$ stable language sql;
export function getTrendingVideos() {}

export function getSubscriptionVideos() {}

export function getChannelSuggestions() {}

export function getHistoryVideos() {}

export function getVideo() {}

export function getVideoLikes() {}

export function addVideo() {}

export function getChannel() {}

export function addVideoView() {}

export function addComment() {}

export function searchVideosAndProfiles() {}

export function likeVideo() {}

export function dislikeVideo() {}

export function toggleSubscribeUser() {}

export function uploadImage() {}

export function updateProfile() {}

export function deleteVideo() {}

export function deleteComment() {}
