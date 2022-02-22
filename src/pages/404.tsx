/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import { ThemeProvider, Global } from '@emotion/react';
import { GlobalTheme, GlobalReset } from '@/UI';
import { Header, Flex, Body, Image, Button } from '@/components';

const Error404Page = () => {
  const router = useRouter();
  return (
    <>
      <Global styles={GlobalReset} />
      <ThemeProvider theme={GlobalTheme}>
        <Flex
          width="100%"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          overflow="hidden"
          fontFamily="text"
          textAlign="center"
        >
          <Flex
            flexDirection="column"
            textAlign="center"
            p="lg"
            pb="xl"
            mb="xl"
          >
            <Image
              src="/Error.svg"
              alt="Error"
              mb="-lg"
              width={{ xss: '100%', sm: 'maxLayoutSm' }}
            />
            <Header as="h1" lineHeight="115%" m="sm">
              Oops
            </Header>
            <Body
              mb="md"
              color="grey.500"
              maxWidth={{ xss: '15rem', sm: '20rem' }}
              mx="auto"
            >
              Sorry we couldn&apos;t find what you were looking for.
            </Body>
            <Button
              size="lg"
              mx="auto"
              onClick={() => router.push('/')}
              color="secondary"
              variant="outlined"
            >
              Back to Nixode
            </Button>
          </Flex>
        </Flex>
      </ThemeProvider>
    </>
  );
};

export default Error404Page;
