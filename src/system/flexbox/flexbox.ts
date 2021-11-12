import {
  flexbox as flexboxConfig,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type FlexboxProps = ComposeSystemProp<typeof flexboxConfig>;

const flexbox = <T>(props: Record<string, T>) => {
  const config = { ...flexboxConfig };
  return compose(props, config);
};

export default flexbox;
