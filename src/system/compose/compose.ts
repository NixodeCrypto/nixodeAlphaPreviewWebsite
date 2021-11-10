/* @jsxImportSource @emotion/react */
import merge from 'deepmerge';
import responsiveStyles from '@/system/responsiveStyles';

const compose = <T>(
  props: Record<string, T | string>,
  config: Record<string, boolean | string>,
) => {
  let CSSObj = {};
  const configKeys = Object.keys(config);
  for (let i = 0; i < configKeys.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(props, configKeys[i])) {
      CSSObj = merge.all([
        CSSObj,
        responsiveStyles(props[configKeys[i]] as string, configKeys[i]),
      ]);
    }
  }
  return CSSObj;
};

export default compose;
