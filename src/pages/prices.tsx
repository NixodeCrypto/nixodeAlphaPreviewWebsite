import { Flex, Box } from '@/components';

const Prices = () => (
  <Flex horizontalGap="2rem">
    <Box bg="primary.200" width="md" height="md">
      <Box bg="secondary.200" width="md" height="md" />
      <Box bg="secondary.200" width="md" height="md" />
    </Box>
    <Box bg="primary.200" width="md" height="md">
      <Box bg="secondary.200" width="md" height="md" />
      <Box bg="secondary.200" width="md" height="md" />
    </Box>
    <Box bg="primary.200" width="md" height="md" />
    <Box bg="primary.200" width="md" height="md" />
  </Flex>
);

export default Prices;
