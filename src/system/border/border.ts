import {
  border as borderConfig,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type BorderProps = ComposeSystemProp<typeof borderConfig>;

const border = <T>(props: Record<string, T>) => {
  const config = { ...borderConfig };
  return compose(props, config);
};

export default border;
