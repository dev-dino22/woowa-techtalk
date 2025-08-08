import { useMemo } from 'react';
import { ExtrudeGeometry } from 'three';
import { shapeUtils } from '../utils/shapeUtils';

export function useRoundedRectGeometry(width: number, height: number, radius: number, depth: number) {
  return useMemo(() => {
    const shape = shapeUtils.createRoundedRectShape(width, height, radius);
    return new ExtrudeGeometry(shape, { depth, bevelEnabled: false });
  }, [width, height, radius, depth]);
}
