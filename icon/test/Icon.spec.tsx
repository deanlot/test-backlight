import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import { IconBase } from '../src/IconBase';
import '../../jest.setup';

describe('Icon', () => {
  it('should scale the icon correctly', () => {
    const path = (
      <path
        d="M0.70735 4.70711C0.316826 4.31658 0.316827 3.68342 0.707351 3.29289L3.29314 0.707106C3.68366 0.316582 4.31683 0.316583 4.70735 0.707107L7.29314 3.29289C7.68366 3.68342 7.68366 4.31658 7.29314 4.70711L4.70735 7.29289C4.31683 7.68342 3.68366 7.68342 3.29314 7.29289L0.70735 4.70711Z"
        fill="#E5A139"
      />
    );

    const { getByTestId } = render(<IconBase path={path} label="check" size={20} />);

    console.log(screen.debug(), getByTestId('icon-base').firstChild.firstChild);

    expect(getByTestId('icon-base')).toBeInTheDocument();
  });
});
