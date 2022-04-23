import { Route, Switch } from "react-router-dom";
import Assistant from "./Components/Assistent";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AssistantPage from "./pages/BeAssistant";
import Profile from "./pages/Profile";
import AssistantProfile from "./pages/AssistantProfile";
import ForgetPassword from "./pages/ForgetPassword";
import ConfirmRegistartion from "./pages/ConfirmRegistration";
import { StudentProfile } from "./pages/StudentProfile";
import { MyBooks } from "./Components/StudentProfile/MyBooks";
import CheckoutPage from "./componentss/CheckoutPage/CheckoutPage";
import CheckoutSuccess from "./componentss/CheckoutPage/CheckoutSuccess/CheckoutSuccess"
import ApplyCourse from "./pages/ApplyCourse";
import Allbooks from "./pages/AllBooks";
function App() {
  return (
    <>
      <Switch>
        <Route path="/assistantt">
          <AssistantProfile />
          {/* <Switch>
            <Route path="/assistant/profile" component={Profile} />
            <Route path="/" exact component={Home} />
          </Switch> */}
        </Route>
        <Route path="/books" component={Allbooks} />
        <Route path="/student" component={StudentProfile} />
        <Route path="/applycourse" component={ApplyCourse}/>
        <Route path="/stepper" component={CheckoutPage} />
        <Route path="/forget" component={ForgetPassword} />
        <Route path="/confirm" component={ConfirmRegistartion} />
        <Route path="/profile" component={Profile} />
        <Route path="/beassistant" component={AssistantPage} />
        <Route path="/checkoutsuccess" component={CheckoutSuccess} />
        {/* <Route path="/apply" component={Apply} /> */}
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/assistantt" component={Assistant} />
        <Route path="/" component={Home} />
        
      </Switch>
    </>
  );
}

export default App;
