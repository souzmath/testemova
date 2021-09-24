import './App.scss';
import { Switch, Route } from "react-router-dom";
import { Details } from "./pages/details"
import { Home } from "./pages/home"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/details/:id">
          <Details />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
