import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Navbar from '../Navbar/Navbar'


function Login() {
  // const handleClick = () => {
  //   window.location.assign('/home-kits');
  // };
  const [usuario, setUsuario] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const {register, handleSubmit } = useForm<FormData>();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8081/auth/login",{
        usuario,
        password
      });

      const token: string = response.data.token;
      if (token) {
        sessionStorage.setItem("token", token);
        window.location.assign("/home-kits");
      }
    } catch (error) {
      console.log('El error', error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-800">
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold leading-6  text-zinc-950">
                Email address
              </label>
              <div className="mt-2">
                <input
                  value={usuario}
                  onChange={(e) => {
                    setUsuario(e.target.value);
                  }}
                  // type="email"
                  // autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-zinc-950">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-zinc-700 hover:text-blue-700">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-stone-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                // onClick={handleClick}
              >
                Iniciar Sesion
              </button>
            </div>
            <div>
              <div className="text-center">
                <a href="#" className="text-center font-bold text-zinc-800 hover:text-stone-700 ">
                  Crear cuenta
                </a>
              </div>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}

export default Login
