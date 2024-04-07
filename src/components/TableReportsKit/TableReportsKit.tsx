import { Table,Theme } from '@radix-ui/themes'

import ModalReportKit from '../ModalReportKit/ModalReportKit';
import ModalDeleteReport from '../ModalDeleteReport/ModalDeleteReport';

import styles from './TableReportKit.module.css'



interface TableT {
    titulos: string;
}

interface Table {
    idReport: string;
    fecha: string;
    hora: string;
}
const titles: TableT[] = [
    { titulos: 'ID' },
    { titulos: 'Fecha' },
    { titulos: 'Hora' },
    { titulos: 'Administrar Reporte' }
]

const table: Table[] = [
    { idReport: '11ds43', fecha: '27/03/2024', hora: "10:00" },
    { idReport: '21e468', fecha: '26/03/2024', hora: "14:00" },
    { idReport: '13z5y8', fecha: '28/03/2024', hora: "15:30" }
]

function TableReportsKit() {
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
                {table.map(bodytitlos => (
                    <Table.Row key={bodytitlos.idReport}>
                        <Table.RowHeaderCell justify='center'>{bodytitlos.idReport}</Table.RowHeaderCell>
                        <Table.Cell justify='center'>{bodytitlos.fecha}</Table.Cell>
                        <Table.Cell justify='center'>{bodytitlos.hora}</Table.Cell>
                        <Table.Cell justify='center'>
                                <ModalReportKit />
                                <ModalDeleteReport />
                        </Table.Cell>

                    </Table.Row>
                ))}

            </Table.Body>
        </Table.Root>
        </Theme>
    )
}

export default TableReportsKit
