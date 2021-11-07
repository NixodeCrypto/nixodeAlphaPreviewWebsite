/** @jsxImportSource @emotion/react */
import { Layout, Button, Input, Flex, Header } from '@/components';
import { token } from '@/utils';
import responsiveStyles from '@/system/responsiveStyles/responsiveStyles';

const Home = () => {
  const a = { xss: 'sm', xs: 'md', md: '3rem', lg: 'lg' };
  const scale = ['height', 'width', 'paddingRight'];

  console.log(responsiveStyles(a, scale));
  return (
    <Layout>
      <Header as="h1">Stay on top of cryptocurrency prices</Header>
    </Layout>
  );
};

export default Home;
