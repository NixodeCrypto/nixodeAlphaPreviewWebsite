import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { matchers } from '@emotion/jest';
import { transparentize } from 'polished';
import Button from '.';
import { GlobalTheme } from '@/UI';

expect.extend(matchers);

beforeEach(cleanup);

describe('components/Button', () => {
  describe('standard', () => {
    it('base functions', () => {
      const mockFn = jest.fn();
      const { getByText } = render(<Button onClick={mockFn}>Click Me</Button>);
      const node = getByText('Click Me');
      fireEvent.click(node);
      expect(mockFn).toHaveBeenCalled();
    });
    it('snapshot testing', () => {
      const tree = renderer.create(<Button />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe('color', () => {
    describe('primary button', () => {
      it('correct background and color', () => {
        const tree = renderer.create(<Button color="primary" />).toJSON();

        // correct background
        expect(tree).toHaveStyleRule(
          'background',
          GlobalTheme.colors.primary[500],
        );

        // correct color
        expect(tree).toHaveStyleRule('color', 'white');
      });
      it('primary &:hover state', () => {
        const tree = renderer.create(<Button color="primary" />).toJSON();

        expect(tree).toHaveStyleRule(
          'background',
          GlobalTheme.colors.primary[600],
          {
            target: ':hover',
          },
        );
      });
      it('primary &:active state', () => {
        const tree = renderer.create(<Button color="primary" />).toJSON();
        expect(tree).toHaveStyleRule(
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
        const tree = renderer.create(<Button color="secondary" />).toJSON();

        // correct background
        expect(tree).toHaveStyleRule(
          'background',
          GlobalTheme.colors.secondary[500],
        );

        // correct color
        expect(tree).toHaveStyleRule('color', 'white');
      });
      it('secondary &:hover state', () => {
        const tree = renderer.create(<Button color="secondary" />).toJSON();

        expect(tree).toHaveStyleRule(
          'background',
          GlobalTheme.colors.secondary[600],
          {
            target: ':hover',
          },
        );
      });
      it('secondary &:active state', () => {
        const tree = renderer.create(<Button color="secondary" />).toJSON();
        expect(tree).toHaveStyleRule(
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
        const tree = renderer.create(<Button color="accent" />).toJSON();

        // correct background
        expect(tree).toHaveStyleRule(
          'background',
          GlobalTheme.colors.accent[500],
        );

        // correct color
        expect(tree).toHaveStyleRule('color', 'white');
      });
      it('accent &:hover state', () => {
        const tree = renderer.create(<Button color="accent" />).toJSON();

        expect(tree).toHaveStyleRule(
          'background',
          GlobalTheme.colors.accent[600],
          {
            target: ':hover',
          },
        );
      });
      it('accent &:active state', () => {
        const tree = renderer.create(<Button color="accent" />).toJSON();
        expect(tree).toHaveStyleRule(
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
        const tree = renderer.create(<Button color="grey" />).toJSON();

        // correct background
        expect(tree).toHaveStyleRule(
          'background',
          GlobalTheme.colors.grey[100],
        );

        // correct color
        expect(tree).toHaveStyleRule('color', GlobalTheme.colors.grey[800]);
      });
      it('grey &:hover state', () => {
        const tree = renderer.create(<Button color="grey" />).toJSON();

        expect(tree).toHaveStyleRule(
          'background',
          GlobalTheme.colors.grey[200],
          {
            target: ':hover',
          },
        );
      });
      it('grey &:active state', () => {
        const tree = renderer.create(<Button color="grey" />).toJSON();
        expect(tree).toHaveStyleRule(
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
      const tree = renderer.create(<Button variant="solid" />).toJSON();
      expect(tree).toHaveStyleRule('border', '0');

      expect(tree).toHaveStyleRule(
        'background',
        GlobalTheme.colors.primary[500],
      );
    });
    it('text variant', () => {
      const tree = renderer.create(<Button variant="text" />).toJSON();
      expect(tree).toHaveStyleRule('background', 'transparent');
      expect(tree).toHaveStyleRule(
        'background',
        transparentize(0.9, GlobalTheme.colors.primary[500]),
        {
          target: ':hover',
        },
      );

      expect(tree).toHaveStyleRule(
        'background',
        transparentize(0.7, GlobalTheme.colors.primary[500]),
        {
          target: ':active',
        },
      );

      expect(tree).toHaveStyleRule('color', GlobalTheme.colors.primary[600], {
        target: ':active',
      });
    });

    it('outlined variant', () => {
      const tree = renderer.create(<Button variant="outlined" />).toJSON();

      expect(tree).toHaveStyleRule('background', 'transparent');
      expect(tree).toHaveStyleRule('border', GlobalTheme.borders.sm);
      expect(tree).toHaveStyleRule('color', GlobalTheme.colors.primary[500]);

      expect(tree).toHaveStyleRule(
        'background',
        transparentize(0.9, GlobalTheme.colors.primary[500]),
        {
          target: ':hover',
        },
      );

      expect(tree).toHaveStyleRule(
        'background',
        transparentize(0.7, GlobalTheme.colors.primary[500]),
        {
          target: ':active',
        },
      );

      expect(tree).toHaveStyleRule('color', GlobalTheme.colors.primary[600], {
        target: ':active',
      });

      expect(tree).toHaveStyleRule(
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
      const tree = renderer.create(<Button size="icon" />).toJSON();
      expect(tree).toHaveStyleRule('height', GlobalTheme.sizes.sm);
    });

    it('sm', () => {
      const tree = renderer.create(<Button size="sm" />).toJSON();
      expect(tree).toHaveStyleRule('height', GlobalTheme.sizes.sm);
      expect(tree).toHaveStyleRule('padding', GlobalTheme.space.xs);
      expect(tree).toHaveStyleRule('font-size', GlobalTheme.fontSizes.bodySm);
    });

    it('md', () => {
      const tree = renderer.create(<Button size="md" />).toJSON();
      expect(tree).toHaveStyleRule('height', GlobalTheme.sizes.md);
      expect(tree).toHaveStyleRule('padding', GlobalTheme.space.sm);
      expect(tree).toHaveStyleRule('font-size', GlobalTheme.fontSizes.bodyLg);
    });

    it('lg', () => {
      const tree = renderer.create(<Button size="lg" />).toJSON();
      expect(tree).toHaveStyleRule('height', GlobalTheme.sizes.lg);
      expect(tree).toHaveStyleRule('padding', GlobalTheme.space.md);
      expect(tree).toHaveStyleRule('font-size', GlobalTheme.fontSizes.bodyLg);
    });
  });

  describe('maxWidth', () => {
    it('makes width 100%', () => {
      const tree = renderer.create(<Button maxWidth />).toJSON();
      expect(tree).toHaveStyleRule('width', '100%');
    });
  });
});
