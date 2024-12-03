import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  isAuthed: false,
  setIsAuthed: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthed, setIsAuthed] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthed, setIsAuthed }}>
      {children}
    </AuthContext.Provider>
  );
};
