//TODO: Implement hexToRgb
type rgb = {
  r: number,
  g: number,
  b: number,
};

export function hexToRgb(hex: string): rgb {
  const rgb = {} as rgb;

  if (hex.length === 3) {
    rgb.r = parseInt(hex.slice(0, 1).repeat(2), 16);
    rgb.g = parseInt(hex.slice(1, 2).repeat(2), 16);
    rgb.b = parseInt(hex.slice(2, 3).repeat(2), 16);
  } else {
    rgb.r = parseInt(hex.slice(0, 2), 16);
    rgb.g = parseInt(hex.slice(2, 4), 16);
    rgb.b = parseInt(hex.slice(4, 6), 16);
  }

  return rgb;
}

//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
  return numberToPaddedHex(r) + numberToPaddedHex(g) + numberToPaddedHex(b);
}

function numberToPaddedHex(value: number): string {
  const hex = (Math.max(Math.min(255, value), 0)).toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}
