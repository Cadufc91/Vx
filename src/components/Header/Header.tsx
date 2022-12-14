import * as React from 'react';
import {
    HeaderContainer,
    HeaderMenu,
    Logo,
    Menu,
    MenuList,
    MenuItem,
    MenuBtn,
    Intro,
    IntroTitle,
    ColoredText,
    IntroText,
    Divider1,
    CTA1,
    HBG,
} from './style';
import Logo1 from '../../assets/img/Group 41logo.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import BG from '../../assets/img/header-bg.png';

export function Header () {
    return(
        <HeaderContainer id='home'>
            <HeaderMenu>
                <Logo src={Logo1} alt="" />
                <Menu>
                    <MenuList>
                        <MenuItem><a href="#home">Globo</a></MenuItem>
                        <MenuItem><a href="#welcome">Telenovelas</a></MenuItem>
                        <MenuItem><a href="#series">Series</a></MenuItem>
                    </MenuList>
                    <MenuBtn><a href="#contact">Contacto</a></MenuBtn>
                </Menu>
            </HeaderMenu>
            <Intro>
                <IntroTitle>Más de <br /> <span>12mil horas</span> <br /><ColoredText>de telenovelas y series dobladas en español</ColoredText></IntroTitle>
                <IntroText>iHay una Globo para todos y para cada uno!</IntroText>
                <Divider1 />
                <CTA1><a href="#series">Encuentre la mejor historia para su audiencia</a><MdKeyboardArrowDown size={25} /></CTA1>
            </Intro>
            <HBG src={BG} />
        </HeaderContainer>
    )
};

export default Header;