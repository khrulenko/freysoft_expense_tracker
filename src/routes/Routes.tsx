import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../ui/layouts/MainLayout';
import CalendarPage from '../ui/pages/CalendarPage';
import ExpensesPage from '../ui/pages/ExpensesPage';
import HomePage from '../ui/pages/HomePage';
import NewPage from '../ui/pages/NewPage';
import SettingsPage from '../ui/pages/SettingsPage';
import {
  URL_CALENDAR,
  URL_EXPENSES,
  URL_HOME,
  URL_NEW,
  URL_SETTINGS,
} from './URLs';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout />}>
        <Route index element={<Navigate to={URL_HOME} />} />
        <Route path={URL_HOME} element={<HomePage />} />

        <Route path={URL_EXPENSES} element={<ExpensesPage />} />
        <Route path={URL_NEW} element={<NewPage />} />
        <Route path={URL_CALENDAR} element={<CalendarPage />} />
        <Route path={URL_SETTINGS} element={<SettingsPage />} />

        <Route
          path="*"
          element={<div>Page not found, try something else</div>}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
