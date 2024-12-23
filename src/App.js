import Home from "./Home";
import {Routes, Router, Route} from "react-router-dom"
import HomeTwo from "./HomeTwo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home /> } />
        <Route path='/work' element={<HomeTwo /> } />
      </Routes>
    </div>
  );
}

export default App;
