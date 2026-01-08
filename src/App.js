import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";  // Import Header
import "./styles/App.css";
import "@fontsource/space-grotesk"; // Import Space Grotesk font
import "@fontsource/hachi-maru-pop"; // Import hachi maru pop font
import "@fontsource/shrikhand"; // Defaults to weight 400


function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Add the Header component here */}
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
