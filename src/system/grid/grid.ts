import { grid as gridConfig, ComposeSystemProp } from '@/system/cssTransform';
import compose from '@/system/compose';

export type GridProps = ComposeSystemProp<typeof gridConfig>;

const grid = <T>(props: Record<string, T>) => {
  const config = { ...gridConfig };
  return compose(props, config);
};

export default grid;
