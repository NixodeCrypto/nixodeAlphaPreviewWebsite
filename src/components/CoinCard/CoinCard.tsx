/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SVG from 'react-inlinesvg';
import { token, assetPrice } from '@/utils';
import Box from '@/components/Box';
import Flex from '@/components/Flex';
import Body from '@/components/Body';
import Image from '@/components/Image';
import Header from '@/components/Header';
import Caption from '@/components/Caption';

export interface IProps {
  tickerData: Record<string, any>;
}

const CoinCard = (props: IProps) => {
  const { tickerData } = props;
  return (
    <>
      {tickerData && (
        <Box
          data-testid="wrapper"
          key={tickerData.id}
          border="sm"
          borderColor="grey.100"
          width={{ xss: 'card', lg: 'cardXl' }}
          height={{ xss: 'card', lg: 'cardXl' }}
          borderRadius="sm"
          position="relative"
          minWidth={{ xss: 'card', lg: 'cardXl' }}
        >
          <Flex justifyContent="space-between" p="sm">
            <Flex alignItems="center">
              <Image
                src={tickerData.img}
                alt={tickerData.name}
                width="sm"
                mr="xs"
              />
              <Body mr="xss" data-testid="name">
                {tickerData.name}
              </Body>
              <Body color="grey.600" data-testid="symbol">
                {tickerData.symbol}
              </Body>
            </Flex>

            <Body color="grey.500">7d</Body>
          </Flex>
          <Flex pl="sm" pt="xs">
            <Header
              as="h4"
              fontFamily="text"
              fontWeight="regular"
              m="0"
              data-testid="price"
            >
              ${assetPrice(tickerData.quotes.USD.price)}
            </Header>
            <Caption
              data-testid="priceChange"
              ml="xss"
              fontSize="captionLg"
              fontWeight="semiBold"
              color={
                tickerData.quotes.USD.percent_change_7d >= 0
                  ? 'green.800'
                  : 'red.800'
              }
            >
              {tickerData.quotes.USD.percent_change_7d < 0
                ? `${assetPrice(tickerData.quotes.USD.percent_change_7d)}%`
                : `+${assetPrice(tickerData.quotes.USD.percent_change_7d)}%`}
            </Caption>
          </Flex>
          <Box
            ml="sm"
            mr="md"
            mt="md"
            css={css`
              & * {
                fill: none;
                stroke-width: 0.3rem;
              }
              & polyline {
                stroke: ${tickerData.quotes.USD.percent_change_7d > 0
                  ? token.colors('green.800')
                  : token.colors('red.800')};
              }
            `}
          >
            <SVG
              src={`${process.env.NEXT_PUBLIC_GRAPH_API}/currency/chart/${tickerData.id}/7d/chart.svg`}
              width="100%"
              height="48px"
            />
          </Box>
        </Box>
      )}
    </>
  );
};

CoinCard.displayName = 'CoinCard';
export default CoinCard;
