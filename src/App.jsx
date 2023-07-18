import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="main">
      <Navbar />
      <ItemListContainer greetings="Hello world" />
    </main>
  );
}

export default App;
