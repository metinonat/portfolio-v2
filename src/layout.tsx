import { Outlet } from "react-router-dom";
import Header from "./components/Header";

export default function MainLayout(): JSX.Element {
  return (
    <main className="main-wrapper">
      <div className="view-wrapper">
        <Header />
        <Outlet />
      </div>
    </main>
  );
}
