import { Container, DescriptionText, DetailConatiner, DetailDescription, DetailImage, DetailText } from "./styles";

import Term from "../../../../../assets/term.png"
import nuvem from "../../../../../assets/nuvem.png"
import ar from "../../../../../assets/AR.png"
import agua from "../../../../../assets/Agua.png"
import sol from "../../../../../assets/sol.png"

export default function WeatherDetail(){

    return(
        <Container>
            <DetailConatiner>
                <DetailDescription>
                    <DetailImage source={Term} />
                    <DetailText>Sensação térmica</DetailText>
                </DetailDescription>
                <DescriptionText>26ºc</DescriptionText>
            </DetailConatiner>

            <DetailConatiner>
                <DetailDescription>
                    <DetailImage source={nuvem} />
                    <DetailText>Probabilidade de chuva</DetailText>
                </DetailDescription>
                <DescriptionText>0%</DescriptionText>
            </DetailConatiner>

            <DetailConatiner>
                <DetailDescription>
                    <DetailImage source={ar} />
                    <DetailText>Velocidade do vento</DetailText>
                </DetailDescription>
                <DescriptionText>8 km/h</DescriptionText>
            </DetailConatiner>

            <DetailConatiner>
                <DetailDescription>
                    <DetailImage source={agua} />
                    <DetailText>Umidade do ar</DetailText>
                </DetailDescription>
                <DescriptionText>40%</DescriptionText>
            </DetailConatiner>

            <DetailConatiner>
                <DetailDescription>
                    <DetailImage source={sol} />
                    <DetailText>Índice UV</DetailText>
                </DetailDescription>
                <DescriptionText>5</DescriptionText>
            </DetailConatiner>
        </Container>
    )
}