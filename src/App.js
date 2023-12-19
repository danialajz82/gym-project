import "./App.css";
import Hero from "./components/Hero/Hero";
import Plans from "./components/Plans/Plans";
import Programs from "./components/Programs/Programs";
import Reasnos from "./components/Reasons/Reasnos";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasnos />
      <Plans />
    </div>
  );
}

export default App;
