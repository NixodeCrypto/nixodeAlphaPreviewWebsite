/* @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ChevronDown } from 'react-feather';
import Box from '@/components/Box';
import {
  SpaceProps,
  space,
  LayoutProps,
  layout,
  variant as CSSVariant,
} from '@/system';
import { token } from '@/utils';

export interface IProps extends SpaceProps, LayoutProps {
  size?: 'sm' | 'md' | 'lg';
  menuItems: Array<string>;
  label: string;
  value: string;
  onChange(item: string): string;
}

const SelectRoot = styled(Box)<Omit<IProps, 'menuItems'>>`
  position: relative;
  transition: ${token.transition('standard')};
  border: ${token.borders('sm')};
  border-color: ${token.colors('grey.300')};
  border-radius: ${token.radii('sm')};
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-family: ${token.fonts('text')};
  font-weight: ${token.fontWeights('medium')};
  color: ${token.colors('grey.900')};
  cursor: pointer;
  &:hover {
    border-color: ${token.colors('grey.400')};
  }
  &:focus {
    outline: 0;
    border-color: ${token.colors('grey.500')};
  }
  ${(props) =>
    CSSVariant(props.size as string, {
      all: css`
        font-size: ${token.fontSizes('bodyLg')};
      `,
      sm: css`
        height: ${token.sizes('sm')};
        font-size: ${token.fontSizes('bodySm')};
        padding-left: ${token.space('xs')};
        padding-right: ${token.space('xs')};
      `,
      md: css`
        height: ${token.sizes('md')};
        padding-left: ${token.space('xs')};
        padding-right: ${token.space('xs')};
      `,
      lg: css`
        height: ${token.sizes('lg')};
        padding-left: ${token.space('sm')};
        padding-right: ${token.space('sm')};
      `,
    })};

  ${space};
  ${layout};
`;

const Menu = styled(Box)`
  z-index: ${token.zIndices('popup')};
  position: absolute;
  top: calc(100% + ${token.space('xss')});
  border: ${token.borders('sm')};
  border-color: ${token.colors('grey.300')};
  border-radius: ${token.radii('sm')};
  min-width: ${token.sizes('xl')};
`;

const MenuItem = styled(Box)`
  ${(props) =>
    CSSVariant(props.size as string, {
      sm: css`
        font-size: ${token.fontSizes('bodySm')};
        padding: ${token.space('xs')};
      `,
      md: css`
        font-size: ${token.fontSizes('bodyLg')};
        padding-top: ${token.space('xs')};
        padding-bottom: ${token.space('xs')};
        padding-right: ${token.space('sm')};
        padding-left: ${token.space('sm')};
      `,
      lg: css`
        font-size: ${token.fontSizes('bodyLg')};
        padding-top: ${token.space('xs')};
        padding-bottom: ${token.space('xs')};
        padding-right: ${token.space('md')};
        padding-left: ${token.space('md')};
      `,
    })}
  font-family: ${token.fonts('text')};
  font-weight: ${token.fontWeights('medium')};
  color: ${token.colors('grey.900')};
  cursor: pointer;
  &:hover {
    background: ${token.colors('grey.50')};
  }
`;

const Select = React.forwardRef(
  (props: IProps, ref: React.Ref<HTMLDivElement>): JSX.Element => {
    const { size, menuItems, label, value, onChange } = props;
    const [open, setOpen] = useState(false);

    const selectClickHandler = () => {
      setOpen(!open);
    };

    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        selectClickHandler();
      }
    };

    const menuItemClickHandler = (menuItem: string) => {
      onChange(menuItem);
      setOpen(false);
    };

    // TODO: make MenuItems based on state and not css hover to allow a11y
    return (
      <Box position="relative">
        <SelectRoot
          size={size}
          tabIndex="0"
          ref={ref}
          onKeyDown={keydownHandler}
          onClick={selectClickHandler}
          role="button"
        >
          {value === '' ? label : value}
          <Box
            ml="xss"
            css={css`
              & svg {
                vertical-align: middle;
              }
            `}
          >
            <ChevronDown
              width={token.sizes('xss')}
              strokeWidth={size === 'sm' ? '2.5px' : '4px'}
            />
          </Box>
        </SelectRoot>
        {open && (
          <Menu>
            {menuItems.map((i) => (
              <MenuItem
                key={i}
                onClick={() => menuItemClickHandler(i)}
                size={size}
              >
                {i}
              </MenuItem>
            ))}
          </Menu>
        )}
      </Box>
    );
  },
);

Select.displayName = 'Select';
export default Select;
