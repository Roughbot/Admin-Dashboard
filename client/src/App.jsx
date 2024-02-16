import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashBoard from "./components/Dashboard/DashBoard";
import Layout from "./components/Layout/Layout";
import Posts from "./components/Posts/Posts";
import Geography from "./components/Geography/Geography";
import Settings from "./components/Settings/Settings";
import Report from "./components/Report/Report";
import Trending from "./components/Trending/Trending";
import Customers from "./components/Customers/Customers";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Report />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/customers" element={<Customers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
