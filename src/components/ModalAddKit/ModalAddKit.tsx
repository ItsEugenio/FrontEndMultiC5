import { Dialog, Button, Flex, Text, TextField, Select,IconButton } from '@radix-ui/themes'
import { PlusIcon } from '@radix-ui/react-icons'

function ModalAddKit() {
    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <IconButton color='blue' variant='outline' style={{ marginLeft: '5px' }}>
                    <PlusIcon />
                </IconButton>
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
                <Dialog.Title>Agregar Kit</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Ingresa los siguientes datos para crar un Kit
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            ID del Kit
                        </Text>
                        <TextField.Input
                            defaultValue="ID"
                            placeholder="Escribe el ID del kit"
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Nombre del Kit
                        </Text>
                        <TextField.Input
                            defaultValue="Kit Casa"
                            placeholder="Escribe el nombre del kit"
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Lugar
                        </Text>
                        <Select.Root defaultValue="Casa">
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
                        <Button color='green' variant='outline'>Crear</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>
    )
}

export default ModalAddKit
