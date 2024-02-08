import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
const App = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center">
        <NavBar />
        <DashBoard />
        <h1 className="test-4xl font-semibold">React App</h1>
      </div>
    </>
  );
};

export default App;
