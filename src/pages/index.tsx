/** @jsxImportSource @emotion/react */
import { Layout, Button } from '@/components';
import { token, colorSwatches } from '@/utils';
import { css } from '@emotion/react';

const redObj = colorSwatches('#f44336');

const Home = () => (
  <Layout>
    <>
      {Object.values(redObj).map((i) => (
        <div
          key={i}
          css={css`
            width: 20rem;
            height: 10rem;
            background: ${i};
            position: relative;
            color: white;
          `}
        >
          {i}
        </div>
      ))}
    </>
  </Layout>
);

export default Home;
