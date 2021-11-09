/* @jsxImportSource @emotion/react */
import { Theme } from '@emotion/react';
import { mq } from '@/utils';
import cssTransform from '@/system/cssTransform';

const arrayComposer = (scale: string[], responsiveInput: string) => {
  const CSSObj = {};
  for (let i = 0; i < scale.length; i += 1) {
    Object.assign(CSSObj, cssTransform(scale[i], responsiveInput));
  }
  return CSSObj;
};

const responsiveStyles = (
  responsiveInput: Record<string, string> | string,
  scale: string[] | string,
): Record<string, string> => {
  // if input is a string
  if (typeof responsiveInput === 'string') {
    if (Array.isArray(scale)) {
      return arrayComposer(scale, responsiveInput);
    }
    return cssTransform(scale, responsiveInput) as Record<string, string>;
  }
  const responsiveArr: any = Object.entries(responsiveInput);

  for (let i = 0; i < responsiveArr.length; i += 1) {
    // mutate keys directly into css breakpoints
    responsiveArr[i][0] = mq(responsiveArr[i][0] as keyof Theme['breakpoints']);

    if (Array.isArray(scale)) {
      responsiveArr[i][1] = arrayComposer(scale, responsiveArr[i][1]);
    } else {
      responsiveArr[i][1] = cssTransform(scale, responsiveArr[i][1]);
    }
  }

  return Object.fromEntries(responsiveArr);
};

export default responsiveStyles;
