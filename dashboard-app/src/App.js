import './App.css';
import {Home} from "./components/Home";
import {Wareh} from "./components/Wareh";
import {Compah} from "./components/Compah";
import {Entrah} from "./components/Entrah";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warehouses" element={<Wareh/>} />
            <Route path="/companies" element={<Compah/>} />
            <Route path="/entrances" element={<Entrah/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
