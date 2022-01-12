import React from 'react';
import { Select, Flex } from '@/components';

const Testpage = () => {
  const [selectValue, setSelectValue] = React.useState('');
  return (
    <Flex>
      <Select
        size="lg"
        label="Hello friend how are you doing"
        value={selectValue}
        onChange={(item: string) => setSelectValue(item)}
        menuItems={['apple', 'pizza', 'friend', 'nope']}
      />
    </Flex>
  );
};

export default Testpage;
