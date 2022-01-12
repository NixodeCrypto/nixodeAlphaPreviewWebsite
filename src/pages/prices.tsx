/* @jsxImportSource @emotion/react */
import { useState, useEffect, useMemo, Dispatch, SetStateAction } from 'react';
import Router from 'next/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { css } from '@emotion/react';
import { ChevronLeft, ChevronRight, Search } from 'react-feather';
import {
  Flex,
  Box,
  Layout,
  CoinTable,
  IconButton,
  Body,
  Header,
  Span,
  Input,
  Button,
} from '@/components';

export interface IProps {
  cryptoData: Record<string, any>;
  globalMarketData: Record<string, any>;
  initialPage: number;
}

const Pagination = ({
  page,
  setPage,
  start,
  max,
  siblingCount,
}: {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  start: number;
  max: number;
  siblingCount: number;
}) => {
  const pageRange = Array(max - start + 1)
    .fill(0)
    .map((_, idx) => start + idx);

  const changePage = (newPageNum: number) => {
    if (newPageNum === page) return;
    setPage(newPageNum);
  };

  const Dots = () => (
    <Flex alignItems="flex-end" pb="xs" px="xss">
      ...
    </Flex>
  );

  const TextIconButton = (props: { children: number }) => {
    const { children } = props;
    return (
      <IconButton
        bg={page === children && 'primary.500'}
        color={page === children ? 'white' : 'black'}
        fontWeight={page === children ? 'bold' : 'regular'}
        border="none"
        onClick={() => changePage(children)}
        css={
          page === children &&
          css`
            &:hover {
              border: none;
            }
          `
        }
      >
        {children}
      </IconButton>
    );
  };

  return (
    <>
      <Flex horizontalGap="xs" display={{ xss: 'none', sm: 'flex' }}>
        {page !== 1 && (
          <IconButton border="none" onClick={() => changePage(page - 1)}>
            <ChevronLeft />
          </IconButton>
        )}
        {page < 5 && (
          <>
            {pageRange
              .slice(pageRange[0] - 1, Math.max(page + 1, 3))
              .map((i) => (
                <TextIconButton key={i}>{i}</TextIconButton>
              ))}
            <Dots />
            <TextIconButton>{pageRange[pageRange.length - 1]}</TextIconButton>
          </>
        )}
        {page >= 5 && page <= pageRange[pageRange.length - 1] - 4 && (
          <>
            <TextIconButton>{pageRange[0]}</TextIconButton>
            <Dots />
            {pageRange
              .slice(page - siblingCount - 1, page + siblingCount)
              .map((i) => (
                <TextIconButton key={i}>{i}</TextIconButton>
              ))}
            <Dots />
            <TextIconButton>{pageRange[pageRange.length - 1]}</TextIconButton>
          </>
        )}
        {page > pageRange[pageRange.length - 1] - 4 && (
          <>
            <TextIconButton>{pageRange[0]}</TextIconButton>
            <Dots />
            {pageRange
              .slice(
                Math.min(pageRange[pageRange.length - 1] - 3, page - 2),
                pageRange[pageRange.length - 1],
              )
              .map((i) => (
                <TextIconButton key={i}>{i}</TextIconButton>
              ))}
          </>
        )}
        {page !== max && (
          <IconButton border="none" onClick={() => changePage(page + 1)}>
            <ChevronRight />
          </IconButton>
        )}
      </Flex>
      <Flex display={{ xss: 'flex', sm: 'none' }}>
        {page !== 1 && (
          <IconButton border="none" onClick={() => changePage(page - 1)}>
            <ChevronLeft />
          </IconButton>
        )}
        <Flex alignItems="center" fontFamily="text" mx="xs">
          <Body fontWeight="bold" mr="0.35rem">
            {page}
          </Body>{' '}
          of {max}
        </Flex>
        {page !== max && (
          <IconButton border="none" onClick={() => changePage(page + 1)}>
            <ChevronRight />
          </IconButton>
        )}
      </Flex>
    </>
  );
};

