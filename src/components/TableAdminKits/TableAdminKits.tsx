import { Table, Badge, IconButton, Theme } from '@radix-ui/themes'
import ModalDeletKit from '../ModalDeleteKit/ModalDeletKit';
import ModalUpdateKit from '../ModalUpdateKit/ModalUpdateKit';
import { EyeOpenIcon } from '@radix-ui/react-icons'
import styles from './tableAdminKits.module.css'


interface TableT {
    titulos: string;
}

interface Table {
    idKit: string;
    nombre: string;
    status: string;
}

const titles: TableT[] = [
    { titulos: 'ID' },
    { titulos: 'Nombre' },
    { titulos: 'Status' },
    { titulos: 'Ver Reportes' },
    { titulos: 'Administrar Kit' },

]

const table: Table[] = [
    { idKit: '11ds43', nombre: 'Casa', status: "encendido" },
    { idKit: '21e468', nombre: 'Cuarto', status: "apagado" },
    { idKit: '13z5y8', nombre: 'Depa', status: "intrusion" }
]

// ID -- NOMBRE -- STATUS -- BTN DELETE -- BNT PUT -- BTN VER REPORTES 



function TableAdminKits() {

    const handleClick = () => {
        window.location.assign('/reportes');
    };


    return (
        <Theme appearance='dark'>
            <div>
                <Table.Root variant="surface" style={{ width: '100%', borderCollapse: 'collapse' }} size={{ initial: '1', md: '2', lg: '3' }} className={styles.table} >
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
                        {table.map(bodytitlos => (
                            <Table.Row key={bodytitlos.idKit}>
                                <Table.RowHeaderCell justify='center'>{bodytitlos.idKit}</Table.RowHeaderCell>
                                <Table.Cell justify='center'>{bodytitlos.nombre}</Table.Cell>
                                <Table.Cell justify='center'><Badge size='2' color={
                                    bodytitlos.status === "intrusion" ? "blue" : bodytitlos.status === "encendido" ? "green" : "red"
                                }>{bodytitlos.status}</Badge></Table.Cell>

                                <Table.Cell justify='center'>
                                    <IconButton color="blue" variant="surface" onClick={handleClick}>
                                        <EyeOpenIcon />
                                    </IconButton>
                                </Table.Cell>

                                <Table.Cell justify='center'>
                                    <ModalDeletKit />
                                    <ModalUpdateKit />
                                </Table.Cell>

                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table.Root>
            </div>
        </Theme>
    )
}

export default TableAdminKits
