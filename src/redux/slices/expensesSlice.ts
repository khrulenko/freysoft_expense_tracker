import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { expensesMock } from '../../common/mocks';
import { createSelector } from '../../common/utils';

export interface Expense {
  id: string;
  amount: string;
  date: string;
  recipient: string;
}

export type Expenses = Expense[];

const initialState: Expenses = expensesMock;

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpenses(state: Expenses, action: PayloadAction<Expenses>) {
      state.push(...action.payload);
    },
    deleteExpense(state: Expenses, action: PayloadAction<string>) {
      const deletingId = action.payload;

      return state.filter(({ id }) => id !== deletingId);
    },
  },
});

export const getExpenses = createSelector('expenses');
export const { addExpenses, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
