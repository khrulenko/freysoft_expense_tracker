import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../ui/layouts/MainLayout';
import ExpensesPage from '../ui/pages/ExpensesPage';
import HomePage from '../ui/pages/HomePage';
import { URL_EXPENSES, URL_HOME } from './URLs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={URL_HOME} />} />
        <Route path={URL_HOME} element={<HomePage />} />
        <Route path={URL_EXPENSES} element={<ExpensesPage />} />

        <Route
          path="*"
          element={<div>Page not found, try something else</div>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
