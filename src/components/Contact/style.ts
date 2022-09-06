import styled from "styled-components";

export const ContactContainer = styled.section`
    margin-top: 53px;
    margin-left: 30%;
    margin-bottom: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 44%;
    height: 663px;
`;

export const ContactHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactTitle = styled.h2`
    font-size: 28px;
    font-weight: 700;
    text-transform: uppercase;
    background: linear-gradient(135.68deg, #FC1787 -31.01%, #7C2CFF 79.3%), linear-gradient(90deg, #AE3898 0%, rgba(174, 56, 152, 0.62) 93.35%), linear-gradient(90deg, #AE3898 0%, rgba(228, 49, 104, 0.62) 93.35%, rgba(174, 56, 152, 0.62) 93.35%), #D1268E;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 11px;
`;

export const ContactSubtitle = styled.h3`
    color: #fff;
    text-transform: uppercase;
    font-size: 36.5px;
    font-weight: 400;
    text-align: center;
    width: 100%;
`;

export const ContactText = styled.p`
    color: #fff;
    margin-top: -20px;
    margin-bottom: 40px;
    font-size: 18px;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const NameLabel = styled.label`
    border: 1.7px solid rgba(236, 236, 236, 0.3);
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 23px;
    height: 69px;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #AE3898;
    }
`;

export const NameInput = styled.input`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 13px;
    
    :placeholder{
        color: #E1E1E2;
    }

    :focus{
        outline: none !important;
    }
`;

export const EmailLabel = styled.label`
    border: 1.7px solid rgba(236, 236, 236, 0.3);
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 23px;
    height: 69px;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #AE3898;
    }
`;

export const EmailInput = styled.input`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 13px;

    :placeholder{
        color: #E1E1E2;
    }

    :focus{
        outline: none !important;
    }
`;

export const CompanyLabel = styled.label`
    border: 1.7px solid rgba(236, 236, 236, 0.3);
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 23px;
    height: 69px;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #AE3898;
    }
`;

export const CompanyInput = styled.input`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 13px;

    :placeholder{
        color: #E1E1E2;
    }

    :focus{
        outline: none !important;
    }
`;

export const TextLabel = styled.label`
    border: 1.7px solid rgba(236, 236, 236, 0.3);
    background: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding-left: 23px;
    height: 69px;
    color: #fff;
    font-size: 13px;
    font-weight: 700;
    transition: all 0.3s ease-in-out;

    :hover{
        color: #AE3898;
    }
`;

export const TextInput = styled.input`
    background: transparent;
    border: none;
    color: #fff;
    font-size: 13px;

    :placeholder{
        color: #E1E1E2;
    }

    :focus{
        outline: none !important;
    }
`;

export const SubmitBtn = styled.button`
    width: 128px;
    height: 39px;
    margin-left: 38.5%;
    margin-top: 24px;
    margin-bottom: 59px;
    font-size: 19px;
    background: linear-gradient(0deg, #7833E8, #7833E8), linear-gradient(0deg, #AE3898, #AE3898), linear-gradient(110.32deg, #EB4630 28.52%, #E543B8 90.89%), #D1268E;
    border-radius: 47.5361px;
    border: none;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    :hover{
        transform: translateY(-5px) scale(1.1);
    }
`;

export const FooterImg = styled.img`
    width: 71px;
`;