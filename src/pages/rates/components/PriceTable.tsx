import { Table } from '@mantine/core';

type ElementType = {
  id: number;
  description: string;
  price: string;
};

interface PriceTableProps {
  elements: ElementType[];
}

export const PriceTable = ({ elements }: PriceTableProps): JSX.Element => {
  const rows = elements.map((element) => (
    <tr key={element.id}>
      <td>{element.description}</td>
      <td>{element.price}</td>
    </tr>
  ));

  return (
    <Table striped>
      <thead>
        <tr>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};