const Prices = ({ cryptoData, globalMarketData, initialPage }: IProps) => {
  const [page, setPage] = useState(initialPage);
  const [coinData, setCoinData] = useState(cryptoData.coins);
  const [timeResolution, setTimeResolution] = useState(['1H', '1h']);
  const [assetCategory, setAssetCategory] = useState('All Assets');
  const [loading, setLoading] = useState(false);

  /*
   * first value is the alias for the page and the secound value
   * is the end key to match with the crypto object's percentage change
   * (e.g. 7d -> 'percent_change_7d')
   * */
  const possibleTimeResolutions = [
    ['1H', '1h'],
    ['1D', '24h'],
    ['1W', '7d'],
    ['1M', '30d'],
    ['1Y', '1y'],
  ];

  const possibleAssetCategories = ['All Assets', 'Gainers', 'Losers'];

  const handleChangeAssetCategory = (currAssetCategory: string) => {
    if (currAssetCategory !== assetCategory) {
      setAssetCategory(currAssetCategory);
    }
  };

  const handleChangeTimeResolution = (currTimeResolution: string[]) => {
    if (currTimeResolution[0] !== timeResolution[0]) {
      setTimeResolution(currTimeResolution);
    }
  };

  useEffect(() => {
    setLoading(true);
    const sortByLosers =
      assetCategory === 'Losers'
        ? `&sortBy=quotes.USD.percent_change_${timeResolution[1]}-ascending`
        : '';

    const sortBy =
      assetCategory === 'Gainers'
        ? `&sortBy=quotes.USD.percent_change_${timeResolution[1]}-descending`
        : sortByLosers;

    axios
      .get(
        `${process.env.NEXT_PUBLIC_SERVER_API}/api/crypto/getAllCoins?page=${page}${sortBy}`,
      )
      .then((res) => {
        setCoinData(res.data.coins);
        setLoading(false);
      })
      .catch(() => {
        throw new Error();
      });
  }, [page, timeResolution, assetCategory]);

  useEffect(() => {
    setPage(1);
  }, [timeResolution, assetCategory]);

  useEffect(() => {
    Router.push(`/prices?page=${page}`, undefined, { shallow: true });
  }, [page]);

  return (
    <Layout>
      <Box screenMaxWidth="md" mx="auto" px={{ lg: 'xl' }}>
        <Flex
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          textAlign="center"
          pb="xl"
          px="sm"
        >
          <Header
            as="h5"
            textTransform="uppercase"
            letterSpacing="sm"
            color="grey.600"
            pt="lg"
            mb="0"
          >
            In the past 24 hours
          </Header>
          <Header as="h2" mt="0" mb="sm">
            Market is{' '}
            {globalMarketData.market_cap_change_24h < 0 ? 'down' : 'up'}{' '}
            <Span
              color={
                globalMarketData.market_cap_change_24h < 0
                  ? 'red.800'
                  : 'green.800'
              }
            >
              {/* removes negative sign from number */}
              {(globalMarketData.market_cap_change_24h < 0
                ? parseFloat(
                    globalMarketData.market_cap_change_24h
                      .toString()
                      .substring(1),
                  )
                : globalMarketData.market_cap_change_24h
              ).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
              %
            </Span>
          </Header>
          <Input
            startIcon={<Search />}
            label="Search all assets"
            size="lg"
            width={{ xss: 'max', sm: 'inputXl' }}
          />
        </Flex>
        <Flex
          pb="sm"
          justifyContent="space-between"
          px={{ xss: 'sm', lg: '0' }}
        >
          <Flex horizontalGap="xss">
            {possibleAssetCategories.map((i) => (
              <Button
                key={i}
                borderRadius="xl"
                size="sm"
                px="sm"
                variant={i === assetCategory ? 'solid' : 'text'}
                color={i === assetCategory ? 'secondary' : 'grey'}
                onClick={() => handleChangeAssetCategory(i)}
              >
                {i}
              </Button>
            ))}
          </Flex>
          <Flex horizontalGap="xss">
            {possibleTimeResolutions.map((i) => (
              <Button
                key={i[0]}
                borderRadius="xl"
                size="sm"
                px="sm"
                variant={i[0] === timeResolution[0] ? 'solid' : 'text'}
                color={i[0] === timeResolution[0] ? 'secondary' : 'grey'}
                onClick={() => handleChangeTimeResolution(i)}
              >
                {i[0]}
              </Button>
            ))}
          </Flex>
        </Flex>
        {useMemo(
          () => (
            <CoinTable
              tickerData={coinData}
              extended
              timeResolution={timeResolution[1]}
            />
          ),
          [coinData, timeResolution],
        )}
        <Flex justifyContent="center" pt="md">
          <Pagination
            page={page}
            setPage={setPage}
            max={cryptoData.totalPageCount}
            start={1}
            siblingCount={1}
          />
        </Flex>
      </Box>
    </Layout>
  );
};

export default Prices;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page } = query;
  const initialPage = parseInt(page as string, 10)
    ? parseInt(page as string, 10)
    : 1;

  const cryptoRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/crypto/getAllCoins?page=${initialPage}`,
  );
  const cryptoData = await cryptoRes.json();

  const globalMarketRes = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_API}/api/crypto/getGlobalMarketData`,
  );

  const globalMarketData = await globalMarketRes.json();

  return {
    props: { cryptoData, globalMarketData, initialPage },
  };
};
