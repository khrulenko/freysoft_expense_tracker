import { ChangeEvent } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { State } from '../redux/store';
import {
  URL_CALENDAR,
  URL_EXPENSES,
  URL_HOME,
  URL_NEW,
  URL_SETTINGS,
} from '../routes/URLs';
import { AnyFunction, DatesOfWeek } from './types';

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

const getDateStringFromISO = (date: string): string =>
  dayjs(date).format('ddd, DD MMMM YYYY');

const handleChange =
  (action: AnyFunction) =>
  ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    action(value);
  };

const getDatesOfWeek = (startOfWeek: Dayjs): DatesOfWeek => {
  const dates: DatesOfWeek = [];

  for (let index = 0; index < 7; index++) {
    const dayOfWeek = startOfWeek.add(index, 'day');
    const dayLetter = dayOfWeek.format('dd').at(0);
    const date = dayOfWeek.format('D');

    if (dayLetter && date) {
      dates.push([dayLetter, date]);
    }
  }

  return dates;
};

export {
  createSelector,
  getHeaderByUrl,
  getDateStringFromISO,
  handleChange,
  getDatesOfWeek,
};
