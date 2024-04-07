import { Card, Flex, Heading, Badge } from "@radix-ui/themes"
function CardKit() {
    return (
        <>
            <Card style={{ width: "20em", margin: '1em' }}>
                <Flex direction="column">
                    <Heading align="center" >
                        Nombre del kit
                    </Heading>
                    <Flex justify="center"> 
                        <Badge color="red" size="2" >
                            Activo
                        </Badge>
                    </Flex> 
                </Flex>
            </Card>
        </>
    )
}

export default CardKit
