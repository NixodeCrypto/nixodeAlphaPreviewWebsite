/** @jsxImportSource @emotion/react */
import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { ThemeProvider, Global } from '@emotion/react';
import { GlobalTheme, GlobalReset } from '@/UI';
import { Header, Flex, Body, Image, Button } from '@/components';

const ErrorPage = ({ statusCode }: { statusCode?: number }) => {
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
              {statusCode === 404
                ? "Sorry we couldn't find what you were looking for."
                : 'An Unexpected Error Occurred. Please try this operation again later'}
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

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const errStatus = err ? err.statusCode : 500;
  const statusCode = res ? res.statusCode : errStatus;
  return { statusCode };
};

export default ErrorPage;
