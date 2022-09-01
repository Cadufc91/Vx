import * as React from 'react';
import {
    WelcomeContainer,
    WelcomeHeader,
    WelcomeTitle,
    WelcomSubtitle,
    TopRow,
    ContentContainer,
    ContentTitle,
    ContentText,
    ThinText,
    BoldText,
    RegularText,
    TopRowImg,
    BottomRow,
    QualityContainer,
    BottomRowImg,
    QualityTextContainer,
    QualityTitle,
    QualityText,
    CTA2
} from './style';
import ContentImg from '../../assets/img/top-content-img.png';
import QualityImg from '../../assets/img/bottom-content-img.png';
import { MdKeyboardArrowDown } from 'react-icons/md';

export function Welcome () {
    return(
        <WelcomeContainer>
            <WelcomeHeader>
                <WelcomeTitle>Bienvenido a globo</WelcomeTitle>
                <WelcomSubtitle>Telenovelas y series impactantes</WelcomSubtitle>
            </WelcomeHeader>
            <TopRow>
                <ContentContainer>
                    <ContentTitle>La mayor productora de contenidos de latinoamérica,</ContentTitle>
                    <ContentText>
                        <ThinText>Con capacidad para producir más de <br></br><BoldText>3.000 horas</BoldText> de entretenimiento al año.</ThinText><br></br>
                        <RegularText>Desde hace más de 40 años, Globo distribuye contenidos en Brasil y en todo el mundo: historias innovadoras para la televisión abierta, de pago y plataformas digitales, para los más diversos espectadores.</RegularText>
                    </ContentText>
                </ContentContainer>
                <TopRowImg src={ContentImg} alt="" />
            </TopRow>
            <BottomRow>
                <QualityContainer>
                    <BottomRowImg src={QualityImg} alt="" />
                    <QualityTextContainer>
                        <QualityTitle>
                            La calidad y la relevancia de nuestras telenovelas y series llegan hoy a una amplia demanda de consumidores:
                        </QualityTitle>
                        <QualityText>
                            Historias atractivas y exitosas para el público de todo el mundo
                        </QualityText>
                        <CTA2 className='CTA2'><a href="#a">Deleite a su audiencia</a><MdKeyboardArrowDown size={25}/></CTA2>
                    </QualityTextContainer>
                </QualityContainer>
            </BottomRow>
        </WelcomeContainer>
    )
};

export default Welcome;