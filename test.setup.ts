import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { matchers } from '@emotion/jest';
import { cleanup } from '@testing-library/react';
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinonChai from 'sinon-chai';

chai.use(chaiAsPromised);
chai.use(sinonChai);

beforeAll(() => {
  cleanup();
  expect.extend(matchers);
});

Enzyme.configure({ adapter: new Adapter() });
