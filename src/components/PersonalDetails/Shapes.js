import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
function Shapes(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={179.95}
      height={16.02}
      viewBox="0 0 179.95 16.02"
      {...props}>
      <G data-name="Group 69">
        <Path
          data-name="Path 374"
          d="M89.66.141l8.01 7.87-8.009 7.866L81.65 8.01z"
          fill="rgba(255,255,255,0.55)"
        />
        <Path
          data-name="Line 2"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeLinecap="round"
          strokeWidth={5}
          d="M104.449 8.01h73.001"
        />
        <Path
          data-name="Path 458"
          d="M2.5 8.01h73"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeLinecap="round"
          strokeWidth={5}
        />
      </G>
    </Svg>
  );
}

export default Shapes;
