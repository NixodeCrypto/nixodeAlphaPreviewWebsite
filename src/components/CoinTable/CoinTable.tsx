/* @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import SVG from 'react-inlinesvg';
import { css } from '@emotion/react';
import Image from '@/components/Image';
import Flex from '@/components/Flex';
import Body from '@/components/Body';
import Box from '@/components/Box';
import { token, mq, assetPrice } from '@/utils';
import { space, border, layout, typography } from '@/system';

export interface IProps {
  tickerData: Record<string, any>;
  extended?: boolean;
  timeResolution?: string;
}

const Table = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  ${mq('md')} {
    border-style: hidden;
    border-radius: ${token.radii('sm')};
    box-shadow: 0 0 0 2px ${token.colors('grey.100')};
    border-color: ${token.colors('grey.100')};
  }
  ${mq('xss')} {
    display: block;
    overflow-x: scroll;
  }
  ${mq('xs')} {
    display: table;
    overflow-x: auto;
  }
`;

const Tr = styled.tr`
  transition: ${token.transition('standard')};
  ${(props) =>
    !props.header &&
    css`
      &:hover {
        background-color: ${token.colors('grey.50')};
        transition: ${token.transition('standard')};
      }
    `}
  ${space};
  ${border};
`;

const Thead = styled.thead`
  ${layout};
`;

const Td = styled.td`
  ${space};
  ${layout};
  vertical-align: middle;
  font-family: ${token.fonts('text')};
`;

const Th = styled.th`
  font-family: ${token.fonts('title')};
  font-size: ${token.fontSizes('captionLg')};
  font-weight: ${token.fontWeights('regular')};
  padding-top: ${token.space('sm')};
  padding-bottom: ${token.space('sm')};
  color: ${token.colors('grey.900')};
  ${typography};
  ${space};
  ${layout};
`;

const percentFormatter = (percentage: number) => {
  if (percentage === 0) {
    return `${percentage.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}%`;
  }
  return percentage.toString().substr(0, 1) === '-'
    ? `${percentage.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}%`
    : `+${percentage.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}%`;
};

const CoinTable = (props: IProps) => {
  const { tickerData, extended, timeResolution = '24h' } = props;

  return (
    <Table>
      <Thead
        display={{ xss: 'none', sm: 'table-header-group' }}
        data-testid="TableHeader"
      >
        <Tr borderTop="sm" borderColor="grey.100" header>
          <Th textAlign="left" pl="sm">
            Name
          </Th>
          <Th textAlign="right" pr="md">
            Price
          </Th>
          <Th textAlign="right" pr="md">
            Change
          </Th>
          <Th textAlign="center" px="sm">
            Chart (7d)
          </Th>
          {extended && (
            <>
              <Th
                textAlign="right"
                pr="md"
                display={{ xss: 'none', md: 'table-cell' }}
              >
                Volume (24h)
              </Th>
              <Th
                textAlign="right"
                pr="md"
                display={{ xss: 'none', md: 'table-cell' }}
              >
                Market cap
              </Th>
              <Th
                textAlign="right"
                pr="md"
                display={{ xss: 'none', md: 'table-cell' }}
              >
                Supply
              </Th>
            </>
          )}
        </Tr>
      </Thead>
      <tbody>
        {tickerData &&
          tickerData.map((i: any, idx: number) => (
            <Tr
              key={i.id}
              borderTop={!extended ? 'sm' : idx === 0 && 'sm'}
              borderColor="grey.100"
            >
              <Td px="sm" py="sm" data-testid="generalData">
                <Flex alignItems="center">
                  <Image src={i.img} alt={i.name} width="sm" mr="xs" />
                  <Flex
                    flexDirection={{ xss: 'column', sm: 'row' }}
                    alignItems={{ md: 'center' }}
                  >
                    <Body mr={{ sm: 'sm' }}>{i.name}</Body>
                    <Body color="grey.800">{i.symbol}</Body>
                  </Flex>
                </Flex>
              </Td>
              <Td px="md" py="sm" width="md">
                <Flex
                  alignItems="flex-end"
                  justifyContent="flex-end"
                  flexDirection="column"
                >
                  <Body textAlign="right">
                    US${assetPrice(i.quotes.USD.price)}
                  </Body>
                  <Body
                    display={{ sm: 'none' }}
                    color={
                      i.quotes.USD[`percent_change_${timeResolution}`] < 0
                        ? 'red.800'
                        : 'green.800'
                    }
                  >
                    {percentFormatter(
                      i.quotes.USD[`percent_change_${timeResolution}`],
                    )}
                  </Body>
                </Flex>
              </Td>
              <Td
                display={{ xss: 'none', sm: 'table-cell' }}
                px="md"
                py="sm"
                width="md"
              >
                <Flex alignItems="flex-end" flexDirection="column">
                  <Body
                    color={
                      i.quotes.USD[`percent_change_${timeResolution}`] < 0
                        ? 'red.800'
                        : 'green.800'
                    }
                  >
                    {percentFormatter(
                      i.quotes.USD[`percent_change_${timeResolution}`],
                    )}
                  </Body>
                </Flex>
              </Td>
              <Td
                display={{ xss: 'none', sm: 'table-cell' }}
                px="md"
                py="sm"
                width="xl"
                minWidth="xl"
              >
                <Box
                  css={css`
                    & * {
                      fill: none;
                      stroke-width: 0.4rem;
                    }
                    & polyline {
                      stroke: ${token.colors('grey.400')};
                    }
                  `}
                >
                  <SVG
                    src={`${process.env.NEXT_PUBLIC_GRAPH_API}/currency/chart/${i.id}/7d/chart.svg`}
                    width="100%"
                    height="24px"
                  />
                </Box>
              </Td>
              {extended && (
                <>
                  <Td
                    px="md"
                    width="md"
                    py="sm"
                    display={{ xss: 'none', md: 'table-cell' }}
                  >
                    <Flex justifyContent="flex-end" suppressHydrationWarning>
                      US$
                      {Intl.NumberFormat('en-US', {
                        notation: 'compact',
                        maximumFractionDigits: 1,
                      }).format(i.quotes.USD.volume_24h)}
                    </Flex>
                  </Td>
                  <Td
                    px="md"
                    width="md"
                    py="sm"
                    display={{ xss: 'none', md: 'table-cell' }}
                  >
                    <Flex justifyContent="flex-end" suppressHydrationWarning>
                      US$
                      {Intl.NumberFormat('en-US', {
                        notation: 'compact',
                        maximumFractionDigits: 1,
                      }).format(i.quotes.USD.market_cap)}
                    </Flex>
                  </Td>
                  <Td
                    px="md"
                    width="md"
                    py="sm"
                    display={{ xss: 'none', md: 'table-cell' }}
                  >
                    <Flex justifyContent="flex-end" suppressHydrationWarning>
                      {Intl.NumberFormat('en-US', {
                        notation: 'compact',
                        maximumFractionDigits: 1,
                      }).format(i.circulating_supply)}
                    </Flex>
                  </Td>
                </>
              )}
            </Tr>
          ))}
      </tbody>
    </Table>
  );
};

CoinTable.displayName = 'CoinTable';
export default CoinTable;
