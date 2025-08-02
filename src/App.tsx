import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/authStore";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/common/Nav";
import Home from "./pages/Home";


import "./App.css";
import Mypage from "./pages/Mypage";
import Footer from "./components/common/Footer";
import CropInfo from "./pages/CropInfo";

import CropDiary from "./pages/CropDiary";

import Cart from "./pages/Cart";
import PaymentComplete from "./pages/PaymentComplete";
import FarmLog from "./pages/FarmLog";
import ScrollToTop from "./components/common/ScrollToTop";


function App() {
  const { isLoggedIn, _hasHydrated } = useAuthStore();

  if (!_hasHydrated) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">로딩 중...</div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-green-000">
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/mentors" replace /> : <Home />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<PaymentComplete />} />
        <Route path="/farmLog" element={<FarmLog />} />


        {/* <Route
          path="/mypage"
          element={isLoggedIn ? <Mypage /> : <Navigate to="/login" replace />}
        /> */}
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/cropinfo" element={<CropInfo />} />
        <Route path="/cropdiary" element={<CropDiary />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
