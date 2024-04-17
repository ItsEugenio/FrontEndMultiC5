import { AlertDialog, Button, Flex, IconButton,Text } from '@radix-ui/themes'
import { TrashIcon } from '@radix-ui/react-icons'
import axios from "axios";

import styles from '../styles/AdminKits.module.css'

interface Props {
    idReport: string;

}
function ModalDeleteReport({ idReport }: Props) {

    const report = idReport;
    const token = sessionStorage.getItem("token");

    const borrarReporte = async () => {
        const headers = {
            "Content-Type": "application/json",
            Authorization: token,
        };
        try {
            await axios.delete(`http://3.225.219.181/reportes/${report}`, {
                headers,
            });
            window.location.assign("/reportes");
        } catch (error) {
            console.error("Error al crear el kit:", error);
        }
    }
    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <IconButton color="red" variant="surface" style={{ marginRight: '5px' }} >
                        <TrashIcon />
                    </IconButton>
                </AlertDialog.Trigger>
                <AlertDialog.Content style={{ maxWidth: 450 }}>
                    <Text className={styles.titulo}>Eliminar Reporte {report}</Text>
                    <AlertDialog.Description size="2" className={styles.tituloh2}>
                        Estas seguro que quieres eliminar este Reporte
                    </AlertDialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                            <Button variant="soft" color="gray">
                                Cancelar
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button variant="soft" color="red" onClick={borrarReporte}>
                                Eliminar Reporte
                            </Button>
                        </AlertDialog.Action>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    )
}

export default ModalDeleteReport
