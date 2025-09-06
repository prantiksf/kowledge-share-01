# Kowledge Share 01

A repository for sharing knowledge and resources, featuring AI-powered design-to-code demos.

## 🎨 Figma to Code Demo - Slack Desktop App

This repository contains a **pixel-perfect recreation** of a Slack desktop application interface, generated directly from a Figma design using AI-powered design-to-code conversion.

### 📁 Project Structure

```
kowledge-share-01/
├── README.md                 # This file
├── SlackDesktopApp.jsx       # Main React component (full implementation)
├── index.html                # HTML demo page with simplified version
└── [image assets]            # SVG and PNG assets from Figma design
```

### 🚀 Quick Start

1. **View the Demo**: Open `index.html` in your browser to see the interactive demo
2. **Use the Component**: Import `SlackDesktopApp.jsx` into your React project

### ✨ Features Implemented

- **🎯 Design Fidelity**: Exact spacing, typography, and colors from Figma
- **⚛️ React Components**: Modern functional components with proper structure  
- **🎨 Styling**: Tailwind CSS with custom classes for pixel-perfect recreation
- **📱 Responsive**: Proper layout structure that maintains design integrity
- **🖼️ Assets**: All icons and images extracted and optimized from Figma

### 🛠️ Technical Details

- **Framework**: React 18+ with functional components
- **Styling**: Tailwind CSS + custom styles
- **Assets**: SVG icons and PNG images from Figma design
- **Browser Support**: Modern browsers with CSS Grid and Flexbox support

### 🎨 Design System Elements

- **Colors**: Custom purple/aubergine theme (`#4a154b`, `#39063a`)
- **Typography**: Lato font family with various weights
- **Components**: 
  - macOS-style window controls
  - Navigation sidebar with channels
  - Message threads with user avatars
  - Message composer interface
  - Status indicators and badges

### 📐 Key Components

1. **TopBar** - macOS-style title bar with controls
2. **Sidebar** - Channel navigation and workspace info
3. **MessageArea** - Chat messages with threading
4. **Composer** - Message input with actions
5. **Navigation** - Left panel with app switcher

### 🔧 Development

The component is ready to use in any React application:

```jsx
import SlackDesktopApp from './SlackDesktopApp.jsx';

function App() {
  return <SlackDesktopApp />;
}
```

### 📄 Demo Content

The demo includes realistic content:
- **Workspace**: "Acme Inc" with proper branding
- **Channels**: #project-acme, #general, #announcements
- **Messages**: Team conversation about campaign planning
- **Users**: Lee Hao, Zoe Maxwell, Matt Brewer, Carmen Vega

## Contributing

Feel free to contribute by adding your knowledge and resources to this repository.

## License

To be determined.
