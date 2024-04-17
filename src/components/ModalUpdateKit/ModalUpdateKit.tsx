import { useState } from 'react';
import { Dialog, Button, Flex, Text, TextField, Select } from '@radix-ui/themes'
import axios from "axios";

import styles from '../styles/AdminKits.module.css'

interface Props {
  idKit: string;
  correoUser: string;
  data: {
    id: string;
    nombre: string;
    status: string;
    lugar: string;
    idPropietario: string;
  };
}

function ModalUpdateKit({ idKit, data, correoUser }: Props) {
  const [kit, setKit] = useState({ ...data, idPropietario: correoUser }); // Incluir idPropietario en el estado del kit
  const IDSelect = idKit;

  const token = sessionStorage.getItem("token");

  const actualizarKit = async () => {
    try {
      await axios.put(`http://3.225.219.181/kits/${IDSelect}`, kit, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });
      window.location.assign("/home-kits");
    } catch (error) {
      console.error("Error al actualizar el kit:", error);
    }
  };

  console.log('dataModal',kit)

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger>
          <Button color='blue' variant='outline' style={{ marginLeft: '5px' }}>Editar Kit</Button>
        </Dialog.Trigger>

        <Dialog.Content style={{ maxWidth: 450 }}>
          <Text className={styles.titulo}>Editar Kit {IDSelect}</Text >
          <Dialog.Description size="2" mb="4">
            Cambia lo que necesites del kit
          </Dialog.Description>

          <Flex direction="column" gap="3">
            <label>
              <Text as="div" size="2" mb="1" weight="bold" className={styles.titulo}>
                ID del Kit
              </Text>
              <TextField.Input
                defaultValue={data.id}
                value={kit.id}
                onChange={(e) => setKit({ ...kit, id: e.target.value })}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold" className={styles.titulo}>
                Nombre del Kit
              </Text>
              <TextField.Input
                defaultValue={data.nombre}
                value={kit.nombre}
                onChange={(e) => setKit({ ...kit, nombre: e.target.value })}
              />
            </label>
            <label>
              <Text as="div" size="2" mb="1" weight="bold" className={styles.titulo}>
                Lugar
              </Text>
              <Select.Root value={kit.lugar} onValueChange={(newValue) => setKit({ ...kit, lugar: newValue })}>
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
              <Button color='green' variant='outline' onClick={actualizarKit}>Guardar</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}

export default ModalUpdateKit;
