import React, {useEffect} from "react";
import { Login } from "../Components/Admin/Login";
import { Main } from "../Components/Admin/Main";

export default function Admin(){
    
    const loggedIn = true;
    return(
        <div>
            {loggedIn ? <Main /> : <Login />}
        </div>
    );
}