import { useEffect, useState } from "react";
import { AlertDialog, Button, Flex, IconButton, Badge, Separator, Grid,Text } from '@radix-ui/themes'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import CardImagesCam from '../CardImagesESPCAM/CardImagesCam';
import axios from "axios";

import styles from '../styles/AdminKits.module.css'

interface Props {
    idReport: string;
}

function ModalReportKit({ idReport }: Props) {
    const [data, setData] = useState<any>({});
 
    const report = idReport;
    const token = sessionStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://3.225.219.181/reportes/${report}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                setData({
                    ...response.data.data,
                    fecha: response.data.data.fecha.slice(0, 10) // Trunca la fecha a los primeros 10 caracteres
                });
                console.log('data',data)
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [report, token]);
    
    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <IconButton color="green" variant="surface" style={{ marginRight: '5px' }}>
                        <EyeOpenIcon />
                    </IconButton>
                </AlertDialog.Trigger>
                <AlertDialog.Content style={{ maxWidth: 550 }}>
                    <Text className={styles.titulo}>Detalles del reporte {report}</Text >
                    <AlertDialog.Description size="2">
                        <Separator color="cyan" size="4" style={{ marginBottom: '1em' }} />
                        <Flex gap='2' style={{ marginBottom: '1em' }}  >
                            <Text size='4' className={styles.tituloh2}>
                                Fecha y Hora
                            </Text >
                        </Flex>
                        <Flex gap='2' style={{ marginBottom: '1em' }} align='center' justify='center'>
                            <Badge color='green' size="2" >{data.fecha}</Badge>
                        </Flex>
                        <Flex gap='2' style={{ marginBottom: '1em' }} justify='center' >
                            <Badge color='green' size="2" >{data.hora}</Badge>
                        </Flex>
                        <Separator color="cyan" size="4" style={{ marginBottom: '1em' }} />
                        <Flex gap='2' direction='column' style={{ marginBottom: '1em' }}>
                            <Text  className={styles.tituloh2} size='4'>Sensores Activados</Text>  
                            {/* Resto del código... */}
                            {data.camara === 1 ?
                                <Flex justify='center'>
                                    <Badge color='blue' size="2">
                                        Camara activada
                                    </Badge> </Flex> : ''}
                            {data.movimiento === 1 ?
                                <Flex justify='center'>
                                    <Badge color='blue' size="2">
                                        Movimieto activado
                                    </Badge> </Flex> : ''}
                            {data.magnetico === 1 ?
                                <Flex justify='center'>
                                    <Badge color='blue' size="2">
                                        Puerta activada
                                    </Badge> </Flex> : ''}
                        </Flex>
                        <Separator color="cyan" size="4" style={{ marginBottom: '1em' }} />
                        <Flex gap='2' style={{ marginBottom: '1em' }}  >
                            <Text size='4' className={styles.tituloh2}>
                                Imagenes Capturadas
                            </Text >
                        </Flex>
                        {/* Resto del código... */}
                        <Grid columns={{ initial: '1', md: '1', lg: '1' }} gap="2" width="auto" flow="row" justify="center" style={{ marginBottom: '1em' }} >
                            <Flex width="auto" height="auto" justify="center" gap='2'>
                                <CardImagesCam imageCam={data.imagen}/>
                            </Flex>
                        </Grid>
                        <Separator color="cyan" size="4" style={{ marginBottom: '1em' }} />
                    </AlertDialog.Description>
                    {/* PARTE DE ABAJO DEL MODAL*/}
                    <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                            <Button variant="soft" color="blue">
                                Cerrar Detalles
                            </Button>
                        </AlertDialog.Cancel>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    )
}

export default ModalReportKit
