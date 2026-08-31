import React, { useMemo } from 'react';
import { useCurrentFrame, interpolate, Easing } from 'remotion';

interface Shape {
  id: number;
  x: number;
  y: number;
  size: number;
  type: 'circle' | 'square' | 'triangle';
  color: string;
  rotation: number;
  scale: number;
  opacity: number;
}

const generateRandomShapes = (count: number): Shape[] => {
  const colors = [
    '#FF6B6B',
    '#4ECDC4',
    '#45B7D1',
    '#FFA07A',
    '#98D8C8',
    '#F7DC6F',
    '#BB8FCE',
    '#85C1E2',
  ];

  return Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 1280,
    y: Math.random() * 720,
    size: Math.random() * 150 + 50,
    type: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
    color: colors[Math.floor(Math.random() * colors.length)],
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.5,
  }));
};

const Shape: React.FC<{ shape: Shape; frame: number; totalFrames: number }> = ({
  shape,
  frame,
  totalFrames,
}) => {
  const progress = frame / totalFrames;

  // Animate position
  const xPos = interpolate(
    progress,
    [0, 1],
    [shape.x, shape.x + (Math.random() - 0.5) * 400],
    { easing: Easing.inOut(Easing.cubic) }
  );

  const yPos = interpolate(
    progress,
    [0, 1],
    [shape.y, shape.y + (Math.random() - 0.5) * 400],
    { easing: Easing.inOut(Easing.cubic) }
  );

  // Animate rotation
  const rotation = (shape.rotation + frame * 2) % 360;

  // Animate scale
  const scale = interpolate(
    progress,
    [0, 0.5, 1],
    [shape.scale * 0.8, shape.scale * 1.2, shape.scale],
    { easing: Easing.inOut(Easing.cubic) }
  );

  // Animate opacity
  const opacity = interpolate(
    progress,
    [0, 0.3, 0.7, 1],
    [0, shape.opacity, shape.opacity, 0],
    { easing: Easing.inOut(Easing.cubic) }
  );

  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    left: xPos,
    top: yPos,
    transform: `rotate(${rotation}deg) scale(${scale})`,
    opacity,
    pointerEvents: 'none',
  };

  if (shape.type === 'circle') {
    return (
      <div
        style={{
          ...baseStyle,
          width: shape.size,
          height: shape.size,
          borderRadius: '50%',
          backgroundColor: shape.color,
          boxShadow: `0 0 20px ${shape.color}`,
        }}
      />
    );
  }

  if (shape.type === 'triangle') {
    return (
      <div
        style={{
          ...baseStyle,
          width: 0,
          height: 0,
          borderLeft: `${shape.size / 2}px solid transparent`,
          borderRight: `${shape.size / 2}px solid transparent`,
          borderBottom: `${shape.size}px solid ${shape.color}`,
          filter: `drop-shadow(0 0 10px ${shape.color})`,
        }}
      />
    );
  }

  return (
    <div
      style={{
        ...baseStyle,
        width: shape.size,
        height: shape.size,
        backgroundColor: shape.color,
        boxShadow: `0 0 20px ${shape.color}`,
      }}
    />
  );
};

export const MotionGraphicScene: React.FC<{ totalFrames?: number }> = ({
  totalFrames = 300,
}) => {
  const frame = useCurrentFrame();
  const shapes = useMemo(() => generateRandomShapes(8), []);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#0F0E17',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background gradient animation */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at ${50 + Math.sin(frame / 30) * 20}% ${
            50 + Math.cos(frame / 25) * 20
          }%, rgba(255, 107, 107, 0.1) 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />

      {/* Animated shapes */}
      {shapes.map((shape) => (
        <Shape key={shape.id} shape={shape} frame={frame} totalFrames={totalFrames} />
      ))}

      {/* Center text */}
      <div
        style={{
          position: 'absolute',
          textAlign: 'center',
          color: 'white',
          zIndex: 10,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            margin: '0 0 10px 0',
            opacity: Math.sin(frame / 20) * 0.3 + 0.7,
            textShadow: '0 0 20px rgba(255, 107, 107, 0.5)',
          }}
        >
          Motion Graphics
        </h1>
        <p
          style={{
            fontSize: '1.2rem',
            margin: 0,
            opacity: Math.cos(frame / 25) * 0.3 + 0.7,
            color: '#FF6B6B',
          }}
        >
          Random Animated Shapes
        </p>
      </div>
    </div>
  );
};
