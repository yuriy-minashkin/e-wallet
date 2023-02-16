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
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
import { addTransaction } from 'redux/transaction/transactionOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { useEffect } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { TextField } from '@mui/material';
import { IoClose } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { fetchCategories } from 'redux/categories/categoriesOperations';

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const currentDate = new Date(Date.now());

  const [transactionDate, setTransactionDate] = useState(currentDate);
  const [, setType] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [checked, setChecked] = useState(false);

  const onChange = e => {
    setChecked(e.target.checked);
  };

  const handleChange = evt => {
    const { value, name } = evt.target;
    if (name === 'categoryId') {
      setCategoryId(value);
    } else if (name === 'amount') {
      setAmount(value);
    } else if (name === 'comment') {
      setComment(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const date = new Date(
      transactionDate.toString().replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')
    );

    const currentCategorie = categories.find(cat => cat.name === categoryId);
    const obj = {
      transactionDate: date,
      type: !checked ? 'INCOME' : 'EXPENSE',
      categoryId: !checked ? categories[10].id : currentCategorie.id,
      comment,
      amount: !checked ? Number(amount) : -Number(amount),
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
          <IconContext.Provider value={{ width: '16px', height: '16px' }}>
            <h3>
              {' '}
              <IoClose />{' '}
            </h3>
          </IconContext.Provider>
          {/* <svg width="18px" height="18px" >
            <use href="${icons}#icon-vector-off"></use>
        </svg> */}
        </ModalButtonClose>
        <ModalForm onSubmit={handleSubmit}>
          <ModalTitle> Add transaction</ModalTitle>

          <Input
            onChange={onChange}
            checked={checked}
            type="checkbox"
            name="topic"
            id="topic-1"
          />

          <ModalWrap>
            <LabelText checked={checked}>Income</LabelText>
            <CheckboxLabel htmlFor="topic-1" checked={checked}></CheckboxLabel>
            <LabelTextExpense checked={checked}>Expense</LabelTextExpense>
          </ModalWrap>

          {checked && (
            <SelectLabel
              name="categoryId"
              onChange={handleChange}
              value={categoryId}
            >
              {categories &&
                categories.map(({ id, name }) => {
                  return (
                    <option 
                      key={id}
                      id={id}
                    >
                      {name}
                    </option>
                  );
                })}
            </SelectLabel>
          )}

          <ModalWrap>
            <InputLabel
              value={amount}
              onChange={handleChange}
              type="text"
              name="amount"
              placeholder="0.00"
            />
            <Datetime
              timeFormat={false}
              name={transactionDate}
              value={transactionDate}
              onChange={newValue => {
                setTransactionDate(moment(newValue).toISOString());
              }}
              renderInput={params => <InputLabel {...params} />}
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
