import { mount } from 'enzyme';
import Image from '.';

describe('components/Image', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <Image src="/Cover.svg" alt="Cover Image" width="1rem" height="1rem" />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
