import { useState, ChangeEvent, FormEvent } from 'react';
import { Grid, Flex } from "@radix-ui/themes"

interface FormData {
    nombre: string;
    apellidos: string;
    correo: string;
    password: string;
    domicilio: string;
    telefono: string;
}

function Register() {
    const [formData, setFormData] = useState<FormData>({
        nombre: '',
        apellidos: '',
        correo: '',
        password: '',
        domicilio: '',
        telefono: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };



    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('dataCREATE', formData)

        try {
            const response = await fetch('http://3.225.219.181/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Usuario registrado exitosamente');
                window.location.assign('/')
            } else {
                console.error('Error al registrar usuario');
            }
        } catch (error) {
            console.error('Error al conectar con la API', error);
        }
    };

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-start px-6 py-12 lg:px-8" style={{height:'100vh'}}>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-slate-100">
                        Registra tu cuenta
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full ">
                    <form className="space-y-6" onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <Grid columns={{ initial: '1', xs: '1', md: '2', lg: '2' }} gap="3" width="auto" flow="row" justify="center">
                            <Flex width="auto" height="auto" justify="center" direction='column' >
                                <label htmlFor="nombre" className="block text-sm font-bold leading-6 text-slate-100 text-center ">
                                    Nombre
                                </label>
                                <div className="mt-2 flex justify-center">
                                    <input
                                        id="nombre"
                                        name="nombre"
                                        type="text"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-8/12 bg-zinc-800 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-400 focus:border-gray-500"
                                    />
                                </div>
                            </Flex>

                            <Flex width="auto" height="auto" justify="center" direction='column'>
                                <label htmlFor="apellidos" className="block text-sm font-bold leading-6 text-slate-100 text-center">
                                    Apellido
                                </label>
                                <div className="mt-2 flex justify-center" >
                                    <input
                                        id="apellidos"
                                        name="apellidos"
                                        type="text"
                                        value={formData.apellidos}
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-8/12 bg-zinc-800 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-400 focus:border-gray-500"
                                    />
                                </div>
                            </Flex>

                            <Flex width="auto" height="auto" justify="center" direction='column'>
                                <label htmlFor="correo" className="block text-sm font-bold leading-6 text-slate-100 text-center">
                                    Correo
                                </label>
                                <div className="mt-2 flex justify-center">
                                    <input
                                        id="correo"
                                        name="correo"
                                        type="email"
                                        value={formData.correo}
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-8/12 bg-zinc-800 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-400 focus:border-gray-500"
                                    />
                                </div>
                            </Flex>

                            <Flex width="auto" height="auto" justify="center" direction='column'>
                                <label htmlFor="password" className="block text-sm font-bold leading-6 text-slate-100 text-center">
                                    Contraseña
                                </label>
                                <div className="mt-2 flex justify-center">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-8/12 bg-zinc-800 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-400 focus:border-gray-500"
                                    />
                                </div>
                            </Flex>

                            <Flex width="auto" height="auto" justify="center" direction='column'>
                                <label htmlFor="domicilio" className="block text-sm font-bold leading-6 text-slate-100 text-center">
                                    Domicilio
                                </label>
                                <div className="mt-2 flex justify-center">
                                    <input
                                        id="domicilio"
                                        name="domicilio"
                                        type="text"
                                        value={formData.domicilio}
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-8/12 bg-zinc-800 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-400 focus:border-gray-500"
                                    />
                                </div>
                            </Flex>

                            <Flex width="auto" height="auto" justify="center" direction='column'>
                                <label htmlFor="telefono" className="block text-sm font-bold leading-6 text-slate-100 text-center">
                                    Teléfono
                                </label>
                                <div className="mt-2 flex justify-center">
                                    <input
                                        id="telefono"
                                        name="telefono"
                                        type="text"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        required
                                        className="appearance-none block w-8/12 bg-zinc-800 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-neutral-400 focus:border-gray-500"
                                    />
                                </div>
                            </Flex>
                            </Grid>
                            <Flex width='100%' justify='center' >
                                <button
                                    type="submit"
                                    className="flex w-60 justify-center rounded-md bg-stone-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Registrarse
                                </button>
                            </Flex> 
                    </form>
                </div>
                <div className="mt-4 text-center">
                    <a href="/" className="text-center font-bold text-zinc-100 hover:text-stone-400">
                        ¿Ya tienes una cuenta? Inicia sesión aquí
                    </a>
                </div>
            </div>
        </>
    )
}

export default Register;