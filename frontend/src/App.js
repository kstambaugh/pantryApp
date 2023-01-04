import { BrowserRouter, Route, Routes } from "react-router-dom";
import CurrentUserProvider from "./context/CurrentUser";
import { Navigation } from "./components/Navigation";
import Home from "./views/Home";
import Login from './components/user_functions/Login'
import SignUp from "./components/user_functions/Signup";
import Grocery from "./views/Grocery";
import Menu from "./views/Menu";
import Pantry from "./views/Pantry";
import Recipes from "./views/Recipes";


function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route exact path="/login" element={Login()} />
          <Route exact path="/signup" element={SignUp()} />
          <Route exact path="/grocery" element={Grocery()} />
          <Route exact path="/menu" element={Menu()} />
          <Route exact path="/pantry" element={Pantry()} />
          <Route exact path="/recipes" element={Recipes()} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
