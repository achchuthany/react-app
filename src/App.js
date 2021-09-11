import "./App.css";
import NavBar from "./components/Navbar";
import RegistrationIndex from "./components/registration/registrationIndex";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Posts from "./components/blog/posts";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Switch>
        <Route path="/blog/posts">
          <Posts />
        </Route>
        <Route path="/registration">
          <RegistrationIndex />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
