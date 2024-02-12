import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "./components/Dashboard/DashBoard";
import Layout from "./components/Layout/Layout";
import Posts from "./components/Posts/Posts";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/posts" element={<Posts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
