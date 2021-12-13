import React from 'react';
import { render, screen } from '@testing-library/react';
import '../../../../jest.setup';
import { ParagraphText } from '../../';

describe('Paragraph Text', () => {
  it('should render a p', () => {
    const { container } = render(<ParagraphText>Test</ParagraphText>);
    expect(container.firstChild.nodeName).toBe('P');
  });
});
