import { Container, ContainerTitle, Description, Title, WeatherContainer, WeatherDescription, WeatherImage, WeatherRange, WeatherTitle, Weatherwrapper } from "./style";
import moon from "../../../../../assets/moon.png"

import CardBackground from "../../../../../assets/Background.png"
export default function Card (){
    return(
        <Container source={CardBackground} imageStyle="borderRadius: 8">
            <ContainerTitle>
                <Title>Porto Alegre, RS</Title>
                <Description>Segunda-feira, 15 de maio de 2023</Description>
            </ContainerTitle>

            <Weatherwrapper>
                <WeatherContainer>
                    <WeatherTitle>28ºc</WeatherTitle>
                    <WeatherRange>26ºc / 32ºc</WeatherRange>
                    <WeatherDescription>Poucas nuvens</WeatherDescription>
                </WeatherContainer>

                <WeatherImage source={moon}/>
                
            </Weatherwrapper>
            
        </Container>
    )
}