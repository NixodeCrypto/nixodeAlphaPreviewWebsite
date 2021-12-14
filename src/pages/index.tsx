/** @jsxImportSource @emotion/react */
import { GetServerSideProps } from 'next';
import {
  Layout,
  Button,
  Input,
  Flex,
  Header,
  Box,
  Body,
  Image,
  CoinTable,
  CoinCard,
} from '@/components';

export interface IProps {
  data: Record<string, any>;
}

const Home = ({ data }: IProps) => (
  <Layout>
    <Box>
      <Box px="sm" py="md">
        <Flex flexDirection="column" verticalGap="sm" mt="sm" mb="md">
          <Header as="h1">Stay on top of crypto prices</Header>
          <Body color="grey.900" mt="xs">
            Monitor crypto prices and be notified at certain price points. Sign
            up and get started for free today.
          </Body>
        </Flex>
        <Flex flexDirection="column" verticalGap="xs">
          <Input label="Email Address" size="lg" width="max" />
          <Button size="lg" width="max">
            Get Started
          </Button>
        </Flex>
      </Box>
      <Box overflow="scroll" py="sm" ml="xs" mr="sm">
        <Flex>
          {data.slice(0, 5).map((i: any) => (
            <Box mx="xs" key={i.id}>
              <CoinCard tickerData={i} />
            </Box>
          ))}
        </Flex>
      </Box>
      <Box mt="lg">
        <Box textAlign="center" px="sm" mb="md">
          <Header as="h1">Get insight on trending coins</Header>
          <Body color="grey.900" mt="xs">
            View what coins are the rage in the market and plan to invest with
            the help of our services
          </Body>
          <Image src="/TrendingCoins.svg" alt="CoverImg" width="max" />
        </Box>
        <CoinTable tickerData={data.slice(0, 5)} />
      </Box>
    </Box>
  </Layout>
);

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `${process.env.SERVER_API}/api/crypto/getPreviewCoins`,
  );
  const data = await res.json();

  return {
    props: { data },
  };
};
