import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBarProvider } from './contexts/NavbarContext';
import { NavBar } from './components/NavBar';
import { Habits } from '/src/pages/Habits';
import { ToDo } from './pages/To-Do';
import { Expense } from './pages/Expense';
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavBarProvider>
          <NavBar />
            <Routes>
              <Route path="/" element={<Habits />} />
              <Route path="/to-do" element={<ToDo />} />
              <Route path="/expense" element={<Expense />} />
            </Routes>
        </NavBarProvider>
      </Router>
    </>
  );
};

export default App;
