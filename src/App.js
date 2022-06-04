import { Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbars";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element=
          {
          <ProtectedRoute>
          <Account />
          </ProtectedRoute>
          }
          />

        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
