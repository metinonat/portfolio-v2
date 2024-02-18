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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
      </Route>
    </Router>
  );
};

export default Routes;
