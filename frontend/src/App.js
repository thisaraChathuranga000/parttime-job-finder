import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/common/Header";
import Internal from "./pages/Profile/Internal/Internal";
import StdProfileExternalView from "./pages/Profile/External/StdProfileExternalView"
import OrgProfileExternalView from "./pages/Profile/External/OrgProfileExternalView";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internal-profile" element={<Internal />} />
        <Route path="/StdProfileExternal"  element={<StdProfileExternalView />}/>
        <Route path="/OrgProfileExternal" element={<OrgProfileExternalView  />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
