import styled from "styled-components";

export const Overlay = styled.div`
position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 1200;
`
;

export const Modal = styled.div`
max-width: 540px;
width: 100%;
height: 580px;
padding: 40px 73px 64px 40px;
background-color: #FFFFFF;
border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
    position: relative;
    z-index: 1200;
`
;

export const ModalTitle = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 30px;
line-height: 45px;
display: flex;
align-items: center;
text-align: center;
color: #000000;
    
`
;

// export const CheckboxInput = styled.input`
// display: flex;
//      gap: 9px;
//      margin-top: 25px;
//      align-items: center;
//      justify-content: center;
    
// `
// ;

export const CheckboxLabel = styled.label`
&::before {
    content: '';

    width: 80px;
height: 40px;
background-color: #FFFFFF;
border: 1px solid #E0E0E0;
border-radius: 30px;
    // transition: box-shadow 250ms linear;

    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 8px;
  }

  &::after {
    content: '';
    position: absolute;
    left: 205px;
    top: 123px;
    width: 44px;
    height: 44px;
    background-color: #24CCA7;
    border-radius: 50px;
    box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
    transition: transform 250ms linear, background-color 250ms linear,
    box-shadow 250ms linear;

    text-align: center;
    font-size: 10px;
    font-weight: 500;
    line-height: 2.8;
    padding-top: 8px;
    
`

export const ModalForm = styled.form`
display: flex;
     gap: 40px;
     align-items: center;
     justify-content: center;
     flex-direction: column;
    
`
;

export const ModalWrap = styled.div`
display: flex;
     gap: 32px;
     align-items: center;
     justify-content: center;
     margin-right: 32px
    
    
`
;

export const SelectLabel = styled.select`
    width: 394px;
    border: none;
    border-bottom: 1px solid #E0E0E0;

    font-family: 'Circe';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;

`

export const InputLabel= styled.input`
width: 190px;
border: none;
border-bottom: 1px solid #E0E0E0;
text-align: center;
`
;

export const InputLabelText= styled.input`
width: 394px;
border: none;
border-bottom: 1px solid #E0E0E0;
`
;

export const ModalButtonWrap= styled.div`
display: flex;
     gap: 20px;
     align-items: center;
     justify-content: center;
     flex-direction: column;
`
;

export const ModalButtonAdd= styled.button`
width: 300px;
padding: 13px 65px 13px 71px;
border: none;
background-color: #24CCA7;
border-radius: 20px;
color: #FFFFFF;

font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
`
;

export const ModalButtonCancel = styled.button`
width: 300px;
padding: 13px 65px 13px 71px;
border: none;
background-color: #FFFFFF;
border: 1px solid #4A56E2;
border-radius: 20px;

font-family: 'Circe';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
letter-spacing: 0.1em;
text-transform: uppercase;
color: #4A56E2;
`
;

export const ModalButtonClose = styled.button`
position: absolute;
        top: 20px;
        right: 20px;
        width: 32px;
        height: 32px;
        border: none;
        // background-color: #fff;
        outline: blue;
        padding: 0;
        cursor: pointer;

        &:hover {
          background-color: red;
        }
`
;
