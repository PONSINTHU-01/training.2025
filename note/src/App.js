import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from "./component/todo";
import Notes from "./component/notes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/notes/:id" element={<Notes />} />
      </Routes>
    </Router>
  );
}

export default App;
