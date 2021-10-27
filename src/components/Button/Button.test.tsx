import { cleanup } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import { transparentize } from 'polished';
import Button from '.';
import { GlobalTheme } from '@/UI';
import { mountWithTheme } from '@/utils';

expect.extend(matchers);

beforeEach(cleanup);

describe('components/Button', () => {
  describe('standard', () => {
    it('base functions', () => {
      const mockFn = jest.fn();
      const wrapper = mountWithTheme(<Button onClick={mockFn} />);
      wrapper.simulate('click');
      expect(mockFn).toHaveBeenCalled();
    });
    it('snapshot testing', () => {
      const wrapper = mountWithTheme(<Button />);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('color', () => {
    describe('primary button', () => {
      it('correct background and color', () => {
        const wrapper = mountWithTheme(<Button color="primary" />);

        // correct background
        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.primary[500],
        );

        // correct color
        expect(wrapper).toHaveStyleRule('color', 'white');
      });
      it('primary &:hover state', () => {
        const wrapper = mountWithTheme(<Button color="primary" />);

        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.primary[600],
          {
            target: ':hover',
          },
        );
      });
      it('primary &:active state', () => {
        const wrapper = mountWithTheme(<Button color="primary" />);
        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.primary[700],
          {
            target: ':active',
          },
        );
      });
    });

    describe('secondary button', () => {
      it('correct background and color', () => {
        const wrapper = mountWithTheme(<Button color="secondary" />);

        // correct background
        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.secondary[500],
        );

        // correct color
        expect(wrapper).toHaveStyleRule('color', 'white');
      });
      it('secondary &:hover state', () => {
        const wrapper = mountWithTheme(<Button color="secondary" />);

        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.secondary[600],
          {
            target: ':hover',
          },
        );
      });
      it('secondary &:active state', () => {
        const wrapper = mountWithTheme(<Button color="secondary" />);
        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.secondary[700],
          {
            target: ':active',
          },
        );
      });
    });

    describe('accent button', () => {
      it('correct background and color', () => {
        const wrapper = mountWithTheme(<Button color="accent" />);

        // correct background
        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.accent[500],
        );

        // correct color
        expect(wrapper).toHaveStyleRule('color', 'white');
      });
      it('accent &:hover state', () => {
        const wrapper = mountWithTheme(<Button color="accent" />);

        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.accent[600],
          {
            target: ':hover',
          },
        );
      });
      it('accent &:active state', () => {
        const wrapper = mountWithTheme(<Button color="accent" />);
        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.accent[700],
          {
            target: ':active',
          },
        );
      });
    });

    describe('grey button', () => {
      it('correct background and color', () => {
        const wrapper = mountWithTheme(<Button color="grey" />);

        // correct background
        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.grey[100],
        );

        // correct color
        expect(wrapper).toHaveStyleRule('color', GlobalTheme.colors.grey[800]);
      });
      it('grey &:hover state', () => {
        const wrapper = mountWithTheme(<Button color="grey" />);

        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.grey[200],
          {
            target: ':hover',
          },
        );
      });
      it('grey &:active state', () => {
        const wrapper = mountWithTheme(<Button color="grey" />);
        expect(wrapper).toHaveStyleRule(
          'background',
          GlobalTheme.colors.grey[300],
          {
            target: ':active',
          },
        );
      });
    });
  });

  describe('variants', () => {
    it('solid variant', () => {
      const wrapper = mountWithTheme(<Button variant="solid" />);
      expect(wrapper).toHaveStyleRule('border', '0');

      expect(wrapper).toHaveStyleRule(
        'background',
        GlobalTheme.colors.primary[500],
      );
    });
    it('text variant', () => {
      const wrapper = mountWithTheme(<Button variant="text" />);
      expect(wrapper).toHaveStyleRule('background', 'transparent');
      expect(wrapper).toHaveStyleRule(
        'background',
        transparentize(0.9, GlobalTheme.colors.primary[500]),
        {
          target: ':hover',
        },
      );

      expect(wrapper).toHaveStyleRule(
        'background',
        transparentize(0.7, GlobalTheme.colors.primary[500]),
        {
          target: ':active',
        },
      );

      expect(wrapper).toHaveStyleRule(
        'color',
        GlobalTheme.colors.primary[600],
        {
          target: ':active',
        },
      );
    });

    it('outlined variant', () => {
      const wrapper = mountWithTheme(<Button variant="outlined" />);

      expect(wrapper).toHaveStyleRule('background', 'transparent');
      expect(wrapper).toHaveStyleRule('border', GlobalTheme.borders.sm);
      expect(wrapper).toHaveStyleRule('color', GlobalTheme.colors.primary[500]);

      expect(wrapper).toHaveStyleRule(
        'background',
        transparentize(0.9, GlobalTheme.colors.primary[500]),
        {
          target: ':hover',
        },
      );

      expect(wrapper).toHaveStyleRule(
        'background',
        transparentize(0.7, GlobalTheme.colors.primary[500]),
        {
          target: ':active',
        },
      );

      expect(wrapper).toHaveStyleRule(
        'color',
        GlobalTheme.colors.primary[600],
        {
          target: ':active',
        },
      );

      expect(wrapper).toHaveStyleRule(
        'border-color',
        GlobalTheme.colors.primary[600],
        {
          target: ':active',
        },
      );
    });
  });

  describe('sizes', () => {
    it('icon', () => {
      const wrapper = mountWithTheme(<Button size="icon" />);
      expect(wrapper).toHaveStyleRule('height', GlobalTheme.sizes.sm);
    });

    it('sm', () => {
      const wrapper = mountWithTheme(<Button size="sm" />);
      expect(wrapper).toHaveStyleRule('height', GlobalTheme.sizes.sm);
      expect(wrapper).toHaveStyleRule('padding', GlobalTheme.space.xs);
      expect(wrapper).toHaveStyleRule(
        'font-size',
        GlobalTheme.fontSizes.bodySm,
      );
    });

    it('md', () => {
      const wrapper = mountWithTheme(<Button size="md" />);
      expect(wrapper).toHaveStyleRule('height', GlobalTheme.sizes.md);
      expect(wrapper).toHaveStyleRule('padding', GlobalTheme.space.sm);
      expect(wrapper).toHaveStyleRule(
        'font-size',
        GlobalTheme.fontSizes.bodyLg,
      );
    });

    it('lg', () => {
      const wrapper = mountWithTheme(<Button size="lg" />);
      expect(wrapper).toHaveStyleRule('height', GlobalTheme.sizes.lg);
      expect(wrapper).toHaveStyleRule('padding', GlobalTheme.space.md);
      expect(wrapper).toHaveStyleRule(
        'font-size',
        GlobalTheme.fontSizes.bodyLg,
      );
    });
  });

  describe('maxWidth', () => {
    it('makes width 100%', () => {
      const wrapper = mountWithTheme(<Button maxWidth />);
      expect(wrapper).toHaveStyleRule('width', '100%');
    });
  });
});
