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
import { IoCloseOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { fetchCategories } from 'redux/categories/categoriesOperations';


export const ModalAddTransaction = ()=> {
  
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

  // console.log(categories);

  const [checked, setChecked] = useState(false);

  const onChange = e => {
    setChecked(e.target.checked);
  };


  const handleChange = evt => {
    console.log(evt.target);
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

          <SelectLabel
            name="categoryId"
            onChange={handleChange}
            value={categoryId}
          >
            {categories &&
              categories.map(category => {
                return <option key={category.id} id={category.id}>{category.name}</option>;
              })}
          </SelectLabel>

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
