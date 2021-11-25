import { groupColors } from '../../utils/group-colors';
import React from 'react';
import { ReactElement } from 'react';
import Swatch from '../swatch/Swatch';
import { GroupLabel, Swatches } from './Colors.styles';

const Colors = ({ theme }) : ReactElement => {
  const groupedColors = groupColors(theme.colors);

  return <div>
    {
      Object.keys(groupedColors).map((group) => (
        <div key={group}>
          <GroupLabel>{group}</GroupLabel>
          <Swatches>
            {
              Object.keys(groupedColors[group]).map(color => {
                return <Swatch key={color} group={group} token={color} color={theme.colors[color]} />
              })
            }
          </Swatches>
        </div>
      ))
    }
  </div>
}

export default Colors;