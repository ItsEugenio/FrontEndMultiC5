import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Navbar from '../Navbar/Navbar'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from '../styles/LandingPage.module.css'


function Login() {

  const [correo, setCorreo] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { register, handleSubmit } = useForm<FormData>();

  sessionStorage.removeItem('correoUser');
  sessionStorage.removeItem('idKit');
  sessionStorage.removeItem('token');



  const handleLogin = async () => {
    try {
      const response = await axios.post("http://3.225.219.181/auth", {
        correo,
        password
      });

      const token: string = response.data.data.token;
      if (token) {
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("correoUser", correo);
        toast.success('Bienvenido', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
          });
        window.location.assign("/home-kits");
      }
    } catch (error) {
      toast.error('Error al inciar Sesión', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark"
        });
      console.log('El error', error);
      console.log(register);
    }
  };
  return (
    <>
      <Navbar />
      <div className={styles.tituloL}>
      <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/*  className="mx-auto h-10 w-auto" */}
          <svg className='mx-auto h-32 w-auto' style={{ fill: 'azure' }} width="20%" viewBox="205.74727366634536 115 138.5054526673093 139.31237700571998"><g data-paper-data="{&quot;selectedEffects&quot;:{&quot;container&quot;:&quot;&quot;,&quot;transformation&quot;:&quot;&quot;,&quot;pattern&quot;:&quot;&quot;},&quot;initialText&quot;:&quot;S&quot;,&quot;isIcon&quot;:&quot;true&quot;,&quot;iconType&quot;:&quot;initial&quot;,&quot;iconStyle&quot;:&quot;standalone&quot;,&quot;rawInitialId&quot;:699,&quot;disableIconEffects&quot;:&quot;true&quot;,&quot;monogramSpecial&quot;:&quot;seven-nation-army&quot;,&quot;bounds&quot;:{&quot;x&quot;:205.74727366634536,&quot;y&quot;:115,&quot;width&quot;:138.5054526673093,&quot;height&quot;:139.31237700571998},&quot;fillRule&quot;:&quot;evenodd&quot;,&quot;suitableAsStandaloneIcon&quot;:true}" fill-rule="evenodd"><path d="M205.74727,207.40124c0,-5.92697 0.99333,-11.45351 2.97999,-16.57961c-1.98666,-5.79237 -2.97999,-11.99986 -2.97999,-18.62247v-0.80692c0,-15.5918 5.58683,-28.97329 16.76049,-40.14449c11.08935,-10.83184 24.30002,-16.24776 39.632,-16.24776h36.71506c12.15318,0 22.67093,4.23887 31.55326,12.71662c0.38413,0.36732 0.75985,0.74304 1.12549,1.12549c8.47943,8.88396 12.71914,19.40255 12.71914,31.55578v1.61385c0,5.91806 -1.00081,11.44017 -3.00243,16.56632c2.00162,5.83664 3.00243,12.08218 3.00243,18.73662v0.60519c0,15.59169 -5.50053,28.88835 -16.50244,39.88997c-11.00152,11.00168 -24.33174,16.50253 -39.99067,16.50253h-36.61419c-12.5657,0 -23.27346,-4.42489 -32.12332,-13.27475c-8.84989,-8.8499 -13.27483,-19.55771 -13.27483,-32.12341zM215.8835,191.63898c-0.04682,0.21686 -0.11373,0.42733 -0.20064,0.6315c-1.96374,4.61073 -2.94561,9.65432 -2.94561,15.13076v1.51298c0,10.63548 3.74248,19.6957 11.22743,27.18066c7.48502,7.48501 16.54527,11.22751 27.18074,11.22751h36.61419c13.7287,0 25.41145,-4.81837 35.04825,-14.45512c9.63658,-9.63681 14.45487,-21.28594 14.45487,-34.94739v-0.60519c0,-6.31309 -1.0095,-12.1801 -3.02933,-17.60104c-0.07817,-0.20862 -0.13533,-0.42271 -0.17231,-0.64226c-0.03614,-0.21955 -0.05211,-0.44061 -0.04707,-0.66319c0.00588,-0.22258 0.03194,-0.44263 0.07985,-0.66008c0.04707,-0.21753 0.11431,-0.42859 0.20257,-0.63318c1.97781,-4.60729 2.96629,-9.64174 2.96629,-15.10319v-1.61385c0,-10.28618 -3.59333,-19.19429 -10.78085,-26.72433c-0.29419,-0.30764 -0.59427,-0.60771 -0.90022,-0.90022c-7.53163,-7.18891 -16.44058,-10.78337 -26.72685,-10.78337h-36.71506c-13.43378,0 -24.99705,4.73312 -34.68976,14.20052c-9.8085,9.80648 -14.71275,21.5404 -14.71275,35.20174v0.80692c0,6.28045 1.00165,12.10742 3.00495,17.48092c0.0775,0.20787 0.13466,0.4212 0.17156,0.63999c0.0369,0.21879 0.05279,0.4391 0.04766,0.66092c-0.00513,0.22182 -0.0311,0.44112 -0.07792,0.65798zM306.72234,169.77839c-2.21904,2.21904 -4.74068,3.32856 -7.86751,3.32856h-28.64581c-0.20173,0 -0.50433,0 -0.60519,0.20173c-0.20173,0.20173 -0.3026,0.40346 -0.3026,0.70606v0.10087c0,0.3026 0.10087,0.60519 0.3026,0.70606c0.10087,0.20173 0.40346,0.3026 0.60519,0.3026h17.5506c6.1528,0 11.39781,2.11818 15.73502,6.45539c4.33722,4.33722 6.45539,9.58223 6.45539,15.73502v0.60519c0,6.1528 -2.11818,11.29694 -6.45539,15.63416c-4.33722,4.33722 -9.58223,6.45539 -15.73502,6.45539h-36.61419c-3.12683,0 -5.74934,-1.10952 -7.86751,-3.2277c-2.11818,-2.11818 -3.2277,-4.74068 -3.2277,-7.86751v-1.51298c0,-3.12683 1.10952,-5.74934 3.2277,-7.86751c2.11818,-2.21904 4.74068,-3.2277 7.86751,-3.2277h28.54495c0.3026,0 0.50433,-0.10087 0.70606,-0.20173c0.20173,-0.20173 0.3026,-0.50433 0.3026,-0.80692v-0.10087c0,-0.3026 -0.10087,-0.50433 -0.3026,-0.70606c-0.20173,-0.20173 -0.40346,-0.3026 -0.70606,-0.3026h-17.5506c-6.1528,0 -11.29694,-2.11818 -15.63416,-6.45539c-4.33722,-4.23635 -6.45539,-9.48136 -6.45539,-15.53329v-0.80692c0,-6.05193 2.11818,-11.29694 6.45539,-15.63416c4.33722,-4.23635 9.48136,-6.45539 15.63416,-6.45539h36.71506c3.12683,0 5.64847,1.10952 7.86751,3.2277c2.11818,2.21904 3.2277,4.84155 3.2277,7.86751v1.61385c0,3.02597 -1.10952,5.64847 -3.2277,7.76665z" data-paper-data="{&quot;isPathIcon&quot;:true}"></path></g></svg>

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-100" >
            Ingresa a tu cuenta
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(handleLogin)}>
            <div>
              <label htmlFor="email" className="block text-sm font-bold leading-6  text-zinc-100">
                Correo Electronico
              </label>
              <div className="mt-2">
                <input
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                  // type="email"
                  // autoComplete="email"
                  required
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-bold leading-6 text-zinc-100">
                  Contraseña
                </label>
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
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                <a href="/registro" className="text-center font-bold text-zinc-100 hover:text-stone-700 ">
                  Crear cuenta
                </a>
              </div>
            </div>
          </form>
          <ToastContainer />

        </div>
      </div>
      </div>
    </>
  )
}

export default Login
