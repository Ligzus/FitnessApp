import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./app/Main/Main";
import Profile from "./components/Profile/Profile";
import CoursePage from "./components/CoursePage/CoursePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
    </Router>
  );
}

export default App;
