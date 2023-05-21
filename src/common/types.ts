import { CSSObject, Theme } from '@mui/material';

export type AnyFunction = (...args: any[]) => any;
export type OwnerStateWithTheme<T> = { theme: Theme } & { ownerState: T };
export type StyleFunction<T> = (
  themeAndProps: { theme: Theme } & T
) => CSSObject;
export type DatesOfWeek = [string, string][];
