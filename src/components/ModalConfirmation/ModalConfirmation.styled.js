import styled from 'styled-components';

export const ModalContainer = styled.div`
  max-width: 540px;
  width: 100%;
  /* height: 580px; */
  padding: 40px;
  background-color: #ffffff;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* gap: 40px; */
  position: relative;
  z-index: 1200;
`;

export const ModalConfirmationTitle = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  margin-bottom: 16px;
  color: #000000;
`;

export const ModalConfirmationText = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 42px;
  color: #000000;
`;

export const ModalButtonWrapper = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
`;

export const ModalButtonYes = styled.button`
  /* width: 200px; */
  padding: 10px 20px;
  border: none;
  background-color: #24cca7;
  border-radius: 16px;
  color: #ffffff;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const ModalBtnCancel = styled.button`
  
  padding: 10px 55px;
  border: none;
  background-color: #ffffff;
  border: 1px solid #4a56e2;
  border-radius: 20px;

  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #4a56e2;
`;