import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBarProvider } from "./contexts/NavBarContext";
import { NavBar } from "./components/NavBar/NavBar";
import { Habits } from "/src/pages/Habits";
import { ToDo } from "./pages/To-Do";
import { Expense } from "./pages/Expense";
import { SignIn } from "./pages/SigIn";
import { Register } from "./pages/Register";
import { AppProvider } from "./contexts/AppContext";
import { UserProvider } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <>
    <UserProvider> 
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
    </UserProvider>
    <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;
