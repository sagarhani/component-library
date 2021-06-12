import { DefaultTheme } from "styled-components";
import { COLORS } from "./colors";
import { SIZES } from "./sizes";
import { RADII } from "./radii";
import { SPACES } from "./spaces";

export const theme = { COLORS, SIZES, RADII, SPACES };

declare module "styled-components" {
  export interface DefaultTheme extends ThemeObjType {}
}

type ThemeObjType = typeof theme;
