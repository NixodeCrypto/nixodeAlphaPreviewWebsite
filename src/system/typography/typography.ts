import {
  typography as typographyConfig,
  ComposeSystemProp,
} from '@/system/cssTransform';
import compose from '@/system/compose';

export type TypographyProps = ComposeSystemProp<typeof typographyConfig>;

const typography = <T>(props: Record<string, T>) => {
  const config = { ...typographyConfig };
  return compose(props, config);
};

export default typography;
