/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { mount } from 'enzyme';
import { mq } from '@/utils';
import variant from '.';

describe('system/variant', () => {
  it('standard string variant works', () => {
    const variants = {
      sm: css`
        width: 1rem;
        height: 1rem;
      `,
      md: css`
        width: 2rem;
        height: 2rem;
      `,
    };

    const Styled = styled.div<{ size: string }>`
      ${(props) => variant(props.size, variants)};
    `;

    const tree = mount(<Styled size="sm" />);
    expect(tree).toHaveStyleRule('width', '1rem');
    expect(tree).toHaveStyleRule('height', '1rem');
  });
  it('object css values work', () => {
    const variants = {
      sm: {
        width: '1rem',
        height: '1rem',
      },
      md: {
        width: '2rem',
        height: '2rem',
      },
    };

    const Styled = styled.div<{ size: string }>`
      ${(props) => variant(props.size, variants)};
    `;

    const tree = mount(<Styled size="sm" />);
    expect(tree).toHaveStyleRule('width', '1rem');
    expect(tree).toHaveStyleRule('height', '1rem');
  });
  it('all property works', () => {
    const variants = {
      sm: css`
        width: 1rem;
        height: 1rem;
      `,
      md: css`
        width: 2rem;
        height: 2rem;
      `,
      all: css`
        display: flex;
      `,
    };

    const Styled = styled.div<{ size: string }>`
      ${(props) => variant(props.size, variants)};
    `;

    const tree = mount(<Styled size="sm" />);
    expect(tree).toHaveStyleRule('width', '1rem');
    expect(tree).toHaveStyleRule('height', '1rem');
    expect(tree).toHaveStyleRule('display', 'flex');
  });
  it('responsive object variants', () => {
    const variants = {
      sm: {
        width: '1rem',
        height: '1rem',
      },
      md: {
        width: '2rem',
        height: '2rem',
      },
    };

    const Styled = styled.div<{ size: Record<string, string> }>`
      ${(props) => variant(props.size, variants)};
    `;

    const tree = mount(<Styled size={{ xss: 'sm', md: 'md' }} />);
    expect(tree).toHaveStyleRule('width', '1rem', {
      media: mq('xss', true),
    });
    expect(tree).toHaveStyleRule('height', '1rem', {
      media: mq('xss', true),
    });
    expect(tree).toHaveStyleRule('width', '2rem', {
      media: mq('md', true),
    });
    expect(tree).toHaveStyleRule('height', '2rem', {
      media: mq('md', true),
    });
  });
  it('responsive variant objects with all property', () => {
    const variants = {
      sm: {
        width: '1rem',
        height: '1rem',
      },
      md: {
        width: '2rem',
        height: '2rem',
      },
      all: {
        backgroundColor: 'blue',
      },
    };

    const Styled = styled.div<{ size: Record<string, string> }>`
      ${(props) => variant(props.size, variants)};
    `;

    const tree = mount(<Styled size={{ xss: 'sm', md: 'md' }} />);

    expect(tree).toHaveStyleRule('background-color', 'blue', {
      media: mq('xss', true),
    });
    expect(tree).toHaveStyleRule('background-color', 'blue', {
      media: mq('md', true),
    });

    expect(tree).toHaveStyleRule('width', '1rem', {
      media: mq('xss', true),
    });
    expect(tree).toHaveStyleRule('height', '1rem', {
      media: mq('xss', true),
    });
    expect(tree).toHaveStyleRule('width', '2rem', {
      media: mq('md', true),
    });
    expect(tree).toHaveStyleRule('height', '2rem', {
      media: mq('md', true),
    });
  });
  describe('style order', () => {
    it('overrides "all" prop (string)', () => {
      const variants = {
        sm: css`
          width: 1rem;
          height: 1rem;
        `,
        md: css`
          width: 2rem;
          height: 2rem;
        `,
        all: css`
          width: 5rem;
        `,
      };

      const Styled = styled.div<{ size: string }>`
        ${(props) => variant(props.size, variants)};
      `;

      const tree = mount(<Styled size="sm" />);
      expect(tree).toHaveStyleRule('width', '1rem'); // sm variant width overrides all prop
      expect(tree).toHaveStyleRule('height', '1rem');
    });
    it('overrides "all" prop (responsive object)', () => {
      const variants = {
        sm: {
          width: '1rem',
          height: '1rem',
        },
        md: {
          width: '2rem',
          height: '2rem',
        },
      };

      const Styled = styled.div<{ size: Record<string, string> }>`
        ${(props) => variant(props.size, variants)};
      `;

      const tree = mount(<Styled size={{ xss: 'sm', md: 'md' }} />);
      expect(tree).toHaveStyleRule('width', '1rem', {
        media: mq('xss', true),
      });
      expect(tree).toHaveStyleRule('height', '1rem', {
        media: mq('xss', true),
      });
      expect(tree).toHaveStyleRule('width', '2rem', {
        media: mq('md', true),
      });
      expect(tree).toHaveStyleRule('height', '2rem', {
        media: mq('md', true),
      });
    });
    it('responsive variant objects with all property', () => {
      const variants = {
        sm: {
          width: '1rem',
          height: '1rem',
        },
        md: {
          width: '2rem',
          height: '2rem',
        },
        all: {
          width: '0.5rem',
        },
      };

      const Styled = styled.div<{ size: Record<string, string> }>`
        ${(props) => variant(props.size, variants)};
      `;

      const tree = mount(<Styled size={{ xss: 'sm', md: 'md' }} />);
      expect(tree).toHaveStyleRule('width', '1rem', {
        media: mq('xss', true),
      });
      expect(tree).toHaveStyleRule('height', '1rem', {
        media: mq('xss', true),
      });
      expect(tree).toHaveStyleRule('width', '2rem', {
        media: mq('md', true),
      });
      expect(tree).toHaveStyleRule('height', '2rem', {
        media: mq('md', true),
      });
    });
  });
});
