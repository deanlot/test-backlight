import { styled } from '@stitches/react';

export const ThemePanelContainer = styled('div', {});

export const TabBar = styled('div', {
  display: 'grid',
  gridAutoFlow: 'column',
  justifyContent: 'end',
});

export const Tab = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 16px',
  margin: '0 4px',
  height: 30,
  borderRadius: '4px 4px 0 0',
  fontSize: '12px',
  background: 'transparent',
  borderBottom: '3px solid transparent',

  '&:hover': {
    background: 'transparent',
    borderBottom: '3px solid #cddaef',
  },
});

export const ActiveTab = styled(Tab, {
  borderBottom: '3px solid #6495E5',
  pointerEvents: 'none',
});
