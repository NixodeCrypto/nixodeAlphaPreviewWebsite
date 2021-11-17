/* @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import NextImage, { ImageProps } from 'next/image';
import { layout, LayoutProps, space, SpaceProps } from '@/system';

interface IProps extends LayoutProps, SpaceProps, ImageProps {}

const ImageWrapper = styled.div<LayoutProps & SpaceProps>`
  position: relative;
  ${layout};
  ${space};
`;

const Image = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLDivElement>) => {
    const { src, alt, ...other } = props;

    return (
      <ImageWrapper {...other} ref={ref}>
        <NextImage
          src={src}
          alt={alt}
          width="100%"
          height="100%"
          layout="responsive"
          objectFit="contain"
        />
      </ImageWrapper>
    );
  },
);

Image.displayName = 'Image';
export default Image;
