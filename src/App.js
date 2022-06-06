import { Route, Switch } from "react-router-dom";
import Assistent from "./Components/Assistent";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import AssistantPage from "./pages/BeAssistant";
import Profile from "./pages/Profile";
import AssistantProfile from "./pages/AssistantProfile";
import ForgetPassword from "./pages/ForgetPassword";
import ConfirmRegistartion from "./pages/ConfirmRegistration";
import { StudentProfile } from "./pages/StudentProfile";
import CheckoutPage from "./componentss/CheckoutPage/CheckoutPage";
import CheckoutSuccess from "./componentss/CheckoutPage/CheckoutSuccess/CheckoutSuccess"
import ApplyCourse from "./pages/ApplyCourse";
import Allbooks from "./pages/AllBooks";
import Chat from "./pages/Chat";
import Admin from "./pages/Admin";
function App() {
  return (
    <>
      <Switch>
        <Route path="/assistant">
          <AssistantProfile />
        </Route>
        <Route path="/chat" component={Chat} />
        <Route path="/books" component={Allbooks} />
        <Route path="/student" component={StudentProfile} />
        <Route path="/applycourse" component={ApplyCourse}/>
        <Route path="/stepper" component={CheckoutPage} />
        <Route path="/forget" component={ForgetPassword} />
        <Route path="/confirm" component={ConfirmRegistartion} />
        <Route path="/profile" component={Profile} />
        <Route path="/beassistant" component={AssistantPage} />
        <Route path="/checkoutsuccess" component={CheckoutSuccess} />
        <Route path="/admin" component={Admin} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/allcourses" component={Assistent} />
        <Route path="/" component={Home} />
        
      </Switch>
    </>
  );
}

export default App;
