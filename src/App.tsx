import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import "./App.css";
import Lee from "./pages/Lee";
import Moon from './pages/Moon';

// npm run format → prettier로 코드 정렬
// npm run lint → eslint로 코드 검사

function App() {

  return (
    <>
      <Link to="/lee">LEE</Link><br />
      <Link to="/moon">MOON</Link><hr />
      <Routes>
        <Route path="/lee" element={<Lee />} />
        <Route path="/moon" element={<Moon />} />
      </Routes>
    </>
  );
}

export default App;
