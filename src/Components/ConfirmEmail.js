import { useHistory } from "react-router-dom";
import { LANDING_ROUTE } from "../utils/consts";
import { LOGIN_ROUTE } from "../utils/consts";
import {base_url} from "../utils/request";
import React, { useState, useEffet } from "react";
import { Link } from "react-router-dom";

async function activate(credentials) {
  return fetch(base_url+"/api/auth/activateCode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((response) => {
    return response;
  });
}

const ConfirmEmail = (props) => {
  const email = sessionStorage.getItem("email");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [activateCode, setActivateCode] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await activate({
      email,
      activateCode
    });
    if (response.status === 200) {
      response.json().then((json) => {
        // sessionStorage.setItem("email",json.email);
        sessionStorage.removeItem("email");
        localStorage.setItem("user", JSON.stringify(json));
        console.log(json);
        history.push(LANDING_ROUTE);
      });
    } else {
      setError(true);
      response.json().then((json) => {
        setErrorMessage(json.message);
        console.log(json.message);
      });
    }
  };

    return (
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-start text-2xl font-bold text-gray-900">
            Регистрация через SDU-почта           
            </h2>
          </div>
  
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mt-4">
              <label htmlFor="email-address text-sm text-gray-900">
              На почту {email} был отправлен код-подтверждение
              </label>
              <input
                name="email"
                type="password"
                required
                className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                placeholder="XXXXXXXXX@stu.sdu.edu.kz"
                onChange={(e) => setActivateCode(e.target.value)}
              />
            </div>
            {error && <p className="text-sm">{errorMessage}</p>}
            <span className="text-base text-gray-400">Повторно отправить через 00:59</span>
          </div>
          <div className="mt-2">
            <button
              type="submit"
              onClick={handleSubmit}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 "
            >
              <span className="text-center pl-3">Войти</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ConfirmEmail;
  