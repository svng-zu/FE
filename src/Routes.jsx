import React from "react";
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";


const Simplemode = React.lazy(() => import("pages/Simplemode"));
const SignupPageLight = React.lazy(() => import("pages/SignupPageLight"));
const FrontpageLight = React.lazy(() => import("pages/FrontpageLight"));
const Light = React.lazy(() => import("pages/Light"));
const FamilyHomeLight = React.lazy(() => import("pages/FamilyHomeLight/recpage"));
const LoginPageLight = React.lazy(() => import("pages/LoginPageLight/l_login"));
const Search = React.lazy(() => import("pages/Search"));


const ProjectRoutes = () => {

  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPageLight />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/familyhomelight" element={<FamilyHomeLight />} />
          <Route path="/frontpagelight" element={<FrontpageLight />} />
          <Route path="/signuppagelight" element={<SignupPageLight />} />
          <Route path="/simple" element={<Simplemode />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
          <Route path="/Light/:programId" element={<Light />} />
          <Route path="/search" element={<Search />} />

        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
