import * as React from 'react';
import {
    SeriesContainer,
    SeriesHeader,
    HeaderTitle,
    HeaderSubtitle,
    HeaderText,
    SeriesInfo,
    InfoBox1,
    InfoTitle1,
    InfoText1,
    Divider2,
    InfoBox2,
    InfoTitle2,
    BoldText,
    InfoText2,
    Divider3,
    SwiperContainer,
    SwiperTitle,
    ImgSlide,
    SeriesTitle
} from './style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import "swiper/css/navigation";
import 'swiper/css';
import Series1 from '../../assets/img/series1.png';
import Series2 from '../../assets/img/series2.png';
import Series3 from '../../assets/img/series3.png';
import Series4 from '../../assets/img/series4.png';
import Series5 from '../../assets/img/series5.png';
import Series6 from '../../assets/img/series6.png';

export function Series () {
    return(
        <SeriesContainer id='series'>
            <SeriesHeader>
                <HeaderTitle>Series</HeaderTitle>
                <HeaderSubtitle>¡Nuevo consumidor, nuevo contenido!</HeaderSubtitle>
                <HeaderText>Para un público que está en la búsqueda de nuevas historias,<br></br> personajes complejos y emociones únicas.</HeaderText>
            </SeriesHeader>
            <SeriesInfo>
                <InfoBox1>
                    <InfoTitle1>¡para usted y para todos!</InfoTitle1>
                    <InfoText1>Un mundo de datos y patallas, done las<br></br> tendencias son relevantes, cada individuo es único.</InfoText1>
                </InfoBox1>
                <Divider2 />
                <InfoBox2>
                    <InfoTitle2>original <BoldText>globoplay</BoldText></InfoTitle2>
                    <InfoText2>¡Estamos en la nueva era de series Globo! El resultado es un amplio portafolio de géneros y temas con alta afinidad con la demanda de los consumidores modernos.</InfoText2>
                </InfoBox2>
            </SeriesInfo>
            <Divider3 />
            <SwiperContainer>
                <SwiperTitle>Historias que tratan de las tendencias mundiales para todos los públicos</SwiperTitle>
                <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={19}
                slidesPerView={4}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                loop={true}
                navigation
                >
                    <SwiperSlide>
                        <ImgSlide src={Series1} alt="" />
                        <SeriesTitle>Drama</SeriesTitle>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImgSlide src={Series2} alt="" />
                        <SeriesTitle>Thriller sobrenatural</SeriesTitle>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImgSlide src={Series3} alt="" />
                        <SeriesTitle>Thriller policial</SeriesTitle>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImgSlide src={Series4} alt="" />
                        <SeriesTitle>True crime</SeriesTitle>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImgSlide src={Series5} alt="" />
                        <SeriesTitle>Activismo</SeriesTitle>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ImgSlide src={Series6} alt="" />
                        <SeriesTitle>Addición a las drogas</SeriesTitle>
                    </SwiperSlide>
                </Swiper>
            </SwiperContainer>
        </SeriesContainer>
    )
};

export default Series;