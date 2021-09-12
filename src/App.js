import "./App.css";
import NavBar from "./components/Navbar";
import RegistrationIndex from "./components/registration/registrationIndex";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Posts from "./components/blog/posts";
import { ToastContainer } from "react-toastify";
import Login from "./components/auth/login";

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
        <Route exact path="/blog/posts" component={Posts} />
        <Route path="/registration" component={RegistrationIndex} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
