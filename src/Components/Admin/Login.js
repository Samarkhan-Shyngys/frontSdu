import Container from "../Container";
import logo from "../../image/logo.png";
export function Login() {
  return (
    <Container>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-10 content-center">
        <div className="flex justify-center items-center">
          <img alt="logo" src={logo} className="" />
        </div>
        <div className="">
          <div className="max-w-md w-full space-y-6">
            <div>
              <h2 className=" text-start text-2xl font-bold text-gray-900">
                Вход в Админ
              </h2>
            </div>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="mb-6">
                  <label htmlFor="email-address text-sm text-gray-900">
                    Логин
                  </label>
                  <input
                    // onChange={(e) => setUsername(e.target.value)}
                    // name="email"
                    // type="email"
                    required
                    className="relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md sm:text-sm my-2"
                  />
                </div>
                <div>
                  <label htmlFor="email-address text-sm text-gray-900">
                    Пароль
                  </label>
                  <input
                    name="password"
                    type="password"
                    // onChange={(e) => setPassword(e.target.value)}
                    required
                    className="rounded-md relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md sm:text-sm my-2"
                  />
                </div>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  //   onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800"
                >
                  <span className="text-center pl-3">Войти</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
