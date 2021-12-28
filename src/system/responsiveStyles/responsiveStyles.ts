/* @jsxImportSource @emotion/react */
import { Theme } from '@emotion/react';
import { mq } from '@/utils';
import cssTransform from '@/system/cssTransform';

// helper function that loops through multiple scales and applies cssTransform on all iterations
const arrayComposer = (scale: string[], responsiveInput: string) => {
  const cssObj = {};
  for (let i = 0; i < scale.length; i += 1) {
    Object.assign(cssObj, cssTransform(scale[i], responsiveInput));
  }
  return cssObj;
};

/* DESCRIPTION:
 * responsiveInput refers to an object with GlobalTheme['breakpoints']
 * keys along with respective css values (e.g. {xss: "1rem", xs: "sm", md: "3rem"})
 *
 * scale refers to a string which gets used as the cssProp or an array of strings
 * in which each iterable in the array gets used as a cssProp (e.g. "width" | ["width", "height"])
 * */
const responsiveStyles = (
  responsiveInput: Record<string, string> | string,
  scale: string[] | string,
): Record<string, string> => {
  // if the input is a regular string instead of a breakpoint object (e.g. "1rem")
  if (typeof responsiveInput === 'string') {
    // if multiple scales are used (e.g. ['width', 'height'])
    if (Array.isArray(scale)) {
      return arrayComposer(scale, responsiveInput);
    }
    // if single scale return single cssTransform
    return cssTransform(scale, responsiveInput) as Record<string, string>;
  }
  // puts responsive object into responsive entry array (e.g. [['xss', "1rem"], ["xs", "sm"]])
  const responsiveArr: any = Object.entries(responsiveInput);

  for (let i = 0; i < responsiveArr.length; i += 1) {
    // change key into breakpoint (e.g. [['@media (min-width: 500px)', "1rem"], ["@media (min-width: 700px)", "sm"]])
    responsiveArr[i][0] = mq(responsiveArr[i][0] as keyof Theme['breakpoints']);

    // if multiple scales, bind value to the result of the arrayComposer, else bind value to the result of cssTransform
    if (Array.isArray(scale)) {
      responsiveArr[i][1] = arrayComposer(scale, responsiveArr[i][1]);
    } else {
      responsiveArr[i][1] = cssTransform(scale, responsiveArr[i][1]);
    }
  }

  // transform entry array into object
  return Object.fromEntries(responsiveArr);
};

export default responsiveStyles;
