import React, { useEffect, useState } from "react";
import { Table, Badge, IconButton, Theme, Button,Flex } from '@radix-ui/themes';
import ModalDeletKit from '../ModalDeleteKit/ModalDeletKit'; // Assuming correct path
import ModalUpdateKit from '../ModalUpdateKit/ModalUpdateKit'; // Assuming correct path
import { EyeOpenIcon, LockOpen2Icon, LockClosedIcon } from '@radix-ui/react-icons';
import styles from './tableAdminKits.module.css';
import axios from "axios";
import { io } from "socket.io-client";
const socket = io("http://52.204.173.121");


interface TableT {
    titulos: string;
}

interface Table {
    id: string;
    nombre: string;
    status: string;
    lugar: string;
    idPropietario: string;
}

const titles: TableT[] = [
    { titulos: 'ID' },
    { titulos: 'Nombre' },
    { titulos: 'Status' },
    { titulos: 'Ver Reportes' },
    { titulos: 'Administrar Kit' },
];


interface Props {
    dataTableAdminK: Table[]; // Prop to receive data from parent component
}




function TableAdminKits({ dataTableAdminK }: Props) {

    console.log('data Table admin',dataTableAdminK)

    sessionStorage.removeItem('idKit');

    const handleClick = (id: string) => {
        sessionStorage.setItem("idKit", id);
        window.location.assign('/reportes')
    };

    const userCorreoID = sessionStorage.getItem("correoUser") || ''

    const token = sessionStorage.getItem("token");

    

    const activarKit = async (id: string) => {
        const activar = {
            activate: "activado"
        }
        try {
            await axios.put(`http://3.225.219.181/kits/security/${id}`, activar, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            window.location.assign('/home-kits')
        } catch (error) {
            console.error("Error al cambiar activar el kit:", error);
        }
    };
    const desactivarKit = async (id: string) => {
        const desactivar = {
            activate: "desactivado"
        }
        try {
            await axios.put(`http://3.225.219.181/kits/security/${id}`, desactivar, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token,
                },
            });
            localStorage.removeItem("modeIntru")
            window.location.assign('/home-kits')
        } catch (error) {
            console.error("Error al cambiar desactivar el kit:", error);
        }
    };

    const [intrusion, setIntrucion] = useState('');

    useEffect(() => {
        socket.on("connect", () => {
            console.log("conectado al servidor WebSocket");

        });
        socket.on("websocketEvent", (data) => {
            if (data) {
                console.log('Intrusion')
                const modeIntrusion = 'activado'
                setIntrucion(modeIntrusion)
            } else {
                console.log('Aun no hay actividad')
            }
        });

        return () => {
            socket.off("connect");
        };
    }, []);

    return (
        <Theme appearance='dark'>
            <div>
                <Table.Root variant="surface" style={{ width: '100%', borderCollapse: 'collapse' }} size={{ initial: '1', md: '2', lg: '3' }} className={styles.table} >
                    <Table.Header>
                        <Table.Row>
                            {titles.map((titulo) => (
                                <Table.ColumnHeaderCell justify='center' key={titulo.titulos}>
                                    {titulo.titulos}
                                </Table.ColumnHeaderCell>
                            ))}
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {dataTableAdminK && dataTableAdminK.map((bodytitlos) => (
                            <Table.Row key={bodytitlos.id}>
                                <Table.RowHeaderCell justify='center' className="text-lg">{bodytitlos.id}</Table.RowHeaderCell>
                                <Table.Cell justify='center'>{bodytitlos.nombre}</Table.Cell>
                                <Table.Cell justify='center'>
                                    {intrusion === "activado" ? <Badge size='2' color='blue'>Intrusion</Badge> : <Badge size='2' color={
                                        bodytitlos.status === "intrusion" ? "blue" : bodytitlos.status === "activado" ? "green" : "red"
                                    }>
                                        {bodytitlos.status}
                                    </Badge>}


                                </Table.Cell>
                                <Table.Cell justify='center'>
                                    <IconButton color="blue" variant="surface" onClick={() => handleClick(bodytitlos.id)}>
                                        <EyeOpenIcon />
                                    </IconButton>
                                </Table.Cell>
                                <Table.Cell justify='center'>
                                    {/* <Flex width="auto" height="auto" justify="center" direction='column'> */}
                                    <ModalDeletKit idKit={bodytitlos.id} />
                                    <ModalUpdateKit idKit={bodytitlos.id} data={bodytitlos} correoUser={userCorreoID} />
                                    {bodytitlos.status === "activado" ?
                                        <>
                                            <Button variant="outline" color="orange" className='ml-3' onClick={() => desactivarKit(bodytitlos.id)}>
                                                <LockOpen2Icon /> Desactivar Kit
                                            </Button>
                                        </>
                                        : bodytitlos.status === "desactivado" ?
                                            <>
                                                <Button variant="outline" color="orange" className='ml-3' onClick={() => activarKit(bodytitlos.id)}>
                                                    <LockClosedIcon /> Activar Kit
                                                </Button>
                                            </>
                                            :
                                            ''
                                    }
                                    {/* </Flex> */}
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Root>
            </div>
        </Theme>
    );
}

export default TableAdminKits;