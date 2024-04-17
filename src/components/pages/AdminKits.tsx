import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Flex, Text } from "@radix-ui/themes"
import TableAdminKits from "../TableAdminKits/TableAdminKits"
import Navbar from '../Navbar/Navbar'
import axios from "axios";

import styles from '../styles/AdminKits.module.css'


function AdminKits() {

    const [data, setData] = useState<any>(null)
    const token = sessionStorage.getItem("token");
    const navigate = useNavigate();
    const [authenticated, setAuthenticated] = useState<boolean>(false);
    useEffect(() => {
        const isAuthenticated: boolean = sessionStorage.getItem("token") !== null;
        setAuthenticated(isAuthenticated);
        console.log('tokeeen', token)

        if (!isAuthenticated) {
            navigate("/");
        }
    }, [navigate]);

    useEffect(() => {
        const fetchData = async () => {
            const user = sessionStorage.getItem("correoUser") || ''
            try {
                const response = await axios.get(`http://3.225.219.181/kits/propietario/${user}`, {
                    headers: {
                        Authorization: `${token}`,
                    },
                });
                setData(response.data.data);
            } catch (error) {
                console.error('Error al obtener datos:', error);
            }
        };

        fetchData();
    }, [token]);


    return (
        <>
            {authenticated && (
                <>
                    <Navbar />
                    <Flex width="100%" height="100%" direction='column' justify="start" className="h-screen" >
                        <Flex width="auto" height="auto" direction='column' justify="center" style={{ marginTop: '2em', marginBottom: '2em', textAlign: 'center' }}>
                            <Text size='8' className={styles.titulo}>Kits Disponibles </Text>
                            <Text style={{ marginTop: '1em', marginBottom: '1.5em' }} size="3" weight="bold" className={styles.tituloh2}>Puedes ver los reportes diponibles o administrar un Kit</Text>
                        </Flex>
                        <Grid columns={{ initial: '1', md: '1', lg: '1' }} gap="3" width="auto" flow="row" justify="center" className="mt-6">
                            <Flex width="auto" height="auto" justify="center">
                                <TableAdminKits dataTableAdminK={data} />
                            </Flex>
                        </Grid>
                    </Flex>

                </>
            )}
        </>
    )
}

export default AdminKits
