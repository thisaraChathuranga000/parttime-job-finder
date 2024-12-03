import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/common/Header";
import Internal from "./pages/Profile/Internal/Internal";
import External from "./pages/Profile/External/External";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { Route, Routes, Navigate } from "react-router-dom";
import Footer from "./components/common/Footer";
import { APP_ROUTES } from "./constants";
import { useSelector } from "react-redux";
import { setAuthToken } from "./services/apiClient";
import { useEffect } from "react";

function App() {
  const accessToken = useSelector((state) => state.authUser.accessToken);

  useEffect(() => {
    if (accessToken) {
      setAuthToken(accessToken);
    } else {
      setAuthToken(null);
    }
  }, [accessToken]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path={APP_ROUTES.HOME}
          element={ accessToken ? <Home /> : <Navigate to={APP_ROUTES.LOGIN} replace />}
        />
        <Route
          path={APP_ROUTES.INTERNAL_PROFILE}
          element={accessToken ? <Internal /> : <Navigate to={APP_ROUTES.LOGIN} replace />}
        />
        <Route
          path={APP_ROUTES.EXTERNAL_PROFILE}
          element={accessToken ? <External /> : <Navigate to={APP_ROUTES.LOGIN} replace />}
        />
        <Route path={APP_ROUTES.LOGIN} element={<Login />} />
        <Route path={APP_ROUTES.SIGNUP} element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
