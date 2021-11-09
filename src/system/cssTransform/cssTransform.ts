import { Theme } from '@emotion/react';
import { GlobalTheme } from '@/UI';
import { strToObj } from '@/utils';

// BASED ON STYLED-SYSTEM

export type SystemProp = Record<string, string | boolean>;

const aliases: Record<string, string> = {
  bg: 'backgroundColor',
  m: 'margin',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mx: 'marginX',
  my: 'marginY',
  p: 'padding',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  px: 'paddingX',
  py: 'paddingY',
};

const multiples: Record<string, string[]> = {
  marginX: ['marginLeft', 'marginRight'],
  marginY: ['marginTop', 'marginBottom'],
  paddingX: ['paddingLeft', 'paddingRight'],
  paddingY: ['paddingTop', 'paddingBottom'],
};

export const space: SystemProp = {
  margin: 'space',
  marginTop: 'space',
  marginRight: 'space',
  marginBottom: 'space',
  marginLeft: 'space',
  marginX: 'space',
  marginY: 'space',
  padding: 'space',
  paddingTop: 'space',
  paddingRight: 'space',
  paddingBottom: 'space',
  paddingLeft: 'space',
  paddingX: 'space',
  paddingY: 'space',
};

export const color: SystemProp = {
  color: 'colors',
  backgroundColor: 'colors',
  opacity: true,
};

export const typography: SystemProp = {
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  textAlign: true,
  fontStyle: true,
};

export const layout: SystemProp = {
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  height: 'sizes',
  minHeight: 'sizes',
  maxHeight: 'sizes',
  display: true,
  verticalAlign: true,
  overflow: true,
  overflowX: true,
  overflowY: true,
};

export const flexbox: SystemProp = {
  flexBasis: 'sizes',
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  justifySelf: true,
  alignSelf: true,
  order: true,
};

export const grid: SystemProp = {
  gridGap: 'space',
  gridColumnGap: 'space',
  gridRowGap: 'space',
  columnGap: 'space',
  rowGap: 'space',
  gap: 'space',
  gridColumn: true,
  gridRow: true,
  gridArea: true,
  gridAutoFlow: true,
  gridAutoRows: true,
  gridAutoColumns: true,
  gridTemplateRows: true,
  gridTemplateColumns: true,
  gridTemplateAreas: true,
};

export const background: SystemProp = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
};

export const border: SystemProp = {
  border: 'borders',
  borderTop: 'borders',
  borderRight: 'borders',
  borderBottom: 'borders',
  borderLeft: 'borders',
  borderWidth: 'borderWidths',
  borderStyle: 'borderStyles',
  borderRadius: 'radii',
  borderTopRightRadius: 'radii',
  borderTopLeftRadius: 'radii',
  borderBottomRightRadius: 'radii',
  borderBottomLeftRadius: 'radii',
  borderTopWidth: 'borderWidths',
  borderTopColor: 'colors',
  borderTopStyle: 'borderStyles',
  borderBottomWidth: 'borderWidths',
  borderBottomColor: 'colors',
  borderBottomStyle: 'borderStyles',
  borderLeftWidth: 'borderWidths',
  borderLeftColor: 'colors',
  borderLeftStyle: 'borderStyles',
  borderRightWidth: 'borderWidths',
  borderRightColor: 'colors',
  borderRightStyle: 'borderStyles',
  borderColor: 'colors',
};

export const position: SystemProp = {
  position: true,
  zIndex: 'zIndices',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
};

export const shadow: SystemProp = {
  boxShadow: 'shadows',
  textShadow: 'shadows',
};

export const svg: SystemProp = {
  fill: 'colors',
  stroke: 'colors',
};

const scales: SystemProp = {
  ...space,
  ...color,
  ...typography,
  ...layout,
  ...flexbox,
  ...grid,
  ...background,
  ...border,
  ...position,
  ...shadow,
  ...svg,
};

const cssTransform = (
  prop: string,
  value: string | number,
): string | Record<string, any> => {
  if (Object.prototype.hasOwnProperty.call(aliases, prop)) {
    return cssTransform(aliases[prop], value);
  }

  if (Object.prototype.hasOwnProperty.call(multiples, prop)) {
    let cssObj = {};

    // using index position 0's theme type as the keys of each theme property in GlobalTheme are not equal
    const cachedThemeVar = strToObj(
      value.toString(),
      GlobalTheme[scales[multiples[prop][0]] as keyof Theme],
      true,
    );

    for (let i = 0; i < multiples[prop].length; i += 1) {
      cssObj = {
        ...cssObj,
        [multiples[prop][i]]: cachedThemeVar ?? value.toString(),
      };
    }
    return cssObj;
  }

  return {
    [prop]:
      strToObj(
        value.toString(),
        GlobalTheme[scales[prop] as keyof Theme],
        true,
      ) ?? value.toString(),
  };
};

export default cssTransform;
