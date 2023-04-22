import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Dashboard />
              <Home />
            </>
          }
        />
      </Routes>
    </Router>

  );
}

export default App;