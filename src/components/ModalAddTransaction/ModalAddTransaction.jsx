import { useState } from 'react';
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
  Input,
  LabelText,
  LabelTextExpense,
} from './ModalAddTransaction.styled';
import { useDispatch } from 'react-redux';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
import { addTransaction } from 'redux/transaction/transactionOperations';
// import Datetime from 'react-datetime';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();

  const [transactionDate, setTransactionDate] = useState('');
  const [type, setType] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState('');

  const [checked, setChecked] = useState(false)

  const onChange = (e) => {
    console.log(e.target.checked);
    
    setChecked(e.target.checked);
  }

  const handleChange = evt => {
    const { value, name } = evt.target;
    if (name === 'categoryId') {
      setCategoryId(value);
    } else if (name === 'amount') {
      setAmount(value);
    } else if (name === 'transactionDate') {
      setTransactionDate(value);
    } else if (name === 'comment') {
      setComment(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const obj = {
      transactionDate,
      type,
      categoryId,
      comment,
      amount,
    };
    console.log(obj);
    dispatch(addTransaction(obj));
    reset();
  };

  const reset = () => {
    setTransactionDate('');
    setType('');
    setCategoryId('');
    setComment('');
    setAmount('');
  };

  return (
    <Overlay >
      <Modal>
        <ModalButtonClose
          type="button"
          onClick={() => dispatch(closeModalAddTransaction())}
        >
          {/* <svg width="18px" height="18px" >
            <use href="${icons}#icon-vector-off"></use>
        </svg> */}
        </ModalButtonClose>
        <ModalForm onSubmit={handleSubmit}>
          <ModalTitle> Add transaction</ModalTitle>
          
          <Input  
          onChange={onChange}
          checked={checked}
          
          type="checkbox" name="topic" id="topic-1" /> 

          <ModalWrap>
            <LabelText checked={checked} >Income</LabelText>
            <CheckboxLabel htmlFor="topic-1"
           
            checked={checked} 
            ></CheckboxLabel>
            <LabelTextExpense checked={checked}>Expense</LabelTextExpense>
          </ModalWrap>



          <SelectLabel
            name="categoryId"
            onChange={handleChange}
            value={categoryId}
          >
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>May</option>
          </SelectLabel>

          <ModalWrap>
            <InputLabel
              value={amount}
              onChange={handleChange}
              type="text"
              name="amount"
              placeholder="0.00"
            />
            <InputLabel
              value={transactionDate}
              onChange={handleChange}
              type="text"
              name="transactionDate"
              placeholder="15.02.2023"
            />
          </ModalWrap>
          <InputLabelText
            value={comment}
            onChange={handleChange}
            name="comment"
            placeholder="Comment"
          />

          <ModalButtonWrap>
            <ModalButtonAdd type="submit">Add</ModalButtonAdd>
            <ModalButtonCancel type="button"
          onClick={() => dispatch(closeModalAddTransaction())}>Cancel</ModalButtonCancel>
          </ModalButtonWrap>
        </ModalForm>
      </Modal>
    </Overlay>
  );
};
