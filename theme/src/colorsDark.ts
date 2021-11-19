const primary = {
  '50': '#fce9c6',
  '100': '#f9d38e',
  '200': '#f0bd6b',
  '300': '#e5a139',
  '400': '#d17f13',
  '500': '#b55e02',
  '600': '#874903',
  '700': '#633305',
  '800': '#472300',
  '900': '#331800'
};

const secondary = {
  '0': '#ffffff',
  '20': '#f7f8fa',
  '40': '#f0f1f4',
  '60': '#ecedf0',
  '80': '#e4e6e9',
  '100': '#dcdfe6',
  '200': '#cacdd2',
  '300': '#abaeb5',
  '400': '#8e9198',
  '500': '#737780',
  '600': '#565960',
  '700': '#484b50',
  '800': '#2d3036',
  '820': '#202328',
  '840': '#191b1e',
  '860': '#121316',
  '880': '#0a0b0c',
  '900': '#000000'
};

const success = {
  '0': '#ebfcf8',
  '100': '#b6f0e6',
  '200': '#64d9c7',
  '300': '#11bdaf',
  '400': '#06a195',
  '500': '#00877e',
  '600': '#0b6660',
  '700': '#104a46',
  '800': '#013632',
  '900': '#012421'
};

const critical = {
  '50': '#faefed',
  '100': '#ffd9d6',
  '200': '#ff9e99',
  '300': '#fc6d62',
  '400': '#f24d44',
  '500': '#d6372b',
  '600': '#ba1b13',
  '700': '#85140c',
  '800': '#520c02',
  '900': '#3b0700'
};

const highlight = {
  '50': '#F3F6FB',
  '100': '#dde7f8',
  '200': '#b4caef',
  '300': '#8aade5',
  '400': '#5190f6',
  '500': '#256af4',
  '600': '#265bb0',
  '700': '#1d4586',
  '800': '#14305d',
  '900': '#0b1a32'
}

export const colorsDark = {
    button: {
      callToAction: primary[500],
      secondary: secondary[500],
    },

    surface: {
      background: secondary[80],
      surface: secondary[0],
      muted: secondary[40],
      negative: secondary[860],
      negativeMuted: secondary[820],
      primary: primary[50],
      critical: critical[50],
      highlight: highlight[50]
    },

   onSurface: {
      icon: secondary[860],
      iconSuccess: success[300],
      iconCritical: critical[300],
      iconHighlight: highlight[300],
      iconPrimary: primary[300],
      text: secondary[860],
      textMuted: secondary[700],
      textDisabled: secondary[600],
      textNegative: secondary[0],
      textNegativeMuted: secondary[100],
      textNegativeDisabled: secondary[300],
      textSuccess: success[700],
      textCritical: critical[700],
      textHighlight: highlight[700],
      textPrimary: primary[700],
      border: secondary[400],
      borderMuted: secondary[200],
      borderSuccess: success[200],
      borderCritical: critical[200],
      borderHighlight: highlight[200],
      borderPrimary: primary[200],
      onPrimary: primary[800]
   },

  interactive: {
      secondary: secondary[860],
      secondaryDisabled: secondary[600],
      secondaryHovered: secondary[900],
      secondaryPressed: secondary[500],
      success: success[500],
      successDisabled: success[700],
      successHovered: success[400],
      successPressed: success[600],
      primary: primary[300],
      primaryDisabled: primary[500],
      primaryHovered: primary[200],
      primaryPressed: primary[400],
      critical: critical[500],
      criticalDisabled: critical[700],
      criticalHovered: critical[400],
      criticalPressed: critical[600],
      highlight: highlight[500],
      highlightDisabled: highlight[700],
      highlightHovered: highlight[400],
      highlightPressed: highlight[600]
  }
};


//   surfaceBackground: "#E4E6E9",
//   surface: "#FFFFFF",
//   surfaceMuted: "#F0F1F4",
//   surfaceNegative: "#121316",
//   surfaceNegativeMuted: "#202328",
//   surfacePrimary: "#FCE9C6",
//   surfaceCritical: "#FAEFED",
//   surfaceHighlight: "#F3F6FB",
//
//   "surface-background": "#E4E6E9",
//   "surface": "#FFFFFF",
//   "surface-muted": "#F0F1F4",
//   "surface-negative": "#121316",
//   "surface-negative-muted": "#202328",
//   "surface-primary": "#FCE9C6",
//   "surface-critical": "#FAEFED",
//   "surface-highlight": "#F3F6FB",
