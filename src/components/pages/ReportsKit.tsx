import { useEffect, useState } from "react";
import { Grid, Flex, Text } from "@radix-ui/themes"
import TableReportsKit from "../TableReportsKit/TableReportsKit"
import Navbar from '../Navbar/Navbar'
import { useNavigate } from "react-router-dom";
import styles from '../styles/AdminKits.module.css'

function ReportsKit() {
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const token = sessionStorage.getItem("token");
    useEffect(() => {
        const isAuthenticated: boolean = sessionStorage.getItem("token") !== null;
        setAuthenticated(isAuthenticated);
        console.log('tokeeen', token)

        if (!isAuthenticated) {
            navigate("/");
        }
    }, [navigate]);
    const idKit = sessionStorage.getItem('idKit')
    const id = idKit || '';
    return (
        <>
            {authenticated && (
                <>
                    <Navbar />
                    <Flex width="100%" height="100%" direction='column' justify="start" style={{height:'100vh'}}>
                    <Flex width="auto" height="auto" justify="center" direction='column' align='center' style={{ marginTop: '2em', marginBottom: '2em' }}>
                        <Text size='8'className={styles.titulo} >Reportes del Kit {idKit}</Text>
                    </Flex>
                    <Grid columns={{ initial: '1', md: '1', lg: '1' }} gap="3" width="auto" flow="row" justify="center" className="mt-10">
                        <Flex width="auto" height="auto" justify="center">
                            <TableReportsKit idKit={id} />
                        </Flex>
                    </Grid>
                    </Flex>
                </>
            )} 
        </>
    )
}

export default ReportsKit   
