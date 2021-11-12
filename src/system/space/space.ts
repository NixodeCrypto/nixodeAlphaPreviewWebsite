import {
  space as spaceConfig,
  aliases,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type SpaceProps = ComposeSystemProp<
  typeof spaceConfig | typeof aliases.space
>;

const space = <T>(props: Record<string, T>) => {
  const config = { ...spaceConfig, ...aliases.space };
  return compose(props, config);
};

export default space;
