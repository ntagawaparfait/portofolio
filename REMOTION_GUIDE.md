# Remotion Motion Graphics Guide

This portfolio now includes Remotion for creating AI-powered motion graphics and animations.

## What's Included

- **MotionGraphicScene.tsx**: A random motion graphic component with animated shapes
- **Random Shapes**: Circles, squares, and triangles with random colors and animations
- **Dynamic Effects**: Opacity, scale, and position animations with smooth easing
- **Background Animation**: Radial gradient that moves with the frame
- **Text Overlay**: Animated title and subtitle with pulsing opacity

## Usage

### Preview the Animation

To preview the motion graphic in real-time:

```bash
npm run remotion:preview
```

This will open a browser window where you can see the animation play and make adjustments.

### Render the Video

To render the motion graphic as an MP4 video:

```bash
npm run remotion:render
```

This will generate an `output.mp4` file with the rendered animation.

## Customization

### Edit Colors

In `components/MotionGraphicScene.tsx`, modify the `colors` array:

```typescript
const colors = [
  '#FF6B6B', // Red
  '#4ECDC4', // Teal
  '#45B7D1', // Blue
  // Add more colors here
];
```

### Change Animation Duration

Modify the `durationInFrames` in `remotion/Root.tsx`:

```typescript
<Composition
  id="RandomMotionGraphic"
  component={MotionGraphicScene}
  durationInFrames={300}  // Change this (30fps = ~10 seconds)
  fps={30}
  width={1280}
  height={720}
/>
```

### Adjust Shape Count

In `components/MotionGraphicScene.tsx`, change the parameter in:

```typescript
const shapes = useMemo(() => generateRandomShapes(8), []);
// Change 8 to your desired number of shapes
```

### Modify Text

In the `MotionGraphicScene` component, update:

```typescript
<h1 style={{...}}>Motion Graphics</h1>
<p style={{...}}>Random Animated Shapes</p>
```

## Video Specifications

- **Resolution**: 1280x720 (720p)
- **Duration**: 300 frames at 30fps (~10 seconds)
- **Codec**: H.264
- **Format**: MP4
- **Quality**: High

## Integration with Portfolio

The motion graphic can be integrated into the portfolio for:

1. **Hero Section**: Use as a background video
2. **Project Showcase**: Create videos for each project
3. **About Section**: Animate skill visualization
4. **Social Media**: Generate clips for LinkedIn, Twitter, etc.

## Tips

- For longer videos, increase `durationInFrames`
- For smoother animations, increase `fps` (but this increases render time)
- Use Remotion's built-in React hooks for more complex animations
- The component uses `useFrame()` to get the current frame number for frame-based animations

## Learn More

- [Remotion Documentation](https://www.remotion.dev/)
- [Remotion API Reference](https://www.remotion.dev/docs)
- [Animation Easing Functions](https://www.remotion.dev/docs/easing)
