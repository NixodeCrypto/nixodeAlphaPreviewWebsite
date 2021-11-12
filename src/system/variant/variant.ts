/** @jsxImportSource @emotion/react */
import { css, SerializedStyles, Theme } from '@emotion/react';
import { mq, isObject } from '@/utils';

const variant = (
  prop: Record<string, string | SerializedStyles> | string | undefined,
  variantStructure: Record<string, SerializedStyles | Record<string, any>>,
  noResponsiveSizing = false,
): Record<string, SerializedStyles | string> | SerializedStyles | null => {
  if (typeof prop === 'string') {
    return css(variantStructure.all, variantStructure[prop]);
  }

  if (isObject(prop) && !noResponsiveSizing) {
    const propArr = Object.entries(
      prop as Record<string, string | SerializedStyles> | string,
    );

    for (let i = 0; i < propArr.length; i += 1) {
      propArr[i][0] = mq(propArr[i][0] as keyof Theme['breakpoints']);
      propArr[i][1] = css(
        variantStructure.all,
        variantStructure[propArr[i][1] as string],
      );
    }

    return Object.fromEntries(propArr);
  }

  return null;
};

export default variant;
