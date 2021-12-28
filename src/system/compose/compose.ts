/* @jsxImportSource @emotion/react */
import merge from 'deepmerge';
import responsiveStyles from '@/system/responsiveStyles';

/*
 * DESCRIPTION:
 * props refers to the props object recieved in a JSX component
 * (e.g. <Component bg={{xss: "primary.200", xs: "secondary.200"}} /> -> { bg: {xss: "primary.200", xs: "secondary.200"}})
 *
 * config refers to an object with all values being true and all keys
 * being a key of an accepted cssTransform prop (e.g. { bg: true, color: true, opacity: true })
 * */
const compose = <T>(
  props: Record<string, T | string>,
  config: Record<string, boolean | string | string[]>,
) => {
  let cssObj = {};
  const configKeys = Object.keys(config);

  // iterate through configKeys
  for (let i = 0; i < configKeys.length; i += 1) {
    // check if props contain the configKey iterable
    if (Object.prototype.hasOwnProperty.call(props, configKeys[i])) {
      /* deepmerge to ensure that alias / multiple configurations do not collide
       with single configurations in nested breakpoint object */
      cssObj = merge.all([
        cssObj,
        responsiveStyles(props[configKeys[i]] as string, configKeys[i]),
      ]);
    }
  }
  return cssObj;
};

export default compose;
