import { useState } from 'react';
import {
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
  CheckboxLabel,
  LabelTextExpense,
  ModalInputWrap,
} from '../ModalAddTransaction/ModalAddTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import 'react-datetime/css/react-datetime.css';
import { IoCloseOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { closeModalUpDateTransaction } from 'redux/global/globalSlice';
import { upDateTransaction } from 'redux/transaction/transactionOperations';
import { selectErrorTransactions } from 'redux/transaction/transactionSelectors';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const UpDateModal = ({ trans, close }) => {
  const findcategorie = useSelector(selectCategories);
  const [categoryId, setCategoryId] = useState(trans.categoryId);
  const [amount, setAmount] = useState(Math.abs(trans.amount));
  const [transactionDate, setTransactionDate] = useState(trans.transactionDate);
  const [comment, setComment] = useState(trans.comment);
  const [, setType] = useState(trans.type);
  const [checked, setChecked] = useState(
    trans.type === 'INCOME' ? false : true
  );

  const findcategoryId = name => {
    const CategoryId = findcategorie.find(tran => tran.name === name);
    setCategoryId(CategoryId.id);
  };

  const error = useSelector(selectErrorTransactions);
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  console.log('error in update modal', error);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newObject = {
      transactionDate,
      type: !checked ? 'INCOME' : 'EXPENSE',
      categoryId: !checked ? categories[10].id : categoryId,
      comment,
      amount: !checked ? Number(amount) : -Number(Math.abs(amount)),
    };

    dispatch(
      upDateTransaction({ transactionId: trans.id, dataInfo: newObject })
    );
     if (error) {
       toast.error('Oops...something went wrong, try again!');
     }
    setTransactionDate('');
    setType('');
    setCategoryId('');
    setComment('');
    setAmount('');
  };

  const handleChange = evt => {
    const { value, name } = evt.target;
    if (name === 'categoryId') {
      findcategoryId(value);
    } else if (name === 'amount') {
      setAmount(value);
    } else if (name === 'comment') {
      setComment(value);
    }
  };

  const onClose = evt => {
    if (
      evt.code === 'Escape' ||
      evt.currentTarget === evt.target ||
      evt.target.nodeName === 'svg'
    ) {
      dispatch(closeModalUpDateTransaction());
      close(null);
    }
  };

  window.addEventListener('keydown', onClose);

  const onChange = e => {
    setChecked(e.target.checked);
  };

  const categoriesFilter = categories.filter(cat => cat.name !== 'Income');
  const xxx = [...categoriesFilter].sort(function (x, y) {
    return x.id === categoryId ? -1 : y.id === categoryId ? 1 : 0;
  });
  return (
    <>
      <Overlay onClick={onClose}>
        <Modal>
          <ModalButtonClose type="button" onClick={onClose}>
            <IconContext.Provider value={{ size: '3em' }}>
              <h3>
                {' '}
                <IoCloseOutline />{' '}
              </h3>
            </IconContext.Provider>
          </ModalButtonClose>
          <ModalForm onSubmit={handleSubmit}>
            <ToastContainer />
            <ModalTitle> Update transaction</ModalTitle>
            <Input
              onChange={onChange}
              checked={checked}
              type="checkbox"
              name="size"
              disabled
              // name="topic"
              id="topic-1"
            />
            <ModalWrap>
              <LabelText checked={checked}>Income</LabelText>
              <CheckboxLabel
                htmlFor="topic-1"
                checked={checked}
              ></CheckboxLabel>
              <LabelTextExpense checked={checked}>Expense</LabelTextExpense>
            </ModalWrap>

            {checked && (
              <SelectLabel
                name="size"
                disabled
                // name="categoryId"
                onChange={handleChange}
                value={categoryId}
              >
                {categories &&
                  xxx.map(({ id, name }) => {
                    return (
                      <option key={id} id={id}>
                        {name}
                      </option>
                    );
                  })}
              </SelectLabel>
            )}

            <ModalInputWrap>
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
            </ModalInputWrap>
            <InputLabelText
              value={comment}
              onChange={handleChange}
              name="comment"
              placeholder="Comment"
            />

            <ModalButtonWrap>
              <ModalButtonAdd type="submit">upDate</ModalButtonAdd>
              <ModalButtonCancel type="button" onClick={onClose}>
                Cancel
              </ModalButtonCancel>
            </ModalButtonWrap>
          </ModalForm>
        </Modal>
      </Overlay>
    </>
  );
};
