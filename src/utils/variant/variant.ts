/** @jsxImportSource @emotion/react */
import { SerializedStyles } from '@emotion/react';

const variant = (
  prop: string | undefined,
  variantStructure: Record<string, SerializedStyles>,
): SerializedStyles | null => {
  const variantEntries = Object.entries(variantStructure);
  for (let i = 0; i < variantEntries.length; i += 1) {
    if (prop === variantEntries[i][0]) {
      return variantEntries[i][1];
    }
  }
  return variantStructure?.default;
};

export default variant;
