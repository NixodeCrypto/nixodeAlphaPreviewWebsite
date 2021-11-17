/** @jsxImportSource @emotion/react */
import { Layout, Button, Input, Flex, Header, Box, Body } from '@/components';

const Home = () => (
  <Layout>
    <Box px="sm">
      <Flex flexDirection="column" verticalGap="sm" mt="sm" mb="md">
        <Header as="h1">Stay on top of crypto prices</Header>
        <Body color="grey.900">
          Monitor crypto prices and be notified at certain price points. Sign up
          and get started for free today.
        </Body>
      </Flex>
      <Flex flexDirection="column" verticalGap="xs">
        <Input label="Email Address" size="lg" width="max" />
        <Button size="lg" width="max">
          Get Started
        </Button>
      </Flex>
    </Box>
  </Layout>
);

export default Home;
