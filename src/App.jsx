import { useState } from "react";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import About from "./pages/About";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <Navbar page={page} setPage={setPage} />

      <Layout>
        {page === "home" && <Home />}
        {page === "profile" && <Profile />}
        {page === "about" && <About />}
      </Layout>

      <footer className="footer">
        © {new Date().getFullYear()} Simple SPA
      </footer>
    </div>
  );
}
