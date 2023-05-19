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

export { createSelector, getHeaderByUrl };
