import React from 'react';
import chai from 'chai';
import { render } from '@testing-library/react';
import RadButton from '../src/RadButton';

const expect = chai.expect;

describe('RadButton', function() {
  it('should render the component', function() {
    const { getByText } = render(<RadButton variant={'primary'}>primary</RadButton>);
    expect(getByText('primary')).to.exist;
  });
});