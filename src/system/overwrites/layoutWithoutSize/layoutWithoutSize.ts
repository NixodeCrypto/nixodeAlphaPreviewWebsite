// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { system, get } from '@styled-system/core';
import { LayoutProps } from 'styled-system';

const isNumber = (n) => typeof n === 'number' && !Number.isNaN(n);
const getWidth = (n, scale) =>
  get(scale, n, !isNumber(n) || n > 1 ? n : `${n * 100}%`);

const config = {
  width: {
    property: 'width',
    scale: 'sizes',
    transform: getWidth,
  },
  height: {
    property: 'height',
    scale: 'sizes',
  },
  minWidth: {
    property: 'minWidth',
    scale: 'sizes',
  },
  minHeight: {
    property: 'minHeight',
    scale: 'sizes',
  },
  maxWidth: {
    property: 'maxWidth',
    scale: 'sizes',
  },
  maxHeight: {
    property: 'maxHeight',
    scale: 'sizes',
  },
  overflow: true,
  overflowX: true,
  overflowY: true,
  display: true,
  verticalAlign: true,
};

const layoutWithoutSize = system(config);

type LayoutWithoutSizeProps = Omit<LayoutProps, 'size'>;

export { layoutWithoutSize, LayoutWithoutSizeProps };
