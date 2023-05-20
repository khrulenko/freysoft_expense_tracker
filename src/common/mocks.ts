import { Expenses } from '../redux/slices/expensesSlice';

const expensesMock: Expenses = [
  {
    id: '1',
    amount: '100',
    date: '2022-04-05',
    recipient: 'Nike Super Store',
  },
  {
    id: '2',
    amount: '200',
    date: '2023-02-02',
    recipient: 'Puma Store',
  },
  {
    id: '3',
    amount: '300',
    date: '2023-03-03',
    recipient: 'Clothing Store',
  },
  {
    id: '4',
    amount: '400',
    date: '2023-04-04',
    recipient: 'Electronics Store Best',
  },
  {
    id: '5',
    amount: '500',
    date: '2023-05-05',
    recipient: 'Hardware Store',
  },
  {
    id: '6',
    amount: '600',
    date: '2023-06-06',
    recipient: 'Furniture Store IKEA',
  },
  {
    id: '7',
    amount: '7500',
    date: '2023-07-07',
    recipient: 'Restaurant',
  },
  {
    id: '8',
    amount: '800',
    date: '2023-08-08',
    recipient: 'Book Store',
  },
  {
    id: '9',
    amount: '900',
    date: '2023-09-09',
    recipient: 'Pet Store PetSmart',
  },
  {
    id: '10',
    amount: '1000',
    date: '2023-12-31',
    recipient: 'Toy Store',
  },
];

export { expensesMock };
