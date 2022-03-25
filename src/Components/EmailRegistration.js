const EmailRegistration = (props) => {
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-start text-2xl font-bold text-gray-900">
            Регистрация через SDU-почта
          </h2>
        </div>

        <div className="rounded-md shadow-sm">
          <div className="mt-4">
            <label htmlFor="email-address text-sm text-gray-900">
              SDU-почта
            </label>
            <input
              name="email"
              type="password"
              required
              className="relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
              placeholder="XXXXXXXXX@stu.sdu.edu.kz"
            />
          </div>
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-800"
          >
            <span className="text-center pl-3">Войти</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailRegistration;
