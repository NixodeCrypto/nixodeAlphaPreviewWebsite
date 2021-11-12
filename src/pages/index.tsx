/** @jsxImportSource @emotion/react */
import { Layout, Button, Input, Flex, Header } from '@/components';

const Home = () => (
  <Layout>
    <Header as="h1">Stay on top of crypto prices</Header>
    <Flex justifyContent="flex-start" alignItems="flex-start">
      <Button size="md" variant="outlined">
        Test
      </Button>
      <Input size="md" label="Test" />
    </Flex>
  </Layout>
);

export default Home;
