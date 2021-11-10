import { Theme } from '@emotion/react';
import { GlobalTheme } from '@/UI';
import { strToObj, shallowFlatten } from '@/utils';

// BASED ON STYLED-SYSTEM

export type ComposeSystemProp<T> = Record<
  keyof T,
  string | Partial<Record<keyof Theme['breakpoints'], string>>
>;

type InternalSystemProp = Record<string, string | boolean>;

export const aliases: Record<string, Record<string, string>> = {
  color: {
    bg: 'backgroundColor',
  },
  space: {
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
  },
};

const flattenedAliases = shallowFlatten(aliases);

export const multiples: Record<string, Record<string, string[]>> = {
  space: {
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  },
};

const flattenedMultiples = shallowFlatten(multiples);

export const space: InternalSystemProp = {
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

export const color: InternalSystemProp = {
  color: 'colors',
  backgroundColor: 'colors',
  opacity: true,
};

export const typography: InternalSystemProp = {
  fontFamily: 'fonts',
  fontSize: 'fontSizes',
  fontWeight: 'fontWeights',
  lineHeight: 'lineHeights',
  letterSpacing: 'letterSpacings',
  textAlign: true,
  fontStyle: true,
};

export const layout: InternalSystemProp = {
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

export const flexbox: InternalSystemProp = {
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

export const grid: InternalSystemProp = {
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

export const background: InternalSystemProp = {
  background: true,
  backgroundImage: true,
  backgroundSize: true,
  backgroundPosition: true,
  backgroundRepeat: true,
};

export const border: InternalSystemProp = {
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

export const position: InternalSystemProp = {
  position: true,
  zIndex: 'zIndices',
  top: 'space',
  right: 'space',
  bottom: 'space',
  left: 'space',
};

export const shadow: InternalSystemProp = {
  boxShadow: 'shadows',
  textShadow: 'shadows',
};

export const svg: InternalSystemProp = {
  fill: 'colors',
  stroke: 'colors',
};

const scales: InternalSystemProp = {
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
  if (Object.prototype.hasOwnProperty.call(flattenedAliases, prop)) {
    return cssTransform(flattenedAliases[prop], value);
  }

  if (Object.prototype.hasOwnProperty.call(flattenedMultiples, prop)) {
    let cssObj = {};

    // using index position 0's theme type as the keys of each theme property in GlobalTheme are not equal
    const cachedThemeVar = strToObj(
      value.toString(),
      GlobalTheme[scales[flattenedMultiples[prop][0]] as keyof Theme],
      true,
    );

    for (let i = 0; i < flattenedMultiples[prop].length; i += 1) {
      cssObj = {
        ...cssObj,
        [flattenedMultiples[prop][i]]: cachedThemeVar ?? value.toString(),
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
