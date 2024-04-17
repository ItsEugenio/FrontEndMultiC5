import { Card, Inset } from '@radix-ui/themes'

// const imageCard = 'https://img.redbull.com/images/c_crop,x_1230,y_0,h_2133,w_1600/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2021/11/2/vb9rkmykpzzohq2xnvui/sergio-perez'

interface Props {
    imageCam: string;

}
function CardImagesCam({ imageCam }: Props) {
    const imageCard = imageCam
    return (
        <Card size="2" style={{ maxWidth: 240 }}>
            <Inset clip="padding-box" side="all">
                <img
                    src={imageCard}
                    alt="Bold typography"
                    style={{
                        display: 'block',
                        objectFit: 'cover',
                        width: '100%',
                        height: 200,
                        backgroundColor: 'var(--gray-5)',
                    }}
                />
            </Inset>
        </Card>
    )
}

export default CardImagesCam
