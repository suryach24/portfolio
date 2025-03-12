# Personal Portfolio Website

A modern, responsive personal portfolio website built with React and TypeScript. This project showcases a clean and professional design inspired by [Bjorn Melin's portfolio](https://bjornmelin.io/).

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Sections for showcasing projects, skills, and contact information
- Clean and maintainable code structure
- TypeScript for type safety

## Technologies Used

- React
- TypeScript
- CSS3
- Font Awesome for icons

## Project Structure

```
src/
├── components/       # React components
│   ├── Header.tsx    # Navigation header
│   ├── Hero.tsx      # Hero section
│   ├── About.tsx     # About section
│   ├── Projects.tsx  # Projects section
│   ├── Skills.tsx    # Skills section
│   ├── Contact.tsx   # Contact section
│   └── Footer.tsx    # Footer section
├── styles/           # Component-specific styles
│   ├── Header.css
│   ├── Hero.css
│   ├── About.css
│   ├── Projects.css
│   ├── Skills.css
│   ├── Contact.css
│   └── Footer.css
├── App.tsx           # Main App component
├── App.css           # App-specific styles
├── index.tsx         # Entry point
└── index.css         # Global styles
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization

To personalize this portfolio:

1. Replace "YourName" in components with your actual name
2. Update project data in `Projects.tsx`
3. Update skills data in `Skills.tsx`
4. Update contact information in `Contact.tsx`
5. Add your own images to the `public/images` directory
6. Customize colors in `index.css` (CSS variables)

## Deployment

To build the app for production:

```
npm run build
```

This creates an optimized production build in the `build` folder that you can deploy to hosting services like Netlify, Vercel, or GitHub Pages.

## License

MIT

## Acknowledgements

- Design inspired by [Bjorn Melin's portfolio](https://bjornmelin.io/)
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
