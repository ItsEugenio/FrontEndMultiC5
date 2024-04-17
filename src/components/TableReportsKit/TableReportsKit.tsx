import { useEffect, useState } from "react";
import { Table, Theme } from '@radix-ui/themes'
import ModalReportKit from '../ModalReportKit/ModalReportKit';
import ModalDeleteReport from '../ModalDeleteReport/ModalDeleteReport';
import axios from "axios";
import { io } from "socket.io-client";

import styles from './TableReportKit.module.css'
const socket = io("http://52.204.173.121");

interface TableT {
    titulos: string;
}

interface Table {
    id: string;
    fecha: string;
    hora: string;
}

const titles: TableT[] = [
    { titulos: 'ID' },
    { titulos: 'Fecha' },
    { titulos: 'Hora' },
    { titulos: 'Administrar Reporte' }
]

interface nuevoReporte {
    id: string;
    fecha: string;
    hora: string;
    camara: boolean;
    magnetico: boolean;
    movimiento: boolean;
    idKit: string;
    imagen: string;
    correo: string;
}

interface Props {
    idKit: string;
}

function TableReportsKit({ idKit }: Props) {
    const [data, setData] = useState<Table[]>([]);
    const [isConnected, setIsConnected] = useState(false);
    const [newReport, setNewReport] = useState<nuevoReporte[]>([]);
    const kitID = idKit;
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://3.225.219.181/reportes/kit/${kitID}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                setData(response.data.data.map((reporte: Table) => ({
                    ...reporte,
                    fecha: reporte.fecha.slice(0, 10) // Aquí se trunca la fecha a los primeros 10 caracteres
                })));
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [kitID, token]);


    useEffect(() => {
        socket.on("connect", () => {
            setIsConnected(true);
            console.log("conectado al servidor webSocket", isConnected);
        });
        socket.on("websocketEvent", (data) => {
            setNewReport([data]);

            const modeIntru = 'activado'
            localStorage.setItem("modeIntru", modeIntru)
        });

        return () => {
            socket.off("connect");
        };
    }, []);

    return (
        <Theme appearance='dark'>
            <Table.Root variant="surface" className={styles.table}>
                <Table.Header>
                    <Table.Row>
                        {titles.map(titulo => (
                            <Table.ColumnHeaderCell justify='center' key={titulo.titulos}>
                                {titulo.titulos}
                            </Table.ColumnHeaderCell>
                        ))}
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map(bodytitlos => (
                        <Table.Row key={bodytitlos.id}>
                            <Table.RowHeaderCell justify='center' className="text-lg">{bodytitlos.id}</Table.RowHeaderCell>
                            <Table.Cell justify='center' className="text-lg">{bodytitlos.fecha}</Table.Cell>
                            <Table.Cell justify='center' className="text-lg">{bodytitlos.hora}</Table.Cell>
                            <Table.Cell justify='center'>
                                <ModalReportKit idReport={bodytitlos.id} />
                                <ModalDeleteReport idReport={bodytitlos.id} />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                    {newReport.map(bodytitlos => (
                        <Table.Row key={bodytitlos.id}>
                            <Table.RowHeaderCell justify='center'>{bodytitlos.id}</Table.RowHeaderCell>
                            <Table.Cell justify='center'>{bodytitlos.fecha}</Table.Cell>
                            <Table.Cell justify='center'>{bodytitlos.hora}</Table.Cell>
                            <Table.Cell justify='center'>
                                <ModalReportKit idReport={bodytitlos.id} />
                                <ModalDeleteReport idReport={bodytitlos.id} />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Theme>
    )
}

export default TableReportsKit
