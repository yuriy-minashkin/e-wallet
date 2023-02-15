import { Button } from '@mui/material';
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
import * as React from 'react';

// import TextField from '@mui/material/TextField';
// // import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// // import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export const ModalAddTransaction = () => {
  const [transactionDate, setTransactionDate] = useState('');
  const [type, setType] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [comment, setComment] = useState('');
  const [amount, setAmount] = useState('');

//   const [value, setValue] = useState(null);

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

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    <>
      <Button onClick={handleOpen}>Open modal</Button>
      <Overlay onClick={handleClose}>
        <Modal open={open}>
        <ModalButtonClose type="button" onClick={handleClose}>
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

            {/* <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      renderDayContents={renderDayContents} */}
   
    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}

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
              <ModalButtonCancel>Cancel</ModalButtonCancel>
            </ModalButtonWrap>
          </ModalForm>
        </Modal>
      </Overlay>
    </>
  );
};
