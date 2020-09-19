import * as COLORS from "./colors";
export type ThemeType = typeof lightTheme;
export const lightTheme = {
  body: COLORS.WHITE0,
  text: COLORS.BLACK1,
  toggleBorder: COLORS.WHITE0,
  toggleBackground: COLORS.BLACK1,
  background: COLORS.BLACK1,
};
export const darkTheme = {
  body: COLORS.BLACK1,
  text: COLORS.WHITE1,
  toggleBorder: COLORS.BLACK1,
  toggleBackground: COLORS.WHITE1,
  background: COLORS.BLACK0,
};
