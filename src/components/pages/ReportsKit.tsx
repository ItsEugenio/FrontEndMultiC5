import { Grid, Flex, Heading,Text } from "@radix-ui/themes"
import TableReportsKit from "../TableReportsKit/TableReportsKit"
import Navbar from '../Navbar/Navbar'

function ReportsKit() {
    return (
        <>
            <Navbar />
            <Flex width="auto" height="auto" justify="center" direction='column' align='center' style={{ marginTop: '2em', marginBottom: '2em' }}>
                <Heading size='8' >Reportes</Heading>
                <Text>soy </Text>
            </Flex>
            <Grid columns={{ initial: '1', md: '1', lg: '1' }} gap="3" width="auto" flow="row" justify="center">
                <Flex width="auto" height="auto" justify="center">
                    <TableReportsKit />
                </Flex>
            </Grid>
        </>
    )
}

export default ReportsKit
