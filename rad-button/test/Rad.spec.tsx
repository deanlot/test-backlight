import React from 'react';
import { render } from '@testing-library/react';
import RadButton from '../src/RadButton';
import '@testing-library/jest-dom';


describe('Dummy test', function () {
  it('should be always true', function () {
    const {getByText} = render(<RadButton variant={'primary'}>primary</RadButton>);
    expect(getByText('primary')).toBeInTheDocument();
  });
});