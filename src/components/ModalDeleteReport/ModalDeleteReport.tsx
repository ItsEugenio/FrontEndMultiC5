import { AlertDialog, Button, Flex, IconButton } from '@radix-ui/themes'
import { TrashIcon } from '@radix-ui/react-icons'

function ModalDeleteReport() {
    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <IconButton color="red" variant="surface" style={{ marginRight: '5px' }} >
                        <TrashIcon />
                    </IconButton>
                </AlertDialog.Trigger>
                <AlertDialog.Content style={{ maxWidth: 450 }}>
                    <AlertDialog.Title>Eliminar Reporte</AlertDialog.Title>
                    <AlertDialog.Description size="2">
                        Estas seguro que quieres eliminar este Reporte
                    </AlertDialog.Description>

                    <Flex gap="3" mt="4" justify="end">
                        <AlertDialog.Cancel>
                            <Button variant="soft" color="gray">
                                Cancelar
                            </Button>
                        </AlertDialog.Cancel>
                        <AlertDialog.Action>
                            <Button variant="soft" color="red">
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
