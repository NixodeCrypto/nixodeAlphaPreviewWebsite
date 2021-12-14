/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Box from '@/components/Box';
import Image from '@/components/Image';
import Flex from '@/components/Flex';
import Body from '@/components/Body';
import { token } from '@/utils';

export interface IProps {
  tickerData: Record<string, any>;
}

const CoinTable = (props: IProps) => {
  const { tickerData } = props;
  return (
    <>
      {tickerData &&
        tickerData.map((i: any) => (
          <Box key={i.id}>
            <Flex
              justifyContent="space-between"
              alignItems="center"
              py="sm"
              px="sm"
              borderTop="sm"
              borderColor="grey.100"
              css={css`
                transition: ${token.transition('standard')};
                &:hover {
                  background-color: ${token.colors('grey.50')};
                  transition: ${token.transition('standard')};
                }
              `}
            >
              <Flex alignItems="center">
                <Image src={i.img} alt={i.name} width="sm" mr="xs" />
                <Flex flexDirection="column">
                  <Body>{i.name}</Body>
                  <Body color="grey.600">{i.symbol}</Body>
                </Flex>
              </Flex>
              <Flex
                alignItems="flex-end"
                justifyContent="flex-end"
                flexDirection="column"
              >
                <Body>
                  $
                  {i.quotes.USD.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </Body>
                <Body
                  color={
                    i.quotes.USD.percent_change_24h.toString().substr(0, 1) ===
                    '-'
                      ? 'red.600'
                      : 'green.600'
                  }
                >
                  {i.quotes.USD.percent_change_24h.toString().substr(0, 1) ===
                  '-'
                    ? `${i.quotes.USD.percent_change_24h.toLocaleString(
                        undefined,
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      )}%`
                    : `+${i.quotes.USD.percent_change_24h.toLocaleString(
                        undefined,
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        },
                      )}%`}
                </Body>
              </Flex>
            </Flex>
          </Box>
        ))}
    </>
  );
};

export default CoinTable;
