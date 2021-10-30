import { mount } from '@cypress/react';
import Navbar from '.';

describe('components/Navbar', () => {
  it('works', () => {
    cy.viewport(1400, 900);
    mount(<Navbar />);
    cy.get('a').contains('Home');
  });
});
