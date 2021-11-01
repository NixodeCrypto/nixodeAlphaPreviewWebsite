/** @jsxImportSource @emotion/react */
import { Layout, Button, Input, Flex, Header } from '@/components';
import { token } from '@/utils';

const Home = () => (
  <Layout>
    <Header as="h1">Stay on top of cryptocurrency prices</Header>
    <Input label="Hello World" size="lg" />
  </Layout>
);

export default Home;
