import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavBarProvider } from "./contexts/NavBarContext";
import { NavBar } from "./components/NavBar/NavBar";
import { Habits } from "/src/pages/Habits";
import { ToDo } from "./pages/To-Do";
import { Expense } from "./pages/Expense";
import { SignIn } from "./pages/SigIn";
import { Register } from "./pages/Register";
import { AppProvider } from "./contexts/AppContext";
import { UserProvider, useUser } from "./contexts/UserContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";


// Component that waits for Firebase to determine the user
function AppContent() {
  const { loadingUser } = useUser();

  if (loadingUser) {
    return (
      <div className="flex h-screen items-center justify-center bg-[#0d1117]">
        <h2 className="text-lg font-semibold text-white animate-pulse">
          Loading...
        </h2>
      </div>
    );
  }

  return (
    <AppProvider>
      <Router>
        <NavBarProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Habits />} />
            <Route path="/to-do" element={<ToDo />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/register" element={<SignIn />} />
          </Routes>
        </NavBarProvider>
      </Router>
    </AppProvider>
  );
}


function App() {
  return (
    <>
      <UserProvider>
        <AppContent />
      </UserProvider>

      <ToastContainer position="top-right" autoClose={2500} />
    </>
  );
}

export default App;
