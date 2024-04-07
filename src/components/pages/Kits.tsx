import { Grid, Flex, Heading } from "@radix-ui/themes";
import CardKit from "../CardKit/CardKit";


function Kits() {
    return (
        <>
            <Flex width="auto" height="auto" justify="center" style={{marginTop:'2em',marginBottom:'2em'}}>
                <Heading size='8' >Pagina Principal Kits</Heading>
            </Flex>
            <Grid columns={{ initial: '1', md: '2', lg: '3' }} gap="3" width="auto" flow="row" justify="center" style={{ border: "1px solid" }}>
                <Flex width="auto" height="auto" justify="center">
                    <CardKit />
                </Flex>
                <Flex width="auto" height="auto" justify="center" >
                    <CardKit />
                </Flex>
                <Flex width="auto" height="auto" justify="center" >
                    <CardKit />
                </Flex>
            </Grid>
        </>
    );
}
export default Kits;
