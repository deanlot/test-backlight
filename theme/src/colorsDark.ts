import { critical, highlight, primary, secondary, success } from './colors';
import { Colors } from './types/colors';

export const colorsDark: Colors = {
  transparent: 'transparent',

  surface: secondary[900],
  'surface-background': secondary[800],
  'surface-muted': secondary[800],
  'surface-negative': secondary[40],
  'surface-negativeMuted': secondary[100],
  'surface-primary': primary[900],
  'surface-critical': critical[900],
  'surface-highlight': highlight[900],
  'surface-success': highlight[900],

  'onSurface-icon': secondary[860],
  'onSurface-text': secondary[860],
  'onSurface-textMuted': secondary[700],
  'onSurface-textDisabled': secondary[600],
  'onSurface-textNegative': secondary[0],
  'onSurface-textNegativeMuted': secondary[100],
  'onSurface-textNegativeDisabled': secondary[300],
  'onSurface-border': secondary[400],
  'onSurface-onPrimary': primary[100],
  'onSurface-onPrimarySurface': primary[500],
  'onSurface-onSuccess': success[50],
  'onSurface-onSuccessSurface': success[700],
  'onSurface-onCritical': critical[50],
  'onSurface-onCriticalSurface': critical[700],
  'onSurface-onHighlight': highlight[50],
  'onSurface-onHighlightSurface': highlight[700],

  'interactive-disabled': secondary[200],
  'interactive-hovered': secondary[60],
  'interactive-pressed': secondary[80],
  'interactive-secondary': secondary[860],
  'interactive-secondaryDisabled': secondary[600],
  'interactive-secondaryHovered': secondary[900],
  'interactive-secondaryPressed': secondary[500],
  'interactive-success': success[500],
  'interactive-successDisabled': success[700],
  'interactive-successHovered': success[400],
  'interactive-successPressed': success[600],
  'interactive-primary': primary[900],
  'interactive-primaryDisabled': primary[500],
  'interactive-primaryHovered': primary[200],
  'interactive-primaryPressed': primary[400],
  'interactive-critical': critical[500],
  'interactive-criticalDisabled': critical[700],
  'interactive-criticalHovered': critical[400],
  'interactive-criticalPressed': critical[600],
  'interactive-highlight': highlight[500],
  'interactive-highlightDisabled': highlight[700],
  'interactive-highlightHovered': highlight[400],
  'interactive-highlightPressed': highlight[600],
};
