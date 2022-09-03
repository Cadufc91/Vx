import styled from "styled-components";

export const WelcomeContainer = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 170px;
    margin-bottom: 100px;
`;

export const WelcomeHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WelcomeTitle = styled.h1`
    font-size: 26px;
    text-transform: uppercase;
    background: linear-gradient(135.68deg, #FC1787 -31.01%, #7C2CFF 79.3%), linear-gradient(90deg, #AE3898 0%, rgba(174, 56, 152, 0.62) 93.35%), linear-gradient(90deg, #AE3898 0%, rgba(228, 49, 104, 0.62) 93.35%, rgba(174, 56, 152, 0.62) 93.35%), #D1268E;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 11px;
`;

export const WelcomSubtitle = styled.h2`
    font-size: 36px;
    text-transform: uppercase;
    color: #fff;
    margin-top: -10px;
`;

export const TopRow = styled.div`
    margin-top: 13px;
    margin-bottom: 44px;
    max-width: 98%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContentContainer = styled.div`
    max-width: 41%;
    margin-left: 15%;
    margin-right: 137px;
    margin-top: 80px;
    color: #fff;
`;

export const ContentTitle = styled.h2`
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 11px;
`;

export const ContentText = styled.p`
    height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ThinText = styled.span`
    font-size: 18px;
    text-transform: uppercase;
`;

export const BoldText = styled.span`
    font-weight: 700;
`;

export const RegularText = styled.span`
    font-size: 16px;
`;

export const TopRowImg = styled.img`
    width: 40%;
`;

export const BottomRow = styled.div`
    margin-left: 5%;
`;

export const QualityContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const BottomRowImg = styled.img`
    margin-right: 30px;
`;

export const QualityTextContainer = styled.div`
    max-width: 32%;
    color: #fff;
`;

export const QualityTitle = styled.h2`
    margin-top: 90px;
    font-size: 22px;
    font-weight: 900;
    text-transform: uppercase;
`;

export const QualityText = styled.p`
    font-size: 18px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 30px;
`;

export const CTA2 = styled.button`
    display: flex;
    align-items: center;
    color: #fff;
    background: #7833E7;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    height: 52px;
    
    a{
        padding: 6px 20px 6px 25px;
        font-size: 20px;
        font-weight: 100;
        text-decoration: none;
        color: #fff;
    }
`;