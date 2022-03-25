import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer";
import UserContext from "../context/UserContext";
import LogoHeader from "../Components/LogoHeader";

export default function SignUp() {
  const ctx = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const signup = () => {
    if (password1 === password2) {
      ctx.signupUser(email, password1);
      console.log("aaa");
    } else {
    }
    console.log(email, password1);
  };
  return (
    <div>
      <LogoHeader />
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-start text-2xl font-bold text-gray-900">
              Регистрация через SDU-почта
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="mb-4">
                <label htmlFor="email-address text-sm text-gray-900">
                  SDU-почтa
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="">
                  Пароль
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md  sm:text-sm my-2"
                  placeholder="Password"
                  onChange={(e) => setPassword1(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email-address text-sm text-gray-900">
                  Повторите пароль
                </label>
                <input
                  id="password1"
                  name="password1"
                  type="password"
                  autoComplete="password"
                  required
                  className="relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md sm:text-sm my-2"
                  placeholder="Email address"
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800 text-lg"
                // onClick={}
              >
                <span className="text-center pl-3 text-base">
                  Зарегистрироваться
                </span>
              </button>
              <p className="text-center mt-2 text-gray-500">
                <Link to="/login">
                  <span>Уже зарегистрированы?</span>
                </Link>

                <span className="text-gray-900 font-semibold"> Войти</span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
