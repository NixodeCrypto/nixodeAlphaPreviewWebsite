/** @jsxImportSource @emotion/react */
import { GetServerSideProps } from 'next';
import { css } from '@emotion/react';
import { List, Calendar, Bookmark } from 'react-feather';
import { token } from '@/utils';
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

const Home = ({ data }: IProps) => {
  const manageCryptoArr = [
    [
      <List
        color={token.colors('secondary.500')}
        strokeWidth="0.15rem"
        key="list"
      />,
      'View price listings',
      'Nixode creates a simple environment to keep track of your coins',
    ],

    [
      <Calendar
        color={token.colors('secondary.500')}
        strokeWidth="0.15rem"
        key="calendar"
      />,
      'Track crypto prices',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius.',
    ],
    [
      <Bookmark
        color={token.colors('secondary.500')}
        strokeWidth="0.15rem"
        key="bookmark"
      />,
      'Learn how to trade',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean varius.',
    ],
  ];
  return (
    <Layout>
      <Box>
        <Box px="sm" py="lg">
          <Flex flexDirection="column" verticalGap="sm" mt="sm" mb="md">
            <Header as="h1">Stay on top of crypto prices</Header>
            <Body color="grey.900" mt="xs">
              Monitor crypto prices and be notified at certain price points.
              Sign up and get started for free today.
            </Body>
          </Flex>
          <Flex flexDirection="column" verticalGap="xs">
            <Input label="Email Address" size="lg" width="max" />
            <Button size="lg" width="max">
              Get Started
            </Button>
          </Flex>
        </Box>
        <Flex
          py="md"
          overflow="scroll"
          css={css`
            ::-webkit-scrollbar {
              width: 0; /* Remove scrollbar space */
              background: transparent; /* Optional: just make scrollbar invisible */
            }
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
          `}
        >
          {data.slice(0, 5).map((i: Record<string, any>, idx: number) => (
            <Box
              key={i.id}
              pl="sm"
              pr={idx === 4 && 'sm'}
              width="100%"
              css={css`
                scroll-snap-align: start;
              `}
            >
              <CoinCard tickerData={i} />
            </Box>
          ))}
        </Flex>
        <Box my="md">
          <Box textAlign="center" px="sm" mb="md">
            <Header as="h1">Get insight on trending coins</Header>
            <Body color="grey.900" mt="xs">
              View what coins are the rage in the market and plan to invest with
              the help of our services
            </Body>
            <Image src="/TrendingCoins.svg" alt="CoverImg" width="max" />
          </Box>
          <CoinTable tickerData={data.slice(5, 10)} />
        </Box>
        <Box mt="xl">
          <Box textAlign="center" px="sm" mb="md">
            <Header as="h1" wordWrap="break-word" whiteSpace="normal">
              Manage your cryptocurrency
            </Header>
            <Body color="grey.900" mt="xs">
              Nixode creates a simple environment to keep track of all your
              investments
            </Body>
            <Image src="/ManageCrypto.svg" alt="CoverImg" width="max" />
          </Box>
          <Flex flexDirection="column">
            {manageCryptoArr.map((i) => (
              <Flex flexDirection="row" mx="sm" key={i[1] as string} pb="md">
                <Flex
                  mt="sm"
                  borderRadius="50%"
                  minWidth="lg"
                  width="lg"
                  height="lg"
                  justifyContent="center"
                  alignItems="center"
                  boxShadow="reg"
                >
                  {i[0]}
                </Flex>
                <Box ml="sm">
                  <Header as="h3" lineHeight="120%" mb="xs">
                    {i[1]}
                  </Header>
                  <Body color="grey.900">{i[2]}</Body>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Box>
      </Box>
    </Layout>
  );
};

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
