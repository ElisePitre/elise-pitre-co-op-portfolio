import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";  // Import Header
import "./styles/App.css";

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
