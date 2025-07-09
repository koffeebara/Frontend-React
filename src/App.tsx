import { Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Lee from "./pages/Lee";
import Moon from "./pages/Moon";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


// npm run format → prettier로 코드 정렬
// npm run lint → eslint로 코드 검사

function App() {
  return (
    <>
      {/* 아래 div 코드는 추후 메인페이지가 만들어지면 삭제될 코드 */}
      <div className="flex flex-col">
        <Link to="/lee">LEE</Link>
        <Link to="/moon">MOON</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/signup">SIGNUP</Link>

      </div>

      <Routes>
        <Route path="/lee" element={<Lee />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </>
  );
}

export default App;
