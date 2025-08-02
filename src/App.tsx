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
import ScrollToTop from "./components/common/ScrollToTop";

import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import ProjectList from "./pages/ProjectList";
import Reserve from "./pages/Reserve";

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
    <div className="w-full min-h-screen m-auto bg-white">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#fff",
            color: "#374151",
            border: "1px solid #e5e7eb",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: "500",
            padding: "12px 16px",
            boxShadow:
              "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            marginTop: "32px",
          },
        }}
      />
      <div className="w-full max-w-[1280px] m-auto bg-white pt-20">
        <Nav />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Navigate to="/list" replace /> : <Home />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<PaymentComplete />} />
          <Route path="/list" element={<ProjectList />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="*" element={<NotFound />} /> {/* 404 페이지 처리 */}
          <Route
            path="/mypage"
            element={isLoggedIn ? <Mypage /> : <Navigate to="/login" replace />}
          />
          <Route path="/cropinfo/:projectId" element={<CropInfo />} />
          <Route path="/cropinfo" element={<CropInfo />} />
          <Route path="/cropdiary" element={<CropDiary />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
