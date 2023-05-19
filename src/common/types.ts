import { CSSObject, Theme } from '@mui/material';

export type OwnerStateWithTheme<T> = { theme: Theme } & { ownerState: T };
export type StyleFunction<T> = (
  themeAndProps: { theme: Theme } & T
) => CSSObject;
