import React from 'react';
import { Composition } from 'remotion';
import { MotionGraphicScene } from './MotionGraphicScene';

export const RandomMotionGraphic: React.FC = () => {
  return (
    <div>
      <Composition
        id="RandomMotionGraphic"
        component={MotionGraphicScene}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={720}
      />
    </div>
  );
};
