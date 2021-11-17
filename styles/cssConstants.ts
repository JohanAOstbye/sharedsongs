import { type } from 'os';

// types
type overlayType = {
  enabled: string;
  hovered: string;
  focused: string;
  dragged: string;
};

type emphasisType = {
  text: {
    high: string;
    medium: string;
    disabled: string;
  };
  surface: {
    disabled: string;
  };
};

type depthType = {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  6: string;
  8: string;
  12: string;
  16: string;
  24: string;
};

// Constants

const overlay: overlayType = {
  enabled: '0%',
  hovered: '4%',
  focused: '12%',
  dragged: '8%',
};
const emphasis: emphasisType = {
  text: {
    high: '87%',
    medium: '60%',
    disabled: '38%',
  },
  surface: {
    disabled: '12%',
  },
};
const depth: depthType = {
  0: '0%',
  1: '5%',
  2: '7%',
  3: '8%',
  4: '9%',
  6: '11%',
  8: '12%',
  12: '14%',
  16: '15%',
  24: '16%',
};

export { overlay, emphasis, depth };
