/** @jsxImportSource @emotion/react */
import { css, SerializedStyles } from '@emotion/react';

const variant = (
  prop: string | undefined,
  variantStructure: Record<string, SerializedStyles>,
): SerializedStyles | null => {
  const variantEntries = Object.entries(variantStructure);
  for (let i = 0; i < variantEntries.length; i += 1) {
    if (prop === variantEntries[i][0]) {
      return css`
        ${variantStructure?.all}
        ${variantEntries[i][1]}
      `;
    }
  }
  return css`
    ${variantStructure?.all};
    ${variantStructure?.default};
  `;
};

export default variant;
