import { LockClosedIcon } from '@heroicons/react/solid'
import logo from '../image/logo.png';
import Footer from './Footer';
import {base_url} from "../utils/request";
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Login() {
    const error = true;
  return (
    
        <div>
          <div className="px-2 sm:px-6 lg:px-8 bg-white shadow-md">
            <div className="relative flex items-center justify-between h-16">
                  <img
                    className="h-8 w-auto ml-16 md:ml-36 "
                    src={logo}
                    alt="logo"
                  />
              </div>
          </div>
          <div>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
           
            <h2 className="mt-6 text-start text-2xl font-bold text-gray-900">Вход через SDU-почта</h2>
            
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className='mb-6'>
                <label htmlFor="email-address text-sm text-gray-900" >
                    SDU-почтa
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                  placeholder="Email address"
                />
              </div>
              <div>
                  <div className='flex justify-between'>
                        <label htmlFor="password" className="">
                            Пароль
                        </label>
                        <a href="#" className="font-medium text-gray-900 hover:text-indigo-500 text-end">
                            Забыли пароль?
                        </a>
                    </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm my-2"
                  placeholder="Password"
                />
              </div>
              {error && <p className='text-sm'>Адрес почты или пароль не верны. Попробуйте еще раз или восстановите пароль.</p>}
              
            </div>

            <div className='mt-2'>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                </span>
                Войти
              </button>
              <p className='text-center mt-2 text-gray-500'>Нет аккаунта? <a className='text-gray-900'> Зарегистрироваться </a></p>
            </div>
          </form>
        </div>
      </div>
          </div>
          <Footer />
        </div>
  
  )
}
