import {
  layout as layoutConfig,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type LayoutProps = ComposeSystemProp<typeof layoutConfig>;

const layout = <T>(props: Record<string, T>) => {
  const config = { ...layoutConfig };
  return compose(props, config);
};

export default layout;
