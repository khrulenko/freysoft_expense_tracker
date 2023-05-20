import { State } from '../redux/store';
import {
  URL_CALENDAR,
  URL_EXPENSES,
  URL_HOME,
  URL_NEW,
  URL_SETTINGS,
} from '../routes/URLs';

const createSelector =
  <K extends keyof State>(dataField: K) =>
  (state: State) =>
    state[dataField];

const getHeaderByUrl = (url: string): string => {
  const pagesHeaders = {
    [URL_HOME]: 'Home',
    [URL_EXPENSES]: 'Expenses',
    [URL_NEW]: 'New',
    [URL_CALENDAR]: 'Calendar',
    [URL_SETTINGS]: 'Settings',
  };

  return pagesHeaders[url];
};

const getDateFromISO = (date: string) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.toLocaleString('en-US', { month: 'long' });
  const day = dateObj.toLocaleString('en-US', { day: '2-digit' });
  const weekday = dateObj.toLocaleString('en-US', { weekday: 'short' });

  return `${weekday}, ${day} ${month} ${year}`;
};

export { createSelector, getHeaderByUrl, getDateFromISO };
