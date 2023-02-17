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

// import { TextField } from '@mui/material';

import { IoCloseOutline } from "react-icons/io5";

import { IconContext } from "react-icons";
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
const xxx= () => {
if (!checked) {
  const currentCategorie = categories.find(cat => cat.name === categoryId);
  return currentCategorie 
} else {
  return categories[0].id
}
}

    // const currentCategorie = categories.find(cat => cat.name === categoryId);
    const obj = {
      transactionDate,
      type: !checked ? 'INCOME' : 'EXPENSE',
      categoryId: !checked ? categories[10].id : xxx(),
      comment,
      amount: !checked ? Number(amount) : -Number(amount),
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

  const onClose = evt => {
    if (evt.code === 'Escape' || evt.currentTarget === evt.target || evt.target.nodeName === 'svg') {
      dispatch(closeModalAddTransaction());
    }
  }

  window.addEventListener('keydown', onClose);

const categoriesFilter = categories.filter(cat => cat.name !== "Income")


  return (
    <Overlay onClick={onClose}>
      <Modal>
        <ModalButtonClose
          type="button"
          onClick={onClose}
        >

          <IconContext.Provider value={{ size: "3em"}}>
          <h3> <IoCloseOutline /> </h3>
          </IconContext.Provider>
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
                categoriesFilter.map(({ id, name }) => {

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
              onClick={onClose}
            >
              Cancel
            </ModalButtonCancel>
          </ModalButtonWrap>
        </ModalForm>
      </Modal>
    </Overlay>
  );
};
