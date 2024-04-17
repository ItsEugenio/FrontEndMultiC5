import { useState } from 'react';
import { Dialog, Button, Flex, Text, TextField, Select, IconButton } from '@radix-ui/themes'
import { PlusIcon } from '@radix-ui/react-icons'
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from '../styles/AdminKits.module.css'

interface Props {
    correoUser: string;
}

function ModalAddKit({ correoUser }: Props) {
    const [id, setID] = useState<number>();
    const [nombre, setNombre] = useState<string>("");
    const [lugar, setLugar] = useState<string>("");
    const UserId = correoUser

    const token = sessionStorage.getItem("token");

    const crearKit = async () => {

        console.log('CREAR KIT')

        const preKit = {
            id: id,
            nombre: nombre,
            status: 'desactivado',
            alta: true,
            lugar: lugar,
            idPropietario: UserId
        }
        const headers = {
            "Content-Type": "application/json",
            Authorization: token,
        };
        try {
            await axios.post("http://3.225.219.181/kits", preKit, {
                headers,
            });
            toast.success('Se agrego el kit exitosamente', {
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
        } catch (error) {
            toast.error('Error al agregar el kit', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
                });
            console.error("Error al crear el kit:", error);
        }
    }

    return (
        <Dialog.Root>
            <ToastContainer />
            <Dialog.Trigger>
                <IconButton color='blue' variant='outline' size='4' style={{ marginLeft: '10px' }}>
                    <PlusIcon />
                </IconButton>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                <Text className={styles.tituloh2}>Agregar Kit para {UserId}</Text>
                <Dialog.Description size="2" mb="4">
                    Ingresa los siguientes datos para crar un Kit
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold" className={styles.titulo}>
                            ID del Kit
                        </Text>
                        <TextField.Input
                            defaultValue="ID"
                            placeholder="Escribe el ID del kit"
                            value={id ?? ''}
                            onChange={(e) => {
                                const newValue = parseInt(e.target.value, 10);
                                setID(isNaN(newValue) ? undefined : newValue);
                            }}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold" className={styles.titulo}>
                            Nombre del Kit
                        </Text>
                        <TextField.Input
                            defaultValue="Kit Casa"
                            placeholder="Escribe el nombre del kit"
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value);
                            }}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold" className={styles.titulo}>
                            Lugar
                        </Text>
                        <Select.Root defaultValue="Casa" onValueChange={(newValue) => setLugar(newValue)}>
                            <Select.Trigger />
                            <Select.Content position="popper">
                                <Select.Item value="Casa">Casa</Select.Item>
                                <Select.Item value="Oficina">Oficina</Select.Item>
                                <Select.Item value="Comedor">Comedor</Select.Item>
                                <Select.Item value="Habitacion">Habitacion</Select.Item>
                            </Select.Content>
                        </Select.Root>
                    </label>
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="outline" color="red">
                            Cancelar
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button color='green' variant='outline' onClick={crearKit}>Crear</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default ModalAddKit
