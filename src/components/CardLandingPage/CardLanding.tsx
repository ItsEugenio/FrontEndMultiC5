import React from 'react'
import { Flex, Card, Text, Inset, Badge } from "@radix-ui/themes"

interface CardInfo {
    cardImg: string;
    cardText: string;
    cardCont: string;
}

interface Props {
    cards: CardInfo[];
}

function CardLanding({ cards }: Props) {
    return (
        <>
            {cards.map((card) => (
                <Flex justify='center' className='mt-8' >
                    <Card size="2" style={{ width: '300px' }}>
                        <Inset clip="padding-box" side="top" pb="current" >
                            <img
                                src={card.cardImg}
                                alt="Bold typography"
                                style={{
                                    display: 'block',
                                    objectFit: 'cover',
                                    width: '100%',
                                    backgroundColor: 'var(--gray-5)',
                                }}
                            />
                        </Inset>
                        <Flex justify='center'>
                            <Badge size='2' color='blue'>{card.cardText}</Badge>
                        </Flex>

                        <Text as="p" size="3" className='mt-4 text-center'>
                            {card.cardCont}
                        </Text>
                    </Card>
                </Flex>

            ))}

        </>
    )
}

export default CardLanding
