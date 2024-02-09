import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Layout from "./components/Layout";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
