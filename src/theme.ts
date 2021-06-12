import { colors } from './tokens/colors';
import { RADII } from './tokens/radii';
import { space } from './tokens/spaces';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeObjType {}
}

export const theme = { colors, space, RADII };

type ThemeObjType = typeof theme;
