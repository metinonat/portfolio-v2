import { Route, Routes as Router } from "react-router-dom";
import MainLayout from "./layout";
import NotFound from "./pages/Not-found";
import Home from "./pages/Home";
import About from "./pages/About";

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Route path="*" element={<NotFound />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" />
        <Route path="/Education" />
        <Route path="/Experience" />
        <Route path="/Projects" />
      </Route>
    </Router>
  );
};

export default Routes;
