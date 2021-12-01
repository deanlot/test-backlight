import { groupColors } from '../../utils/group-colors';
import React, { ReactElement } from 'react';
import ColorSample from '../color-sample/ColorSample';
import { GroupLabel, Samples } from './ColorsShowcase.styles';
import { useTheme } from '../../../../theme-provider';
import ThemePanel from '../../../../theme-panel/ThemePanel';

const ColorsShowcase = (): ReactElement => {
  const { theme } = useTheme();
  const groupedColors = groupColors(theme.colors);

  return (
    <ThemePanel>
      {Object.keys(groupedColors).map((group) => (
        <div key={group}>
          <GroupLabel>{group}</GroupLabel>
          <Samples>
            {Object.keys(groupedColors[group]).map((color) => (
              <ColorSample key={color} group={group} token={color} color={theme.colors[color]} />
            ))}
          </Samples>
        </div>
      ))}
    </ThemePanel>
  );
};

export default ColorsShowcase;
