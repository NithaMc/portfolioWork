import { useState } from "react";
import "./App.css"
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav>
        <h2>My Portfolio</h2>

        <button onClick={() => setPage("home")}>
          Home
        </button>

        <button onClick={() => setPage("about")}>
          About
        </button>

        <button onClick={() => setPage("projects")}>
          Projects
        </button>

        <button onClick={() => setPage("contact")}>
          Contact
        </button>
      </nav>

      {page === "home" && <Home />}

      {page === "about" && <About />}

      {page === "projects" && <Projects />}

      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;