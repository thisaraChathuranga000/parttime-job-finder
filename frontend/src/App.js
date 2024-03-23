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

function App() {
  return (
    <div className="App">
      
      <Header />
      {/* <h1>text</h1>
      <img
        src={"http://localhost:5000/users/uploads/eed9590dfe1b06690d2c4c2cbb4d0c2a"}
        alt='jjj'
        style={{ width: "400px" }}
      /> */}
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
    </div>
  );
}

export default App;
