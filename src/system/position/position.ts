import {
  position as positionConfig,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type PositionProps = ComposeSystemProp<typeof positionConfig>;

const position = <T>(props: Record<string, T>) => {
  const config = { ...positionConfig };
  return compose(props, config);
};

export default position;
