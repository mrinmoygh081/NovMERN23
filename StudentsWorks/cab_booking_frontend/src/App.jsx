import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/admin/Login";
import AddCar from "./pages/admin/AddCar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/add" element={<AddCar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
