import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/profile/me" element={<Profile />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route element={<NotFound />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
