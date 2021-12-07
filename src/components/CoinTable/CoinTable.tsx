/* @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Box from '@/components/Box';
import { token } from '@/utils';

export interface IProps {
  tickerData: Record<string, any>;
}

const Table = styled.table``;

const TableHeader = styled.th``;

const CoinTable = (props: IProps) => {
  const { tickerData } = props;
  const headers = [
    '#',
    'Name',
    'Price',
    'Change',
    'Volume (24h)',
    'Market cap',
    'Supply',
  ];

  return (
    <Table>
      <tr>
        {headers.map((i) => (
          <TableHeader key={i}>{i}</TableHeader>
        ))}
      </tr>
      {tickerData &&
        tickerData.map((i: any) => (
          <tr key={i.id}>
            <td>{i.rank}</td>
            <td>
              <img src={i.img} alt="img" />
              {i.name}
            </td>
            <td>{i.quotes.USD.price}</td>
            <td>{i.quotes.USD.percent_change_24h}</td>
            <td>{i.quotes.USD.volume_24h}</td>
            <td>{i.quotes.USD.market_cap}</td>
            <td>{i.total_supply}</td>
          </tr>
        ))}
    </Table>
  );
};

export default CoinTable;
