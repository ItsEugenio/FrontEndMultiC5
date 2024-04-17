import { AlertDialog, Button, Flex,Text } from '@radix-ui/themes'
import axios from "axios";

import styles from '../styles/AdminKits.module.css'

interface Props {
  idKit: string;
}

function ModalDeletKit({ idKit }: Props) {
  const IDSelect = idKit

  const token = sessionStorage.getItem("token");

  const borrarKit = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: token,
    };
    try {
      await axios.delete(`http://3.225.219.181/kits/${IDSelect}`, {
        headers,
      });
      window.location.assign("/home-kits");
    } catch (error) {
      console.error("Error al crear el kit:", error);
    }
  }
  return (
    <>
      <AlertDialog.Root>
        <AlertDialog.Trigger>
          <Button variant='outline' color="red" style={{ marginRight: '5px' }}>Eliminar Kit</Button>
        </AlertDialog.Trigger>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <Text className={styles.titulo}>Eliminar Kit {IDSelect}</Text>
          <AlertDialog.Description size="2" className={styles.tituloh2}>
            Estas seguro que quieres eliminar este kit
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray">
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="soft" color="red" onClick={borrarKit}>
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
