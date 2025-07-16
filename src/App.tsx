import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";
import Lee from "./pages/Lee";
import Moon from "./pages/Moon";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/common/Nav";
import Home from "./pages/Home";
import Mentors from "./pages/mentors";

import "./App.css";
import Mypage from "./pages/Mypage";

function App() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return (
    <>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/mentors" replace /> : <Home />}
        />
        <Route path="/lee" element={<Lee />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route
          path="/mypage"
          element={isLoggedIn ? <Mypage /> : <Navigate to="/login" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
