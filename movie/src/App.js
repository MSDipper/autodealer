import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


import "./styles/css/style.css"
import "./styles/css/jquery.fancybox-1.3.4.css"
import "./styles/css/style400.css"
import "./styles/css/style500.css"
import "./styles/css/style600.css"
import "./styles/css/style700.css"
import "./styles/css/style800.css"
import "./styles/css/style980.css"
import Home from "./pages/Home";
import PostList from "./pages/PostList";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/postlist" element={<PostList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
