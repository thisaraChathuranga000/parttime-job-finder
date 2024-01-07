import "./App.css";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import StdProfileInternal from "./pages/profile/StdProfileInternal";
import OrgProfileInternal from "./pages/profile/OrgProfileInternal";
import FilterEmployees from "./pages/FilterEmployees";
import StdProfileExternalView from "./pages/profile/StdProfileExternalView";
import OrgProfileExternal from "./pages/profile/OrgProfileExternal";
import Login from "./pages/profile/Login";
import SignUpStudent from "./pages/profile/SignUpStudent";
import SignUpOrg from "./pages/profile/SignUpOrg";
import Admin from "./pages/Admin";
import LoginAdmin from "./pages/profile/LoginAdmin";
import { Route, Routes } from "react-router-dom";
import firebaseTest from "./firebaseTest";
//import designingImage from './public/assets/Jobs/designing.jpg';

 
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/StdProfileInternal" element={<StdProfileInternal />} />
        <Route path="/OrgProfileInternal" element={<OrgProfileInternal />} />
        <Route path="/FilterEmployees" element={<FilterEmployees />} />
        <Route
          path="/StdProfileExternal"
          element={<StdProfileExternalView />}
        />
        <Route path="/OrgProfileExternal" element={<OrgProfileExternal />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUpStudent" element={<SignUpStudent />} />
        <Route path="/SignUpOrg" element={<SignUpOrg />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/adminlogin" element={<LoginAdmin />} /> 
      </Routes>
      Test
      <firebaseTest/>
    </div>
  );
}

export default App;
