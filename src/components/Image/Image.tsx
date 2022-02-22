/* @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import NextImage, { ImageProps } from 'next/image';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  position,
  PositionProps,
} from '@/system';

interface IProps extends LayoutProps, SpaceProps, ImageProps {
  fallback?: any;
}

const ImageWrapper = styled.div<LayoutProps & SpaceProps & PositionProps>`
  position: relative;
  ${layout};
  ${space};
  ${position};
`;

const Image = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLDivElement>) => {
    const { src, alt, fallback, ...other } = props;
    const [imageErr, setImageErr] = useState(false);

    return (
      <ImageWrapper {...other} ref={ref}>
        <NextImage
          src={imageErr ? fallback.src : src}
          alt={alt}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
          onError={() => setImageErr(true)}
        />
      </ImageWrapper>
    );
  },
);

Image.displayName = 'Image';
export default Image;
