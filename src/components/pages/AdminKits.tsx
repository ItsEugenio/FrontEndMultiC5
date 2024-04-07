import { Grid, Flex, Heading,Text } from "@radix-ui/themes"
import TableAdminKits from "../TableAdminKits/TableAdminKits"
import Navbar from '../Navbar/Navbar'


function AdminKits() {
    return (
        <>
            <Navbar />
            <Flex width="auto" height="auto" direction='column' justify="center" style={{ marginTop: '2em', marginBottom: '2em',textAlign:'center' }}>
                <Heading size='8' >Kits Disponibles </Heading>
                <Text style={{marginTop:'1em',marginBottom:'1.5em'}} size="3" weight="bold">Puedes ver los reportes diponibles o administrar un Kit</Text>
            </Flex>
            <Grid columns={{ initial: '1', md: '1', lg: '1' }} gap="3" width="auto" flow="row" justify="center">
                <Flex width="auto" height="auto" justify="center">
                    <TableAdminKits />
                </Flex>
            </Grid>
        </>
    )
}

export default AdminKits
