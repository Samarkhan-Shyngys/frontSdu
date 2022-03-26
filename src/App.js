import Assistant from "./Components/Assistent";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AssistantPage from "./pages/BeAssistant";
import Profile from "./pages/Profile";
import Apply from "./pages/Apply";
import ForgetPassword from "./pages/ForgetPassword";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Switch>
        <Route path="/sidebar">
          <Navbar />
          <Switch>
            <Route path="/sidebar/reports" component={Profile} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Route>
        <Route path="/forget" component={ForgetPassword} />
        <Route path="/profile" component={Profile} />
        <Route path="/Стать ассистентом" component={AssistantPage} />
        <Route path="/apply" component={Apply} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/assistant" component={Assistant} />
        <Route path="/" component={Home} />
        <Route path="/sidebar">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/reports" component={Profile} />
          </Switch>
        </Route>
      </Switch>
    </>
  );
}

export default App;
