import React, { createContext, useState } from "react";

// Création du contexte utilisateur
export const UserContext = createContext();

// Fournisseur de contexte
export function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Alice", connected: true });

  // Fonction pour changer le statut de connexion
  const toggleConnection = () => {
    setUser((prev) => ({ ...prev, connected: !prev.connected }));
  };

  return (
    <UserContext.Provider value={{ user, toggleConnection }}>
      {children}
    </UserContext.Provider>
  );
}
