import React, { CSSProperties } from 'react';
import hexagon3D, { IHexagonProps, IHexagonChildrensProps } from 'hexagon-3d';

const Hexagon3D: React.FC = (props: IHexagonProps & IHexagonChildrensProps) => {
  const {
      width,
      height,
      rotateZ,
      rotateX,
      growTop,
      showShadow,
      shadowColor,
      topBottomColor,
      sidesColor,
      opacity,
      showTransition,
      topChildren,
      bottomChildren,
      side1Children,
      side2Children,
      side3Children,
      side4Children,
      side5Children,
      side6Children,
  } = props;
  const hexagonData = hexagon3D({
      width, height, rotateZ, rotateX, growTop, showShadow, shadowColor, topBottomColor, sidesColor, opacity, showTransition});

  return (<div style={hexagonData.container.style as CSSProperties}>
      <div id={hexagonData.container.top.id} style={hexagonData.container.top.style as CSSProperties}>
          {topChildren}
      </div>

      <div id={hexagonData.container.side1.id} style={hexagonData.container.side1.style as CSSProperties}>
          {side1Children}
      </div>

      <div id={hexagonData.container.side2.id} style={hexagonData.container.side2.style as CSSProperties}>
          {side2Children}
      </div>

      <div id={hexagonData.container.side3.id} style={hexagonData.container.side3.style as CSSProperties}>
          {side3Children}
      </div>

      <div id={hexagonData.container.side4.id} style={hexagonData.container.side4.style as CSSProperties}>
          {side4Children}
      </div>

      <div id={hexagonData.container.side5.id} style={hexagonData.container.side5.style as CSSProperties}>
          {side5Children}
      </div>

      <div id={hexagonData.container.side6.id} style={hexagonData.container.side6.style as CSSProperties}>
          {side6Children}
      </div>

      <div id={hexagonData.container.bottom.id} style={hexagonData.container.bottom.style as CSSProperties}>
          {bottomChildren}
      </div>
  </div>)
};

export default Hexagon3D;
