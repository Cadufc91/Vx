import * as React from 'react';
import {
    ContactContainer,
    ContactHeader,
    ContactTitle,
    ContactSubtitle,
    ContactText,
    FormContainer,
    NameLabel,
    NameInput,
    EmailLabel,
    EmailInput,
    CompanyLabel,
    CompanyInput,
    TextLabel,
    TextInput,
    SubmitBtn,
    FooterImg
} from './style';
import Footer from '../../assets/img/footer.svg';

export function Contact () {
    return(
        <ContactContainer>
            <ContactHeader>
                <ContactTitle>Contato</ContactTitle>
                <ContactSubtitle>¡Encuentre la mejor historia en español para su público!</ContactSubtitle>
                <ContactText>Hable con nuestro equipo de ventas:</ContactText>
            </ContactHeader>
            <FormContainer>
                <NameLabel htmlFor="name">Nombre <NameInput type="text" id='name' placeholder='Saulo Campos'/></NameLabel>
                <EmailLabel htmlFor="email">E-mail* <EmailInput type="email" id="email" placeholder='saulocampos@gmail.com'/></EmailLabel>
                <CompanyLabel htmlFor="company">Empresa <CompanyInput type="text" id='company' placeholder='Mi empresa'/></CompanyLabel>
                <TextLabel htmlFor="text">¿Cómo conociste Globo?<TextInput type="text" id="text" placeholder='Por mis amigos'/></TextLabel>
                <SubmitBtn type="submit">enviar</SubmitBtn>
            </FormContainer>
            <FooterImg src={Footer} alt="" />
        </ContactContainer>
    )
};

export default Contact;