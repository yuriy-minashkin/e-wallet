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
  // Input,
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
  const [categoryId] = useState(props.trans.id);
  const [amount, setAmount] = useState(props.trans.amount);
  const [transactionDate] = useState(props.trans.transactionDate);
  const [comment, setComment] = useState(props.trans.comment);
  const [type] = useState(props.trans.type);

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

  return (
    <>
      <Overlay>
        <Modal>
          <ModalButtonClose
            type="button"
            onClick={() => dispatch(closeModalUpDateTransaction())}
          >
            <IconContext.Provider value={{ size: '3em' }}>
              <h3>
                {' '}
                <IoCloseOutline />{' '}
              </h3>
            </IconContext.Provider>
          </ModalButtonClose>
          <ModalForm onSubmit={handleSubmit}>
            <ModalTitle> Update transaction</ModalTitle>
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
              <Datetime
                timeFormat={false}
                name={transactionDate}
                value={transactionDate}
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
