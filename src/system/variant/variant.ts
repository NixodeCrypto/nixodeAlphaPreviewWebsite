/** @jsxImportSource @emotion/react */
import { css, SerializedStyles, Theme } from '@emotion/react';
import { mq, isObject } from '@/utils';

const variant = (
  prop: Record<string, string | SerializedStyles> | string | undefined,
  variantStructure: Record<string, SerializedStyles | Record<string, any>>,
): Record<string, SerializedStyles | string> | SerializedStyles | null => {
  if (typeof prop === 'string') {
    // return "all" css first, and more specific "prop" css second to possibly overwrite "all"
    return css(variantStructure.all, variantStructure[prop]);
  }

  // if prop is a responsive object (e.g. {sm: "sm", md: "lg"})
  if (isObject(prop)) {
    // propArr is a array of key value pairs
    const propArr = Object.entries(
      prop as Record<string, string | SerializedStyles> | string,
    );

    for (let i = 0; i < propArr.length; i += 1) {
      // turn key into breakpoint
      propArr[i][0] = mq(propArr[i][0] as keyof Theme['breakpoints']);
      // turn value into css structure
      propArr[i][1] = css(
        variantStructure.all,
        variantStructure[propArr[i][1] as string],
      );
    }

    // combine back into object
    return Object.fromEntries(propArr);
  }

  return null;
};

export default variant;
