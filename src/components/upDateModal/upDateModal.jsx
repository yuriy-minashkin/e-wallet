
import {
  CheckboxLabel,
  InputLabel,
  Modal,
  ModalButtonCancel,
  ModalButtonAdd,
  ModalButtonWrap,
  ModalForm,
  ModalWrap,
  Overlay,
  InputLabelText,
  ModalTitle,
  SelectLabel,
  ModalButtonClose,
} from 'components/ModalAddTransaction/ModalAddTransaction.styled';
import { useDispatch } from 'react-redux';
import { closeModalUpDateTransaction } from 'redux/global/globalSlice';
import { upDateTransaction } from 'redux/transaction/transactionOperations';
// import { ModalButtonCancel } from 'components/ModalAddTransaction/ModalAddTransaction.styled';

export const UpDateModal = (props) => {
console.log('props in modalka', props.trans);

     const dispatch = useDispatch();
       const handleSubmit = evt => {
         evt.preventDefault();

       
         // console.log(date);
         const obj = {
          
         };
         console.log(obj);
         dispatch(upDateTransaction(obj));
        
       };

 

  return (
    <>
      <Overlay>
        <Modal>
          <ModalButtonClose
            type="button"
            onClick={() => dispatch(closeModalUpDateTransaction())}
          >
            {/* <svg width="18px" height="18px" >
            <use href="${icons}#icon-vector-off"></use>
        </svg> */}
          </ModalButtonClose>
          <ModalForm onSubmit={handleSubmit}>
            <ModalTitle> Update transaction</ModalTitle>
            {/* <input  type="checkbox" name="topic" id="topic-1" /> */}

            <ModalWrap>
              <p>Income</p>
              <CheckboxLabel htmlFor="topic-1"></CheckboxLabel>
              <p>Expense</p>
            </ModalWrap>
            <SelectLabel
              name="categoryId"
              // onChange={handleChange}
              // value={categoryId}
            >
              <option>January</option>
              <option>February</option>
              <option>March</option>
              <option>May</option>
            </SelectLabel>

            <ModalWrap>
              <InputLabel
              //   value={amount}
              //   onChange={handleChange}
              //   type="text"
              //   name="amount"
              //   placeholder="0.00"
              />
              <InputLabel
              //   value={transactionDate}
              //   onChange={handleChange}
              //   type="text"
              //   name="transactionDate"
              //   placeholder="please enter the date"
              />
            </ModalWrap>
            <InputLabelText
            // value={comment}
            // onChange={handleChange}
            // name="comment"
            // placeholder="Comment"
            />

            <ModalButtonWrap>
              <ModalButtonAdd type="submit">upDate</ModalButtonAdd>
              <ModalButtonCancel
                type="button"
                onClick={() => dispatch(closeModalUpDateTransaction())}
              >
                Cancel
              </ModalButtonCancel>
            </ModalButtonWrap>
          </ModalForm>
        </Modal>
      </Overlay>
    </>
  );
};
