import {
  color as colorConfig,
  aliases,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type ColorProps = ComposeSystemProp<
  typeof colorConfig | typeof aliases.color
>;

const color = <T>(props: Record<string, T>) => {
  const config = { ...colorConfig, ...aliases.color };
  return compose(props, config);
};

export default color;
