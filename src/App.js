import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/userPage/HomePage";
import LoginPage from "./pages/LoginPage";
import MinumanPage from "./pages/MinumanPage";
import MakananPage from "./pages/MakananPage";





function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/makanan" element={<MakananPage/>} />
          <Route path="/minuman" element={<MinumanPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
