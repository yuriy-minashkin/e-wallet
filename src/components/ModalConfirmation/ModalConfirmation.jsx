import { ModalButtonClose,  Overlay } from "components/ModalAddTransaction/ModalAddTransaction.styled";
import { IconContext } from "react-icons";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeModalAddTransaction } from "redux/global/globalSlice";
// import { deleteTransaction } from "redux/transaction/transactionOperations";
import { ModalBtnCancel, ModalButtonWrapper, ModalButtonYes, ModalConfirmationText, ModalConfirmationTitle, ModalContainer } from "./ModalConfirmation.styled";

export const ModalConfirmation = ()=> {
  const dispatch = useDispatch();

  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target) {
      dispatch(closeModalAddTransaction());
    }
  }

  window.addEventListener('keydown', onClose);

    return (
      <>
      <Overlay onClick={onClose}>
        <ModalContainer>
        <ModalButtonClose
          type="button"
          onClick={() => dispatch(closeModalAddTransaction())}
        >
          <IconContext.Provider value={{ size: "3em"}}>
          <h3> <IoCloseOutline /> </h3>
          </IconContext.Provider>
        </ModalButtonClose>

            <ModalConfirmationTitle>Confirmation</ModalConfirmationTitle>
            <ModalConfirmationText>Are you sure you want to delete this transaction? 
              This actions cannot be undone and you will be unable to recover any data.</ModalConfirmationText>
  
            <ModalButtonWrapper>
              <ModalBtnCancel type="button" onClick={() => dispatch(closeModalAddTransaction())}>Cancel</ModalBtnCancel>
              <ModalButtonYes type="button" 
              // onClick={() => dispatch(deleteTransaction(id))} 
              >
                Yes, delete it!</ModalButtonYes>
            </ModalButtonWrapper>
        </ModalContainer>

      </Overlay>
      </>
    );
  };
  