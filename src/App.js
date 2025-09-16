import Header from "./components/Header";
import SomeSweet from "./components/SomeSweet";
import Torts from "./components/Torts.jsx"
import Cupcakes from "./components/Cupcakes.jsx"
import WantNewJob from "./components/WantNewJob";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SomeSweet />
        <Torts />
        <Cupcakes />
        <WantNewJob />
      </main>
    </div>
  );
}

export default App;
