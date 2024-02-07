import Header from "./components/header";

export default function MainLayout(): JSX.Element {
  return (
    <main className="main-wrapper">
      <div className="view-wrapper">
        <Header />
      </div>
    </main>
  );
}
