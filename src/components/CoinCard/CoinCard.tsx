/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import SVG from 'react-inlinesvg';
import { token } from '@/utils';
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
              <Body mr="xss">{tickerData.name}</Body>
              <Body color="grey.600">{tickerData.symbol}</Body>
            </Flex>

            <Body color="grey.500">7d</Body>
          </Flex>
          <Flex pl="sm" pt="xs">
            <Header as="h4" fontFamily="text" fontWeight="regular" m="0">
              $
              {tickerData.quotes.USD.price.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Header>
            <Caption
              ml="xss"
              fontSize="captionLg"
              fontWeight="semiBold"
              color={
                tickerData.quotes.USD.percent_change_7d
                  .toString()
                  .substr(0, 1) === '-'
                  ? 'red.600'
                  : 'green.600'
              }
            >
              {tickerData.quotes.USD.percent_change_7d
                .toString()
                .substr(0, 1) === '-'
                ? `${tickerData.quotes.USD.percent_change_7d.toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    },
                  )}%`
                : `+${tickerData.quotes.USD.percent_change_7d.toLocaleString(
                    undefined,
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    },
                  )}%`}
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
                  ? token.colors('green.600')
                  : token.colors('red.600')};
              }
            `}
          >
            <SVG
              src={`https://graphs.coinpaprika.com/currency/chart/${tickerData.id}/7d/chart.svg`}
              width="100%"
              height="3rem"
            />
          </Box>
        </Box>
      )}
    </>
  );
};

export default CoinCard;
