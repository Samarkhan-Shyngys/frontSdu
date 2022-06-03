import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import LogoHeader from "../Components/LogoHeader";
import React, { useState} from "react";
import { useHistory } from "react-router-dom";
import { LANDING_ROUTE,ADMIN_ROUTE } from "../utils/consts";
import {base_url} from "../utils/request";
async function loginUser(credentials) {
  return fetch(base_url+"/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => {
    return response;
  });
}

export default function Login() {
  if(localStorage.getItem("user")!==null){
    localStorage.removeItem("user");
  }
  if(sessionStorage.getItem("admin")!==null){
    sessionStorage.removeItem("admin");
  }
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token.status === 200) {
      token.json().then((json) => {
        
        if(json.roles[0]==='ROLE_ADMIN'){
          sessionStorage.setItem("admin", JSON.stringify(json))
          history.push(ADMIN_ROUTE);
        }
        else{
          localStorage.setItem("user", JSON.stringify(json));
          history.push(LANDING_ROUTE); 
        }
        
      });
    } else {
      setError(true);
      token.json().then((json) => {
        setErrorMessage(json.message);

        console.log(json.message);
      });
    }
  };

  return (
    <div>
      <LogoHeader />
      <div>
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <h2 className="mt-6 text-start text-2xl font-bold text-gray-900">
                Вход через SDU-почта
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-6">
                  <label htmlFor="email-address text-sm text-gray-900">
                    SDU-почтa
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    name="email"
                    type="email"
                    className="relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md sm:text-sm my-2"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label htmlFor="password" className="">
                      Пароль
                    </label>
                    <Link to="/forget">
                      <span className="font-medium text-gray-900 hover:text-indigo-500 text-end">
                        Забыли пароль?
                      </span>
                    </Link>
                  </div>
                  <input
                    name="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md sm:text-sm my-2"
                    placeholder="Password"
                  />
                </div>
                {error && <p className="text-sm">{errorMessage}</p>}
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800"
                >
                  <span className="text-center pl-3">Войти</span>
                </button>
                <p className="text-center mt-2 text-gray-500">
                  Нет аккаунта?{" "}
                  <span className="text-gray-900"> <Link to="/signup">Зарегистрироваться</Link>  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
