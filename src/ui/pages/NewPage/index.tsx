import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, TextField, Typography } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CreateIcon from '@mui/icons-material/Create';
import dayjs, { Dayjs } from 'dayjs';
import { nanoid } from 'nanoid';
import { handleChange } from '../../../common/utils';
import PageLayout from '../../layouts/PageLayout';
import { APP_DATE_FORMAT } from '../../../common/constants';
import { addExpenses } from '../../../redux/slices/expensesSlice';

const NewPage = () => {
  const currentDate = dayjs().format(APP_DATE_FORMAT);

  const [amount, setAmount] = useState<string>('');
  const [recipient, setRecipient] = useState<string>('');
  const [date, setDate] = useState<string>(currentDate);
  const dispatch = useDispatch();

  const isDisabled = !amount || !recipient;

  const amountProcessAndSet = (value: string) => {
    const newValue = value.match(/^\d*\.?\d*$/);

    if (newValue) setAmount(newValue[0]);
  };
  const handleAmountChange = handleChange(amountProcessAndSet);
  const handleRecipientChange = handleChange(setRecipient);
  const handleDateChange = (newDate: Dayjs | null) => {
    if (newDate) setDate(newDate.format(APP_DATE_FORMAT));
  };
  const addNewExpense = () => {
    dispatch(addExpenses([{ id: nanoid(), amount, recipient, date }]));

    setAmount('');
    setRecipient('');
    setDate(currentDate);
  };

  return (
    <PageLayout>
      <Typography variant="h5">Crate new expense:</Typography>

      <TextField
        value={amount}
        label="amount"
        type="text"
        id="amount"
        onChange={handleAmountChange}
        InputProps={{
          startAdornment: <AttachMoneyIcon fontSize="small" />,
        }}
      />

      <TextField
        value={recipient}
        label="recipient"
        type="text"
        id="recipient"
        onChange={handleRecipientChange}
        InputProps={{
          startAdornment: <CreateIcon fontSize="small" />,
        }}
      />

      <MobileDatePicker
        value={dayjs(date)}
        label="date"
        onChange={handleDateChange}
      />

      <Button variant="contained" disabled={isDisabled} onClick={addNewExpense}>
        ADD
      </Button>
    </PageLayout>
  );
};

export default NewPage;
