import styled from 'styled-components';

export const HeaderContainer = styled.section`
    display: flex;
    flex-direction: column;
    max-width: 80%;
    color: #fff;
`;

export const HeaderMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 45px;
    margin-top: 30px;
    font-size: 18px;
    font-weight: 700;
`;

export const Logo = styled.img`
    margin-left: 15%;
    cursor: pointer;
`;

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const MenuList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 60px;
    list-style: none;
    margin-right: 60px;
`;

export const MenuItem = styled.li`
    a{
        text-decoration: none;
        color: #fff;
    }

    :hover{
        opacity: 0.5;
    }
`;

export const MenuBtn = styled.button`
    height: 36px;
    background: linear-gradient(0deg, #7833E8, #7833E8), linear-gradient(0deg, #FC1787, #FC1787), linear-gradient(0deg, #AE3898, #AE3898), linear-gradient(110.32deg, #EB4630 28.52%, #E543B8 90.89%), #D1268E;
    border-radius: 33.749px;
    border: none;
    transition: all 0.3s ease-in-out;

    a{
        padding: 3px 18px;
        text-decoration: none;
        color: #fff;
        font-size: 17px;
        font-weight: 700;
    }

    :hover{
        transform: scale(1.1);
    }
`;

export const Intro = styled.div`
    max-width: 45%;
    width: 479px;
    margin-top: 122px;
    margin-left: 15%;
    display: flex;
    flex-direction: column;
`;

export const IntroTitle = styled.h1`
    color: #CB2283;
    font-size: 45px;
    text-transform: uppercase;
    margin-bottom: -8px;

    span{
        font-size: 60px;
        width: 462px;
        margin-top: -500px;
    }
`;

export const ColoredText = styled.span`
    color: #fff;
    font-size: 36px !important;
`;

export const IntroText = styled.p`
    color: #CB2283;
    font-size: 21px;
    font-weight: 700;
`;

export const Divider1 = styled.span`
    width: 428px;
    border: 1px solid #fff;
    opacity: 0.2;
    margin-bottom: 24px;
`;

export const CTA1 = styled.button`
    height: 49px;
    border: none;
    display: flex;
    align-items: center;
    background: linear-gradient(0deg, #7833E7, #7833E7), linear-gradient(109.75deg, #FC1787 -19.65%, #7C2CFF 58.39%), #C4C4C4;
    border-radius: 28.4554px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    
    a{
        margin-left: 5%;
        margin-right: 9px;
        font-size: 18px;
        text-decoration: none;
        color: #fff;
    }

    :hover{
        transform: translateY(5px);
    }
`;

export const HBG = styled.img`
    position: absolute;
    z-index: -1;
    left: 35%;
    width: 65%;
`;