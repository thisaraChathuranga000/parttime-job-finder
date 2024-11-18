import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/common/Header";
import Internal from "./pages/Profile/Internal/Internal";
import External from "./pages/Profile/External/External";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internal-profile" element={<Internal/>} />
        <Route path="/external-profile" element={<External/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
