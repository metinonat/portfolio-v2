import { Route, Routes as Router } from "react-router-dom";
import MainLayout from "./layout";
import NotFound from "./Pages/Not-found";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Projects from "./Pages/Projects";

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Route path="*" element={<NotFound />} />

      <Route element={<MainLayout />}>
        <Route path="/portfolio-v2/" element={<Home />} />
        <Route path="/portfolio-v2/about" element={<About />} />
        <Route path="/portfolio-v2/skills" element={<Skills />} />
        <Route path="/portfolio-v2/Education" element={<Education />} />
        <Route path="/portfolio-v2/Experience" element={<Experience />} />
        <Route path="/portfolio-v2/Projects" element={<Projects />} />
      </Route>
    </Router>
  );
};

export default Routes;
