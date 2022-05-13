import { Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Navbars />
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
      </>
  );
}

export default App;
