/** @jsxImportSource @emotion/react */
import { Layout, Button, Input, Flex, Header } from '@/components';
import { token } from '@/utils';
import responsiveStyles from '@/system/responsiveStyles/responsiveStyles';

const Home = () => {
  const a = { xss: '1rem', xs: '2rem', md: '3rem', lg: '4rem' };
  const scale = 'width';

  console.log(responsiveStyles(a, scale));
  return (
    <Layout>
      <Header as="h1">Stay on top of cryptocurrency prices</Header>
      <Input
        label="Hello World"
        size="lg"
        width={{ xss: '100%', xs: 'undefined' }}
      />
    </Layout>
  );
};

export default Home;
