import { groupColors } from '../../utils/group-colors';
import React from 'react';
import { ReactElement } from 'react';
import ColorSample from '../colors-sample/ColorSample';
import { GroupLabel, Samples } from './ColorsShowcase.styles';

const ColorsShowcase = ({ theme }): ReactElement => {
  const groupedColors = groupColors(theme.colors);

  return (
    <div>
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
    </div>
  );
};

export default ColorsShowcase;
