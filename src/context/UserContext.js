import React, { useState } from "react";
import axios from "axios";

const UserContext = React.createContext();

const initialState = {
  saving: false,
  logginIn: false,
  error: null,

};

export const UserStore = (props) => {
  const [state, setState] = useState(initialState);
 
  const signupUser = (email, password) => {
    setState({ ...state, saving: true });

    const data = {
      email,
      password,
    };
    console.log(data);

    axios
      .post(
      
        "https://127.0.0.1:3000/signip",
        data
      )
      .then((result) => {
          console.log(result);
      })
  };

  return (
    <UserContext.Provider value={{ state, signupUser}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
