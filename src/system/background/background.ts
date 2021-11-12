import {
  background as backgroundConfig,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type BackgroundProps = ComposeSystemProp<typeof backgroundConfig>;

const background = <T>(props: Record<string, T>) => {
  const config = { ...backgroundConfig };
  return compose(props, config);
};

export default background;
