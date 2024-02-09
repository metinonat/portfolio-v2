import { Route, Routes as Router } from "react-router-dom";
import MainLayout from "./layout";
import NotFound from "./pages/Not-found";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Experience from "./pages/Experience";

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Route path="*" element={<NotFound />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" />
      </Route>
    </Router>
  );
};

export default Routes;
