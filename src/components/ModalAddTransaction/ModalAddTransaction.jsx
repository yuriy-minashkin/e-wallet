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
// import { nanoid } from 'nanoid';
import { fetchCategories } from 'redux/categories/categoriesOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { useEffect } from 'react';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  const [transactionDate, setTransactionDate] = useState('');
  const [type, setType] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

//   console.log(categories);

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
      type: 'INCOME',
      categoryId,
      comment,
      amount: Number(amount),
    };
    console.log(obj);
    dispatch(addTransaction(obj));
    reset();
  };
  //   {
  //   "transactionDate": "string",/
  //   "type": "INCOME",/
  //   "categoryId": "string",/
  //   "comment": "string",/
  //   "amount": 0/
  // }

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
