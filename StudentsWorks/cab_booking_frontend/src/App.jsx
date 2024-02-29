import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/admin/Login";
import AddCar from "./pages/admin/AddCar";
import Dashboard from "./pages/admin/Dashboard";
import { useSelector } from "react-redux";

function App() {
  const { token } = useSelector((state) => state.auth);

  console.log("token: " + token);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {token ? (
            <>
              <Route path="/admin" element={<Dashboard />} />
              <Route path="/admin/add" element={<AddCar />} />
            </>
          ) : (
            <Route path="/admin" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
