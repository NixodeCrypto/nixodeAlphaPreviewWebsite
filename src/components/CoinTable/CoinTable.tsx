/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import SVG from 'react-inlinesvg';
import { css } from '@emotion/react';
import Image from '@/components/Image';
import Flex from '@/components/Flex';
import Body from '@/components/Body';
import Box from '@/components/Box';
import { token } from '@/utils';
import { space, border, layout, typography } from '@/system';

export interface IProps {
  tickerData: Record<string, any>;
}

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Tbody = styled.tbody``;

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
`;

const Th = styled.th`
  font-family: ${token.fonts('title')};
  font-size: ${token.fontSizes('bodySm')};
  font-weight: ${token.fontWeights('regular')};
  padding-top: ${token.space('sm')};
  padding-bottom: ${token.space('sm')};
  color: ${token.colors('grey.700')};
  ${typography};
  ${space};
`;

const percentFormatter = (percentage: number) =>
  percentage.toString().substr(0, 1) === '-'
    ? `${percentage.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}%`
    : `+${percentage.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}%`;

const CoinTable = (props: IProps) => {
  const { tickerData } = props;
  return (
    <Table>
      <Thead display={{ xss: 'none', sm: 'table-header-group' }}>
        <Tr borderTop="sm" borderColor="grey.100" header>
          <Th textAlign="left" pl="sm">
            Name
          </Th>
          <Th textAlign="left" pl="sm">
            Price
          </Th>
          <Th textAlign="left" pl="sm">
            Change
          </Th>
          <Th textAlign="left">Chart (7d)</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tickerData &&
          tickerData.map((i: any, idx: number) => (
            <Tr
              key={i.id}
              borderTop="sm"
              borderBottom={idx === tickerData.length - 1 && 'sm'}
              borderColor="grey.100"
            >
              <Td px="sm" py="sm">
                <Flex alignItems="center">
                  <Image src={i.img} alt={i.name} width="sm" mr="xs" />
                  <Flex flexDirection={{ xss: 'column', sm: 'row' }}>
                    <Body mr={{ sm: 'sm' }}>{i.name}</Body>
                    <Body color="grey.800">{i.symbol}</Body>
                  </Flex>
                </Flex>
              </Td>
              <Td px="sm" py="sm" width="3rem">
                <Flex
                  alignItems={{ xss: 'flex-end', sm: 'flex-start' }}
                  justifyContent="flex-end"
                  flexDirection="column"
                >
                  <Body textAlign="left">
                    $
                    {i.quotes.USD.price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Body>
                  <Body
                    display={{ sm: 'none' }}
                    color={
                      i.quotes.USD.percent_change_24h
                        .toString()
                        .substr(0, 1) === '-'
                        ? 'red.600'
                        : 'green.600'
                    }
                  >
                    {percentFormatter(i.quotes.USD.percent_change_24h)}
                  </Body>
                </Flex>
              </Td>
              <Td
                display={{ xss: 'none', sm: 'table-cell' }}
                px="sm"
                py="sm"
                width="3rem"
              >
                <Flex alignItems="flex-start" flexDirection="column">
                  <Body
                    color={
                      i.quotes.USD.percent_change_24h
                        .toString()
                        .substr(0, 1) === '-'
                        ? 'red.600'
                        : 'green.600'
                    }
                  >
                    {percentFormatter(i.quotes.USD.percent_change_24h)}
                  </Body>
                </Flex>
              </Td>
              <Td
                display={{ xss: 'none', sm: 'table-cell' }}
                pr="sm"
                py="sm"
                width="xl"
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
                    src={`https://graphs.coinpaprika.com/currency/chart/${i.id}/7d/chart.svg`}
                    width="100%"
                    height="1.5rem"
                  />
                </Box>
              </Td>
            </Tr>
          ))}
      </Tbody>
    </Table>
  );
};

export default CoinTable;
