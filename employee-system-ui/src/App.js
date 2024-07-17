import "./App.css";
import AddEmployee from "./components/AddEmployee";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <AddEmployee />
    </div>
  );
}

export default App;
