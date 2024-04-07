import { AlertDialog,Button,Flex } from '@radix-ui/themes'

function ModalDeletKit() {
  return (
    <>
    <AlertDialog.Root>
  <AlertDialog.Trigger>
    <Button variant='outline' color="red" style={{marginRight:'5px'}}>Eliminar Kit</Button>
  </AlertDialog.Trigger>
  <AlertDialog.Content style={{ maxWidth: 450 }}>
    <AlertDialog.Title>Eliminar Kit</AlertDialog.Title>
    <AlertDialog.Description size="2">
    Estas seguro que quieres eliminar este kit
    </AlertDialog.Description>

    <Flex gap="3" mt="4" justify="end">
      <AlertDialog.Cancel>
        <Button variant="soft" color="gray">
          Cancelar
        </Button>
      </AlertDialog.Cancel>
      <AlertDialog.Action>
        <Button variant="soft" color="red">
          Eliminar Kit
        </Button>
      </AlertDialog.Action>
    </Flex>
  </AlertDialog.Content>
</AlertDialog.Root>
    </>
  )
}

export default ModalDeletKit
