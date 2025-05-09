import React from "react";

export const AuthContext = React.createContext(null);

export function AuthProvider({ children }) {
  React.useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("getSession", data.session.user);
    });

    sepabase.auth.onAuthStateChange((_, session) => {
      console.log("onAuthChage", _, session);
    });
  }, []);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
}
