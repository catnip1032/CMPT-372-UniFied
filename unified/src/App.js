import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events"
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route element={<NotFound />} />
      </Routes>
    </Container>
  );
};

export default App;
