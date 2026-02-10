# Self-Coding Intro

[简体中文](./README.zh-CN.md) | English

---

An interactive web page that demonstrates a self-typing code animation effect. Watch as CSS and content are written in real-time before your eyes!

## Features

- **Self-typing animation**: CSS code types itself out character by character
- **Syntax highlighting**: Real-time CSS syntax highlighting during animation
- **Interactive editing**: Edit the CSS live and see changes immediately
- **3D flip effect**: Scroll to flip between raw text and rendered markdown
- **Pause/Resume**: Control the animation playback
- **Skip animation**: Jump to the final result instantly

## Demo

[Live Demo](https://bit-cook.github.io/self-coding-intro)

## 🚀 Deploy to GitHub Pages

This project is configured with GitHub Actions for automatic deployment. Just push to the main branch to trigger deployment.

### Automatic Deployment Steps

1. **Fork/Clone the project to GitHub**

2. **Enable GitHub Pages**
   - Go to **Settings** → **Pages**
   - **Build and deployment** → **Source** select **GitHub Actions**

3. **Push to main branch**
   ```bash
   git push origin main
   ```
   
   This will automatically trigger the deployment workflow.

4. **Check deployment status**
   - Go to the **Actions** tab to view deployment progress
   - After deployment, visit `https://your-username.github.io/self-coding-intro/`

### Manual Deployment (Optional)

```bash
# Install dependencies and build
npm install
npm run build

# Manually push to gh-pages branch
git checkout --orphan gh-pages
git reset
# Keep necessary files
git add index.html dist/ ico/ img/ styles*.css work.txt header.html prestyles.css lib/
git commit -m "Deploy"
git push origin gh-pages --force
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/self-coding-intro.git
cd self-coding-intro

# Install dependencies
npm install

# Start development server
npm run dev
```

Open your browser and navigate to `http://localhost:4004/index-dev.html`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Project Structure

```
.
├── app.js              # Main application logic
├── index.html          # Production HTML
├── index-dev.html      # Development HTML
├── work.txt            # Content displayed in the work section
├── header.html         # Header/footer template
├── prestyles.css       # Base styles
├── styles0-3.css       # Animated CSS styles
├── lib/                # Utility modules
│   ├── writeChar.js    # Character writing animation
│   ├── replaceURLs.js  # URL to link converter
│   └── getPrefix.js    # Browser prefix detection
├── img/                # Images
├── ico/                # Favicons
└── package.json
```

## How It Works

1. **Animation Loop**: The app uses `writeTo()` function to progressively reveal CSS code
2. **Syntax Highlighting**: `handleChar()` adds color classes to CSS tokens in real-time
3. **Dual View**: The work box contains both raw text and markdown-rendered HTML
4. **3D Transform**: CSS 3D transforms create the flip effect when scrolling

## Customization

### Change Content

Edit `work.txt` to modify the displayed content. Supports Markdown format.

### Change Styles

Edit `styles0.css` through `styles3.css` to customize the animated CSS.

### Change Animation Speed

Modify the `speed` variable in `app.js`:

```javascript
const speed = isDev ? 0 : 16; // Lower is faster
```

## Technologies

- JavaScript (ES6+)
- Webpack 5
- Babel
- Marked.js for Markdown parsing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

MIT License - feel free to use this for your own portfolio or projects!

## Credits

Inspired by [Jake Albaugh's](http://codepen.io/jakealbaugh/) work on self-typing code animations.

Also thanks to Samuel Reed's [strml.net](https://github.com/STRML/strml.net) self-coding introduction project.
