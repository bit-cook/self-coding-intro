# Self-Coding Intro

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

本项目已配置 GitHub Actions 自动部署。只需 push 到 main 分支即可自动部署。

### 自动部署步骤

1. **Fork/Clone 项目到 GitHub**

2. **启用 GitHub Pages**
   - 进入仓库的 **Settings** → **Pages**
   - **Build and deployment** → **Source** 选择 **GitHub Actions**

3. **Push 到 main 分支**
   ```bash
   git push origin main
   ```
   
   推送后会自动触发部署工作流。

4. **查看部署状态**
   - 进入仓库的 **Actions** 标签页查看部署进度
   - 部署完成后，访问 `https://你的用户名.github.io/self-coding-intro/`

### 手动部署（可选）

```bash
# 安装依赖并构建
npm install
npm run build

# 手动推送到 gh-pages 分支
git checkout --orphan gh-pages
git reset
# 保留必要文件
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

