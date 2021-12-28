/* @jsxImportSource @emotion/react */
import { Theme } from '@emotion/react';
import { GlobalTheme } from '@/UI';
import { strToObj, shallowFlatten } from '@/utils';

export type ComposeSystemProp<T> = Record<
  keyof T,
  string | number | object | undefined | boolean | null | Array<unknown>
>;

type InternalSystemProp = Record<string, string | boolean | Array<any>>;

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
  wordWrap: true,
  whiteSpace: true,
};

export const layout: InternalSystemProp = {
  width: 'sizes',
  minWidth: 'sizes',
  maxWidth: 'sizes',
  screenMaxWidth: ['maxWidth', 'screenMaxWidths'],
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
  verticalGap: [
    'space',
    (prop: string) => ({
      '& > * + *': {
        marginTop: prop,
      },
    }),
  ],
  horizontalGap: [
    'space',
    (prop: string) => ({
      '& > * + *': {
        marginLeft: prop,
      },
    }),
  ],
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

// scales is an object which contains all system css props and their associated theme pairs
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

/*
 * DESCRIPTION:
 * cssTransform function takes two arguments:
 * 	prop - a camal-cased css property (e.g. marginTop, paddingRight, etc.)
 * 	value - a theme value associated with the prop argument or a regular css value (e.g. sm, 1rem, etc.)
 * */
const cssTransform = (
  prop: string,
  value: string | number,
): string | Record<string, any> => {
  const systemProp = scales[prop];
  /* checks whether the system prop is an array in order to check whether the
   * system prop is a custom css prop (e.g. screenMaxWidth, verticalGap, horizontalGap)
   * or a regular css prop (e.g. width, height, display) */
  if (Array.isArray(systemProp)) {
    /* if secound value in array is a string, then the first value in the array
     * (a regular css prop such as maxWidth or width) is being tied to a custom
     * theme alias in the GlobalTheme object (@/UI) which is the second value in the array */
    if (typeof systemProp[1] === 'string') {
      return {
        [systemProp[0]]:
          /* if the value prop is a key of GlobalTheme[SystemPropAliasKey]
           * then GlobalTheme[SystemPropAliasKey][value] is returned
           * (e.g. value = "sm" and GlobalTheme[SystemPropAliasKey]["sm"] is returned),
           * otherwise return the value as it is a regular css value such as 1rem */
          strToObj(
            value.toString(),
            GlobalTheme[systemProp[1] as keyof Theme],
            true, // optional chaining as incorrect string to dot notation should simply return undefined
          ) ?? value.toString(),
      };
    }

    /*
     * if secoundvalue in array is not a string, then the first value in the array is a theme
     * alias (e.g. space, fontSizes, sizes, etc.) and the secound value in the array is a custom function
     * which take in a css value and returns custom css code
     * */
    return systemProp[1](
      strToObj(
        value.toString(),
        GlobalTheme[systemProp[0] as keyof Theme],
        true,
      ) ?? value.toString(),
    );
  }

  /* flattenedAliases is the aliases object without the first set of keys which returns all
   * subkeys allowing for the object to be one layer deep (e.g. bg, m, mt, mr, mb) */
  if (Object.prototype.hasOwnProperty.call(flattenedAliases, prop)) {
    return cssTransform(flattenedAliases[prop], value); // recursively calls itself with the full value (e.g. m -> cssTransform("margin", value))
  }

  /* flattenedMultiples is the multiples object without the first set of keys which returns all
   * subkeys allowing for the object to be one layer deep (e.g. marginX, marginY, paddingX, paddingY) */
  if (Object.prototype.hasOwnProperty.call(flattenedMultiples, prop)) {
    const cssObj = {};
    const multiplesValue = flattenedMultiples[prop];
    // loop through multiples array (e.g. ["marginLeft", "marginRight"]) and recursively perform cssTransform on each iterable
    for (let i = 0; i < multiplesValue.length; i += 1) {
      const regularTransformAttrib = cssTransform(
        multiplesValue[i],
        value,
      ) as Record<string, any>;
      Object.assign(cssObj, { ...regularTransformAttrib });
    }
    return cssObj;
  }

  // standard css value (e.g. prop = "marginLeft", value = "1rem")
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
