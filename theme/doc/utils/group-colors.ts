export const groupColors = (colors: { [key: string]: { token: string, value: string }  }) => Object.keys(colors).reduce((grouped, color) => {
  const group = color.split("-")[0];
  grouped[group] = grouped[group] || {};
  grouped[group][color] = colors[color];
  return grouped;
}, {})