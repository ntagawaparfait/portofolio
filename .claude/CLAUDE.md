# Claude Code Configuration

This document contains configuration and guidance for working with this portfolio project in Claude Code.

## ChatCut Plugin for AI Video Editing

### Overview

**ChatCut** is an AI video editing plugin that transforms Claude Code into a full non-linear editor (NLE). It enables you to edit videos using natural language prompts, with Claude handling the video editing logic directly within the chat interface.

### Installation

To install the ChatCut plugin in Claude Code:

1. **Visit the installation page**: [chatcut.io/claude](https://chatcut.io/claude)
2. **Follow the one-minute setup**: The page provides step-by-step instructions
3. **In Claude Code**, you can also use:
   ```
   Read https://chatcut.io/claude to install and use the ChatCut plugin
   ```

### Key Features

- **Full Video Editing**: Handle talking-head videos, captions, music, motion graphics, B-roll, sound effects, auto-zooms, and more
- **Natural Language Control**: Describe your edits in plain language, and ChatCut handles the technical execution
- **Collaborative Editing**: You and Claude agents can edit videos together in the same chat
- **Free with Claude Subscription**: No additional cost if you already have Claude

### Use Cases for This Portfolio

The ChatCut plugin could enhance this portfolio project by:

1. **Creating Portfolio Videos**: Generate AI-narrated portfolio overview videos
2. **Recording Support Demonstrations**: Create video walkthroughs of the SupportBot functionality
3. **Interview Preparation**: Edit and refine video responses for remote job interviews
4. **Project Showcases**: Create polished video presentations of completed projects

### How to Use ChatCut

#### Basic Workflow

1. **Open Claude Code** with this portfolio project
2. **Activate ChatCut** by following the installation instructions at chatcut.io/claude
3. **Describe Your Edit**: Use natural language to request video edits
   ```
   "Add captions to this video with professional styling"
   "Generate B-roll for these sections"
   "Create a talking-head video with motion graphics"
   ```
4. **Preview and Export**: Claude will render your edited video within the plugin

#### Example Prompts for Portfolio Work

- Create a 30-second video introducing Ntagawa's support skills
- Add auto-zoom effects to highlight important sections
- Generate professional captions with timing
- Create motion graphics overlays for testimonials

### Resources

- **Official Documentation**: [ChatCut Claude Code Plugin](https://chatcut.io/claude-code-plugin)
- **Installation Guide**: [chatcut.io/claude](https://chatcut.io/claude)
- **GitHub Repository**: [ChatCut Agent Plugin](https://github.com/ChatCut-Inc/agent-plugin)

### Pricing & Availability

- **Free** for Claude subscribers (basic video editing)
- **Premium** video generation features available
- Available immediately after installation

## Project Structure

### Components

- **SupportBot**: Interactive AI support demonstration using Gemini API
- **Portfolio Sections**: Hero, About, Skills, Projects, Testimonials, Contact
- **Responsive Design**: Works on desktop and mobile devices

### Environment Setup

Required environment variables:
- `API_KEY`: Google Gemini API key (for SupportBot functionality)
- `VITE_APP_GEMINI_API_KEY`: Alternative naming for Gemini API key

### Development Commands

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Integration Notes

The ChatCut plugin integrates as an extension to Claude Code and doesn't require changes to the project's source code. It's available through Claude Code's plugin manager and can be activated on-demand for video editing tasks.
