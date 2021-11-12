import {
  shadow as shadowConfig,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type ShadowProps = ComposeSystemProp<typeof shadowConfig>;

const shadow = <T>(props: Record<string, T>) => {
  const config = { ...shadowConfig };
  return compose(props, config);
};

export default shadow;
