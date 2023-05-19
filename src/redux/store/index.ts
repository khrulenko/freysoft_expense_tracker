import { configureStore } from '@reduxjs/toolkit';
import expensesSliceReducer, { Expenses } from '../slices/expensesSlice';

export interface State {
  expenses: Expenses;
}

// redusers
export const reducers = {
  expenses: expensesSliceReducer,
};

// store
export const store = configureStore({
  reducer: reducers,
});

export default store;
