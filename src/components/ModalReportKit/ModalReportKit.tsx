import { AlertDialog, Button, Flex, IconButton, Badge, Separator, Heading, Grid } from '@radix-ui/themes'
import { EyeOpenIcon } from '@radix-ui/react-icons'
import CardImagesCam from '../CardImagesESPCAM/CardImagesCam';

interface Sensors {
    sensor: string;
}
const sensors: Sensors[] = [
    { sensor: 'Movimiento PIR' },
    { sensor: 'Magnetico' },
    { sensor: 'ESP CAM' },
]
function ModalReportKit() {
    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <IconButton color="green" variant="surface" style={{ marginRight: '5px' }}>
                        <EyeOpenIcon />
                    </IconButton>
                </AlertDialog.Trigger>
                <AlertDialog.Content style={{ maxWidth: 550 }}>
                    <AlertDialog.Title>Detalles del reporte</AlertDialog.Title>
                    <AlertDialog.Description size="2">
                        <Separator color="cyan" size="4" style={{ marginBottom: '1em' }} />

                        <Flex gap='2' style={{ marginBottom: '1em' }}  >
                            <Heading size='4' >
                                Fecha y Hora
                            </Heading >
                        </Flex>

                        <Flex gap='2' style={{ marginBottom: '1em' }} align='center' justify='center'>
                            <Badge color='green' size="2" >29/03/2024</Badge>
                        </Flex>

                        <Flex gap='2' style={{ marginBottom: '1em' }} justify='center' >
                            <Badge color='green' size="2" >13:30</Badge>
                        </Flex>

                        <Separator color="cyan" size="4" style={{ marginBottom: '1em' }} />

                        <Flex gap='2' direction='column' style={{ marginBottom: '1em' }}>
                            <Heading size='4'>Sensores Activados</Heading>
                            {sensors.map(sensor => (
                                <Flex key={sensor.sensor} justify='center'>
                                    <Badge color='blue' size="2" >
                                        {sensor.sensor}
                                    </Badge>
                                </Flex>
                            ))}
                        </Flex>

                        <Separator color="cyan" size="4" style={{ marginBottom: '1em' }} />

                        <Flex gap='2' style={{ marginBottom: '1em' }}  >
                            <Heading size='4' >
                                Imagenes Capturadas
                            </Heading >
                        </Flex>

                        <Grid columns={{ initial: '1', md: '1', lg: '2' }} gap="2" width="auto" flow="row" justify="center" style={{ marginBottom: '1em' }} >
                            <Flex width="auto" height="auto" justify="center" gap='2'>
                                <CardImagesCam />
                            </Flex>

                            <Flex width="auto" height="auto" justify="center" gap='2'>
                                <CardImagesCam />
                            </Flex>

                            <Flex width="auto" height="auto" justify="center" gap='2'>
                                <CardImagesCam />
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
