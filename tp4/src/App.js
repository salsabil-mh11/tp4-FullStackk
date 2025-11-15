import React from 'react';
import Time from './Time';
import { ThemeProvider, ThemeToggle } from './ThemeContext';
import UserList from './UserList'; // ✅ You forgot this import

function App() {
  return (
    <div className="App">
      {/* Exercice 1: useEffect - Horloge */}
      <h1>TP4 - Horloge React</h1>
      <Time />

      {/* Exercice 2: useContext - Thème */}
      <ThemeProvider>
        <h1>TP4 - useContext Exemple</h1>
        <ThemeToggle />
      </ThemeProvider>

      {/* Exercice 3: Appel API avec useEffect */}
      <h1>TP4 - Appel API avec useEffect</h1>
      <UserList />
    </div>
  );
}

export default App;
