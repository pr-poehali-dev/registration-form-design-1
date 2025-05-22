import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
