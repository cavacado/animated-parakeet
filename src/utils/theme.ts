import * as COLORS from "./colors";
export type ThemeType = typeof lightTheme;
export const lightTheme = {
  body: COLORS.WHITE0,
  text: COLORS.BLACK1,
  toggleBorder: COLORS.WHITE0,
  toggleBackground: COLORS.BLACK1,
  productBorder: COLORS.BLACK1,
  demarker: COLORS.BLACK1,
  background: COLORS.BLACK1,
  mastHead: `linear-gradient(
    30deg,
    ${COLORS.PURPLE1} 0%,
    ${COLORS.PURPLE0} 100%
  )
  ${COLORS.PURPLE1}`,
  imageFilter: `invert(0)`,
};
export const darkTheme = {
  body: COLORS.BLACK1,
  text: COLORS.WHITE1,
  toggleBorder: COLORS.BLACK1,
  toggleBackground: COLORS.WHITE1,
  productBorder: COLORS.WHITE1,
  demarker: COLORS.WHITE1,
  background: COLORS.BLACK0,
  mastHead: `linear-gradient(
    30deg,
    ${COLORS.PURPLE0} 0%,
    ${COLORS.PURPLE1} 100%
  )
  ${COLORS.PURPLE0}`,
  imageFilter: `invert(0.80)`,
};
