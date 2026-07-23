import Home from "./pages/Home";
import Header from "./components/Header";
import "./styles/App.css";
import "@fontsource/space-grotesk"; // Import Space Grotesk font
import "@fontsource/hachi-maru-pop"; // Import hachi maru pop font
import "@fontsource/shrikhand"; // Defaults to weight 400


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
