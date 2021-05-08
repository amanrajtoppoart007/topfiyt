import * as React from 'react';
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Path,
  G,
  Circle,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
function Splash(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={418}
      height={812}
      viewBox="0 0 418 812"
      {...props}>
      <Defs>
        <LinearGradient
          id="prefix__f"
          x1={0.229}
          y1={0.521}
          x2={1.232}
          y2={0.078}
          gradientUnits="objectBoundingBox">
          <Stop offset={0.103} stopColor="#1f9f86" />
          <Stop offset={0.964} stopColor="#17715d" />
        </LinearGradient>
        <LinearGradient
          id="prefix__g"
          x1={0.482}
          y1={0.124}
          x2={0.511}
          y2={1.033}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#60c1c6" />
          <Stop offset={0.421} stopColor="#42b5a6" />
          <Stop offset={0.988} stopColor="#1f9f86" />
        </LinearGradient>
        <LinearGradient
          id="prefix__h"
          x1={0.295}
          y1={0.395}
          x2={1.295}
          y2={0.395}
          gradientUnits="objectBoundingBox">
          <Stop offset={0} stopColor="#60c1c6" />
          <Stop offset={0.4} stopColor="#60c1c6" />
          <Stop offset={0.988} stopColor="#42b5a6" />
        </LinearGradient>
        <ClipPath id="prefix__a">
          <Path d="M0 0h418v812H0z" />
        </ClipPath>
      </Defs>
      <G data-name="01-Splash Screen \u2013 1" clipPath="url(#prefix__a)">
        <Path fill="#fff" d="M0 0h418v812H0z" />
        <G data-name="Group 2">
          <G filter="url(#prefix__b)">
            <Path
              data-name="Path 184"
              d="M63-152c111.562 0 202 90.438 202 202S174.562 252 63 252s-202-90.438-202-202 90.438-202 202-202z"
              fill="#1beccf"
            />
          </G>
          <G filter="url(#prefix__c)">
            <Path
              data-name="Path 458"
              d="M63-85A135 135 0 11-72 50 135 135 0 0163-85z"
              fill="#1faba7"
            />
          </G>
        </G>
        <G data-name="Group 1">
          <G filter="url(#prefix__d)" transform="translate(-.004 -.004)">
            <Circle
              data-name="Ellipse 5"
              cx={202}
              cy={202}
              r={202}
              transform="translate(110 560)"
              fill="#1beccf"
            />
          </G>
          <G filter="url(#prefix__e)" transform="translate(-.004 -.004)">
            <Circle
              data-name="Ellipse 4"
              cx={134.5}
              cy={134.5}
              r={134.5}
              transform="translate(177 627)"
              fill="#1faba7"
            />
          </G>
        </G>
        <G transform="translate(-86.164 62.521)">
          <Path
            data-name="Path 2193"
            d="M302.448 432.46A45.689 45.689 0 00309 473.371c10.6 14.578 26.864 20.821 44.53 18.259a36.89 36.89 0 0016.134-6.239c11.917-9.478 14.364-20.64 10.653-26.28-3.4-5.178-8.508-8.756-22.682-5.163-21.571 5.589-49.242-6.303-55.187-21.488z"
            transform="translate(-34.911 -63.769)"
            fill="url(#prefix__f)"
          />
          <Path
            data-name="Path 2194"
            d="M284.189 359.327A45.731 45.731 0 01329 354.219c8.792-27.261-15.275-38.359-24.585-34.149 1.514-9.338-3.453-19.948-17.209-23.121-16.92-3.909-28.629 7.605-28.629 7.605s3.135-9.041-6.049-13.307c-7.407-3.442-15.867 2.71-15.867 2.71a86.183 86.183 0 0070.666 153.533c8.881-2.114 19.942-6.532 26.644-11.642a45.7 45.7 0 01-49.781-76.521z"
            transform="translate(0 -13.644)"
            fill="url(#prefix__g)"
          />
          <Circle
            cx={17.945}
            cy={17.945}
            r={17.945}
            transform="translate(286.591 251.479)"
            fill="url(#prefix__h)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default Splash;
