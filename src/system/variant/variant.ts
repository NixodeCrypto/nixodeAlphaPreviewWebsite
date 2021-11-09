/** @jsxImportSource @emotion/react */
import { css, SerializedStyles, Theme } from '@emotion/react';
import { mq } from '@/utils';

const variant = (
  prop: Record<string, string | SerializedStyles> | string,
  variantStructure: Record<string, SerializedStyles | Record<string, any>>,
): Record<string, SerializedStyles | string> | SerializedStyles => {
  if (typeof prop === 'string') {
    return css(variantStructure.all, variantStructure[prop]);
  }

  const propArr = Object.entries(prop);

  for (let i = 0; i < propArr.length; i += 1) {
    propArr[i][0] = mq(propArr[i][0] as keyof Theme['breakpoints']);
    propArr[i][1] = css(
      variantStructure.all,
      variantStructure[propArr[i][1] as string],
    );
  }

  return Object.fromEntries(propArr);
};

export default variant;
