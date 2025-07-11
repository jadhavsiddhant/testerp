import React, { useState } from "react"
import './App.css';
import Signup from './Componenets/Signup/Signup'
import ProfessorForm from './Componenets/ProfessorSignup/ProfessorForm';
import Dashboard from './Componenets/Dashboard/Dashboard'

function App() {
  const [screen, setScreen] = useState("Signup");
  const [role, setRole] = useState("");
  return (
    <div>
      {screen === "Signup" && (
        <Signup
          onSelectRole={(selectedRole) => {
            setRole(selectedRole);
            setScreen("form");
          }}
        />
      )}

      {screen === "form" && (
        <ProfessorForm
          role={role}
          onLogin={() => {
            if (role === "professor") setScreen("dashboard");
            else alert("Student dashboard coming soon!"); // optional
          }}
        />
      )}

      {screen === "dashboard" && <Dashboard />}
    </div>
  );
}

export default App;
