import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./app/Main/Main";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
