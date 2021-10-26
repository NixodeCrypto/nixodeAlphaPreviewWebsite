/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Layout, Button, Flex } from '@/components';

const Home = () => (
  <Layout>
    <>
      <div
        css={css`
          padding-top: 5rem;
        `}
      >
        <Button color="grey">Hello</Button>
      </div>
    </>
  </Layout>
);

export default Home;
