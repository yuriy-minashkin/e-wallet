import { useState } from 'react';
import {
  // CheckboxLabel,
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
  // SelectLabel,
  ModalButtonClose,
  LabelText,
  CheckboxLabel,
  LabelTextExpense,
  Input,
  // LabelText,
  // LabelTextExpense,
} from '../ModalAddTransaction/ModalAddTransaction.styled';
import { useDispatch  } from 'react-redux';
// import { closeModalAddTransaction } from 'redux/global/globalSlice';
// import { addTransaction } from 'redux/transaction/transactionOperations';
// import { selectCategories } from 'redux/categories/categoriesSelectors';
// import { useEffect } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
// import moment from 'moment';
// import { TextField } from '@mui/material';
import { IoCloseOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';


import { closeModalUpDateTransaction } from 'redux/global/globalSlice';
import { upDateTransaction } from 'redux/transaction/transactionOperations';

// import { ModalButtonCancel } from 'components/ModalAddTransaction/ModalAddTransaction.styled';

export const UpDateModal = props => {
  // console.log('props in modalka', props.trans);
  const [categoryId, setCategoryId] = useState(props.trans.id);
  const [amount, setAmount] = useState(props.trans.amount);
  const [transactionDate, setTransactionDate] = useState(props.trans.transactionDate);
  const [comment, setComment] = useState(props.trans.comment);
  const [type, setType] = useState(props.trans.type);
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const newObject = {
      transactionDate,
      type,
      categoryId,
      comment,
      amount: Number(amount),
    };
    // console.log(newObject);
    dispatch(upDateTransaction(newObject));
    reset();
  };

  const reset = () => {
    setTransactionDate('');
    setType('');
    setCategoryId('');
    setComment('');
    setAmount('');
  };

  const handleChange = evt => {
    console.log(evt.target);
    const { value, name } = evt.target;
    if (name === 'amount') {
      setAmount(value);
    } else if (name === 'comment') {
      setComment(value);
    }
  };

  const onChange = e => {
    setChecked(e.target.checked);
  };

  const onClose = evt => {
    // console.log(evt.target.nodeName)
    if (evt.code === 'Escape' || evt.currentTarget === evt.target || evt.target.nodeName === 'svg') {
      dispatch(closeModalUpDateTransaction());
    }
  }

  window.addEventListener('keydown', onClose);

  return (
    <>
      <Overlay onClick={onClose}>
        <Modal>
          <ModalButtonClose
            type="button"
            onClick={onClose}
            name="button"
          >
            <IconContext.Provider value={{ size: '3em' }} name="button">
              <h3>
                {' '}
                <IoCloseOutline />{' '}
              </h3>
            </IconContext.Provider>
          </ModalButtonClose>
          <ModalForm onSubmit={handleSubmit}>
            <ModalTitle> Update transaction</ModalTitle>
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

            {/* <InputLabelText
              name="categoryId"
              onChange={handleChange}
              value={categoryId}
            /> */}

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
                name="amount"
                disabled
              />
              {/* <Datetime
                timeFormat={false}
                name={transactionDate}
                value={transactionDate}
                renderInput={params => <InputLabel {...params} />}
              /> */}
            </ModalWrap>
            <InputLabelText
              value={comment}
              onChange={handleChange}
              name="comment"
              placeholder="Comment"
            />

            <ModalButtonWrap>
              <ModalButtonAdd type="submit">upDate</ModalButtonAdd>
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
    </>
  );
};
