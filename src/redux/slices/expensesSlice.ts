import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { expensesMock } from '../../common/mocks';
import { createSelector } from '../../common/utils';

export interface Expense {
  id: string;
  amount: number;
  date: string;
  recipient: string;
}

export type Expenses = Expense[];

const initialState: Expenses = expensesMock;

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpenses(state: Expenses, action: PayloadAction<Expense>) {
      state.push(action.payload);
    },
    deleteExpenses(state: Expenses, action: PayloadAction<Expense>) {
      const { id: deletingId } = action.payload;

      state = state.filter(({ id }) => id !== deletingId);
    },
  },
});

export const getExpenses = createSelector('expenses');
export const { addExpenses } = expensesSlice.actions;
export default expensesSlice.reducer;
