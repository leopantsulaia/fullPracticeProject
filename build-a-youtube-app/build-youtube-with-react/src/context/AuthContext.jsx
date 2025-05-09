import React from "react";
import { getCurrentProfile, supabase } from "../utils/supabase";

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    // Check for existing session
    supabase.auth.getSession().then(async ({ data }) => {
      if (data.session) {
        const user = data.session.user;
        const profile = await getCurrentProfile(user.id);
        setProfile({ ...profile, user });
      }
    });

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (_, session) => {
      if (session) {
        const user = session.user;
        const profile = await getCurrentProfile(user.id);
        setProfile({ ...profile, user });
      } else {
        // Handle sign out by clearing the profile
        setProfile(null);
      }
    });
  }, []);

  // Provide both profile and setProfile to consumers
  return (
    <AuthContext.Provider value={{ profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook to use the auth context
export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
