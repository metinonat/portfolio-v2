import { Route, Routes as Router } from "react-router-dom";
import MainLayout from "./layout";
import NotFound from "./pages/not-found";

const Routes = (): JSX.Element => {
  return (
    <Router>
      <Route path="*" element={<NotFound />} />

      <Route element={<MainLayout />}>
        <Route path="/" />
        <Route path="/about" />
        <Route path="/skills" />
        <Route path="/Education" />
        <Route path="/Experience" />
        <Route path="/Projects" />
      </Route>
    </Router>
  );
};

export default Routes;
