import React from 'react';
import { Composition } from 'remotion';
import { MotionGraphicScene } from '../components/MotionGraphicScene';

export const Root: React.FC = () => {
  return (
    <>
      <Composition
        id="RandomMotionGraphic"
        component={MotionGraphicScene}
        durationInFrames={300}
        fps={30}
        width={1280}
        height={720}
        defaultProps={{
          totalFrames: 300,
        }}
      />
    </>
  );
};
