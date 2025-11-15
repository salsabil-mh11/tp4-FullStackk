import React, { useState, createContext, useContext } from 'react';

// Création du contexte
const ThemeContext = createContext();

// Provider qui gère le thème
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Composant qui consomme le contexte
function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '10px',
  };

  return (
    <div style={styles}>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}

export { ThemeProvider, ThemeToggle };
