import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Write from "./components/Write";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={ <div>Hahahaha</div>}></Route>
          <Route path="/write" element={ <Write />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
