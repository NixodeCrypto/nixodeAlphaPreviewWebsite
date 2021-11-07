/* @jsxImportSource @emotion/react */
import { Theme } from '@emotion/react';
import { mq } from '@/utils';
import cssTransform from '@/system/cssTransform';

const responsiveStyles = (
  responsiveObject: Record<string, string | number>,
  scale: string[] | string,
): Record<string, string> => {
  const responsiveArr: any = Object.entries(responsiveObject);

  for (let i = 0; i < responsiveArr.length; i += 1) {
    // mutate keys directly into css breakpoints
    responsiveArr[i][0] = mq(responsiveArr[i][0] as keyof Theme['breakpoints']);

    if (Array.isArray(scale)) {
      const CSSObj = {};
      for (let j = 0; j < scale.length; j += 1) {
        Object.assign(CSSObj, cssTransform(scale[j], responsiveArr[i][1]));
      }
      responsiveArr[i][1] = CSSObj;
    } else {
      responsiveArr[i][1] = cssTransform(scale as string, responsiveArr[i][1]);
    }
  }

  return Object.fromEntries(responsiveArr);
};

export default responsiveStyles;
