import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/common/Header";
import Internal from "./pages/Profile/Internal/Internal";
import External from "./pages/Profile/External/External";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import { APP_ROUTES } from "./constants";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={APP_ROUTES.HOME} element={<Home />} />
        <Route path={APP_ROUTES.INTERNAL_PROFILE} element={<Internal/>} />
        <Route path={APP_ROUTES.EXTERNAL_PROFILE} element={<External/>} />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.SIGNUP} element={<SignUp />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
