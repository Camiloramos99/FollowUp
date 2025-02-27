import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBarProvider } from "./contexts/NavbarContext";
import { NavBar } from "./components/NavBar/NavBar";
import { Habits } from "/src/pages/Habits";
import { ToDo } from "./pages/To-Do";
import { Expense } from "./pages/Expense";
import { SignIn } from "./pages/SigIn";
import { Register } from "./pages/Register";
import { AppProvider } from "./contexts/AppContext";
import "./App.css";

function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <NavBarProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Habits />} />
              <Route path="/to-do" element={<ToDo />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </NavBarProvider>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
