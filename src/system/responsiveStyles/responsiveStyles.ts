/* @jsxImportSource @emotion/react */
import { css, Theme } from '@emotion/react';
import { GlobalTheme } from '@/UI';
import { mq, strToObj } from '@/utils';

// TODO: Add property to access string to object manipulation
const responsiveStyles = (
  responsiveObject: Record<string, string | number>,
  scale: string[] | string,
) => {
  const responsiveArr: any = Object.entries(responsiveObject);
  for (let i = 0; i < responsiveArr.length; i += 1) {
    const CSSVal = responsiveArr[i][1];
    responsiveArr[i][0] = mq(responsiveArr[i][0] as keyof Theme['breakpoints']);
    if (Array.isArray(scale)) {
      responsiveArr[i][1] = [];
      for (let j = 0; j < scale.length; j += 1) {
        responsiveArr[i][1].push([scale[j], CSSVal]);
      }
    } else {
      responsiveArr[i][1] = [[scale, CSSVal]];
    }

    responsiveArr[i][1] = Object.fromEntries(responsiveArr[i][1]);
  }

  return css(Object.fromEntries(responsiveArr));
};

export default responsiveStyles;
