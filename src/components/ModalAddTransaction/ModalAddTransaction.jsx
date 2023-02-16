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
} from './ModalAddTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
import { addTransaction } from 'redux/transaction/transactionOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';

export const ModalAddTransaction = ()=> {
  
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const currentDate = new Date(Date.now());

  const [transactionDate, setTransactionDate] = useState(currentDate);
  const [, setType] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState('');

  // console.log('transactionDate', currentDate);

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

    const date = new Date(
      transactionDate.toString().replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')
    );

    const obj = {
      transactionDate: date,
      type: 'INCOME',
      categoryId: categories[10].id,
      comment,
      amount: Number(amount),
    };
    // console.log(obj);
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
    <Overlay>
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
          {/* <input  type="checkbox" name="topic" id="topic-1" /> */}

          <ModalWrap>
            <p>Income</p>
            <CheckboxLabel htmlFor="topic-1"></CheckboxLabel>
            <p>Expense</p>
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
              placeholder="please enter the date"
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
            <ModalButtonCancel
              type="button"
              onClick={() => dispatch(closeModalAddTransaction())}
            >
              Cancel
            </ModalButtonCancel>
          </ModalButtonWrap>
        </ModalForm>
      </Modal>
    </Overlay>
  );
};
