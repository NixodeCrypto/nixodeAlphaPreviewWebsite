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
  Link,
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

  // temporary array, will be replaced with api call
  const learnHowToInvestArr = [
    [
      'What is Digital Finance and why is it important',
      'why-is-digital-finance-important',
    ],
    [
      'What are the most common trading techniques',
      'what-are-the-most-common-trading-techniques',
    ],
  ];
  return (
    <Layout>
      <Box>
        <Flex
          px={{ xss: 'sm', sm: '0' }}
          pt={{ xss: 'lg', md: '0' }}
          mt={{ md: '-lg' }}
          py="lg"
          screenMaxWidth={{ xss: 'xs', sm: '100%' }}
          ml={{ xss: 'auto', sm: 'lg', md: '0' }}
          mr={{ xss: 'auto', sm: '0' }}
          position="relative"
          alignItems="center"
          justifyContent={{ md: 'center' }}
          overflow="hidden"
        >
          <Box
            screenMaxWidth={{ sm: 'xs' }}
            mr={{ xss: '0', sm: 'xl' }}
            width={{ sm: '25rem' }}
            minWidth={{ sm: '25rem' }}
          >
            <Flex flexDirection="column" verticalGap="sm" mt="sm" mb="md">
              <Header as="h1">Stay on top of crypto prices</Header>
              <Body color="grey.900" mt="xs">
                Monitor crypto prices and be notified at certain price points.
                Sign up and get started for free today.
              </Body>
            </Flex>
            <Flex
              flexDirection={{ xss: 'column', sm: 'row' }}
              verticalGap={{ xss: 'xs', sm: '0' }}
              horizontalGap={{ xss: '0', sm: 'xs' }}
            >
              <Input label="Email Address" size="lg" width="max" />
              <Button size="lg" width={{ xss: 'max', sm: 'auto' }}>
                Get Started
              </Button>
            </Flex>
          </Box>
          <Image
            src="/AboveFold.svg"
            alt="Cryptocurrency"
            display={{ xss: 'none', sm: 'block' }}
            ml={{ sm: 'md' }}
            width={{ xss: 'img', lg: 'imgXl' }}
            minWidth={{ xss: 'img', lg: 'imgXl' }}
            my="auto"
          />
        </Flex>
        <Flex
          pt={{ xss: 'sm', md: '0' }}
          mt={{ md: '-lg' }}
          overflow="scroll"
          css={css`
            ::-webkit-scrollbar {
              width: 0; /* Remove scrollbar space */
              background: transparent; /* Optional: just make scrollbar invisible */
            }
            scrollbar-width: none; /* Firefox Support */
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
          `}
          justifyContent={{ md: 'center' }}
        >
          {data.slice(0, 4).map((i: Record<string, any>, idx: number) => (
            <Box
              key={i.id}
              pl={idx === 0 ? { xss: 'sm', sm: 'lg', md: 'sm' } : 'sm'}
              pr={idx === 3 && { xss: 'sm', sm: 'lg', md: 'sm' }}
              css={css`
                scroll-snap-align: start;
              `}
            >
              <CoinCard tickerData={i} />
            </Box>
          ))}
        </Flex>
        <Box my="md">
          <Flex
            textAlign={{ xss: 'center', sm: 'left' }}
            px="sm"
            mb="md"
            screenMaxWidth={{ xss: 'xs', sm: '100%' }}
            mx="auto"
            flexDirection={{ xss: 'column', sm: 'row-reverse' }}
            position="relative"
            alignItems="center"
            justifyContent={{ md: 'center' }}
            overflow="hidden"
          >
            <Box
              screenMaxWidth={{ sm: 'xs' }}
              ml={{ sm: 'xl' }}
              mr={{ sm: 'xs', md: '0' }}
              width={{ sm: '25rem' }}
              minWidth={{ sm: '25rem' }}
            >
              <Header as="h1">Get insight on trending coins</Header>
              <Body color="grey.900" mt="xs">
                View what coins are the rage in the market and plan to invest
                with the help of our services
              </Body>
              <Button size="lg" display={{ xss: 'none', sm: 'flex' }} mt="md">
                Start My Portfolio
              </Button>
            </Box>
            <Image
              src="/TrendingCoins.svg"
              alt="CoverImg"
              width={{ xss: 'max', sm: 'img', lg: 'imgXl' }}
              minWidth={{ xss: 'max', sm: 'img', lg: 'imgXl' }}
              my="auto"
            />
          </Flex>
          <Box screenMaxWidth="md" mx="auto" px={{ lg: 'xl' }}>
            <CoinTable tickerData={data.slice(4, 9)} />
          </Box>
        </Box>
        <Box
          mt="xl"
          screenMaxWidth={{ xss: 'xs', sm: '100%' }}
          mx="auto"
          px={{ xss: 'sm', sm: '0' }}
        >
          <Box textAlign="center" px="sm">
            <Header as="h1" wordWrap="break-word" whiteSpace="normal">
              Manage your cryptocurrency
            </Header>
            <Body color="grey.900" mt="xs" maxWidth="20rem" mx="auto">
              Nixode creates a simple environment to keep track of all your
              investments
            </Body>
          </Box>
          <Flex
            flexDirection={{ xss: 'column-reverse', sm: 'row-reverse' }}
            mt={{ xss: '-sm', sm: 'sm' }}
            pb="lg"
            overflow="hidden"
            alignItems="center"
            justifyContent={{ md: 'center' }}
            ml={{ md: 'md' }}
          >
            <Box
              width={{ sm: '25rem' }}
              minWidth={{ sm: '25rem' }}
              ml={{ sm: 'lg' }}
              mr={{ sm: 'xl' }}
            >
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
            </Box>

            <Image
              src="/ManageCrypto.svg"
              alt="Managing Crypto"
              width={{ xss: 'max', sm: 'img', lg: 'imgXl' }}
              minWidth={{ xss: 'max', sm: 'img', lg: 'imgXl' }}
              my="auto"
            />
          </Flex>
        </Box>

        <Box
          my="md"
          maxWidth={{ xss: '25rem', sm: '100%' }}
          mx="auto"
          px={{ xss: 'sm', sm: '0' }}
        >
          <Box textAlign="center" px="sm" mb="-sm">
            <Header as="h1">Learn how to properly invest</Header>
            <Body color="grey.900" mt="xs" maxWidth="25rem" mx="auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sodales sem id velit hendrerit lacinia.
            </Body>
          </Box>
          <Flex
            flexDirection={{ xss: 'column-reverse', sm: 'row' }}
            overflow="hidden"
            pl={{ sm: 'xl', md: '0' }}
            mx="auto"
            alignItems="center"
            justifyContent={{ md: 'center' }}
          >
            <Flex
              flexDirection="column"
              verticalGap="lg"
              width={{ sm: '25rem' }}
              minWidth={{ sm: '25rem' }}
              pr={{ sm: 'md' }}
            >
              {learnHowToInvestArr.map((i) => (
                <Box key={i[0]}>
                  <Header as="h3" m="0" mb="xss">
                    {i[0]}
                  </Header>
                  <Link href={i[1]} color="blue.900">
                    Read More
                  </Link>
                </Box>
              ))}
            </Flex>

            <Image
              src="/PiggyBank.svg"
              alt="Piggy Bank"
              width={{ xss: 'max', sm: 'img', lg: 'imgXl' }}
              minWidth={{ xss: 'max', sm: 'img', lg: 'imgXl' }}
              my="auto"
            />
          </Flex>
        </Box>

        <Flex
          mt="xl"
          py={{ xss: 'lg', lg: 'sm' }}
          bg="secondary.500"
          color="white"
          justifyContent={{ xss: 'center', sm: 'flex-start', md: 'center' }}
          alignItems="center"
          flexDirection="row"
          px="md"
          position="relative"
          overflow="hidden"
        >
          <Box
            width={{ sm: '25rem' }}
            minWidth={{ sm: '25rem' }}
            zIndex="2"
            pr={{ lg: 'md' }}
          >
            <Header as="h1">Join our newsletter</Header>
            <Body>Nixode offers rich knowledge in cryptocurrency trading</Body>

            <Input
              label="Email Address"
              size="lg"
              width="max"
              mb="xs"
              mt="md"
            />
            <Button size="lg" width="max">
              Get Started
            </Button>
          </Box>
          <Image
            mb={{ md: '-5rem', lg: '-4.4rem' }}
            top="0"
            right={{ xss: '-12rem', md: '-3rem' }}
            position={{ xss: 'absolute', md: 'relative' }}
            display={{ xss: 'none', sm: 'block' }}
            src="/ChartNewsletter.svg"
            alt="Newsletter"
            width={{ xss: 'max', sm: 'img', lg: 'imgXl' }}
            minWidth={{ xss: 'max', sm: 'img', lg: 'imgXl' }}
          />
        </Flex>
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
