import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* The <Outlet /> acts as a placeholder where child routes will be rendered. */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
