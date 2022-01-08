import React, { ChangeEvent } from 'react';
import { Select, Button, Flex } from '@/components';

const Testpage = () => {
  const [selectValue, setSelectValue] = React.useState('');

  return (
    <Flex>
      <Select
        size="sm"
        label="Age"
        value={selectValue}
        onChange={(item: string) => setSelectValue(item)}
        menuItems={['10', '20', '25', '30']}
      />
    </Flex>
  );
};

export default Testpage;
