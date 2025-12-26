# Assets Folder - Image Dimension Guidelines

This folder is for storing images used throughout the portfolio website. Below are the recommended dimensions for optimal display across different sections.

## 📐 Recommended Image Dimensions

### Hero Section
- **Profile/Avatar Image**: 400x400px (square, 1:1 ratio)
  - Format: PNG with transparent background or JPG
  - Use case: Main profile picture displayed in the hero section

### Projects Section
- **Project Thumbnails**: 1200x675px (16:9 ratio)
  - Format: JPG or PNG
  - Use case: Project preview images in the portfolio grid
  - Alternative sizes: 800x450px or 1600x900px

### About Section
- **About Image**: 600x600px (square, 1:1 ratio) or 800x600px (4:3 ratio)
  - Format: JPG or PNG
  - Use case: Personal photo or illustration in the about section

### Skills/Technology Icons
- **Icon Size**: 64x64px or 128x128px (square)
  - Format: PNG with transparent background or SVG (preferred)
  - Use case: Technology stack icons, skill badges

### Background Images
- **Full-width backgrounds**: 1920x1080px or larger
  - Format: JPG (optimized for web)
  - Use case: Section backgrounds, hero backgrounds

### Logos
- **Company/Client Logos**: 200x200px (square) or 300x100px (rectangular)
  - Format: PNG with transparent background or SVG (preferred)
  - Use case: Client logos, company logos in experience section

## 🎨 General Best Practices

1. **File Formats**:
   - Use **WebP** for best compression and quality (modern browsers)
   - Use **PNG** for images requiring transparency
   - Use **JPG** for photographs and complex images
   - Use **SVG** for icons and logos (scalable, small file size)

2. **Optimization**:
   - Compress images before uploading (use tools like TinyPNG, ImageOptim, or Squoosh)
   - Target file size: < 200KB for thumbnails, < 500KB for full-width images
   - Use responsive images with multiple sizes when possible

3. **Naming Convention**:
   - Use descriptive, lowercase names with hyphens
   - Examples: `profile-photo.jpg`, `project-ecommerce-thumbnail.png`, `skill-react-icon.svg`

4. **Aspect Ratios**:
   - **1:1** (Square): Profile pictures, icons
   - **16:9** (Landscape): Project thumbnails, video previews
   - **4:3**: About section images
   - **21:9** (Ultra-wide): Hero banners

## 📁 Suggested Folder Structure

```
assets/
├── images/
│   ├── profile/
│   │   └── avatar.jpg (400x400px)
│   ├── projects/
│   │   ├── project-1.jpg (1200x675px)
│   │   ├── project-2.jpg (1200x675px)
│   │   └── ...
│   ├── about/
│   │   └── about-photo.jpg (600x600px)
│   ├── icons/
│   │   ├── react.svg
│   │   ├── typescript.svg
│   │   └── ...
│   └── backgrounds/
│       └── hero-bg.jpg (1920x1080px)
└── README.md (this file)
```

## 🚀 Quick Reference Table

| Section | Recommended Size | Aspect Ratio | Format |
|---------|-----------------|--------------|--------|
| Profile Photo | 400x400px | 1:1 | PNG/JPG |
| Project Thumbnail | 1200x675px | 16:9 | JPG/PNG/WebP |
| About Image | 600x600px | 1:1 | JPG/PNG |
| Skill Icons | 64x64px or 128x128px | 1:1 | PNG/SVG |
| Background | 1920x1080px+ | 16:9 | JPG/WebP |
| Logos | 200x200px | 1:1 | PNG/SVG |

---

**Note**: These are recommended dimensions. The website is responsive and will adapt images to different screen sizes. Always test images on multiple devices to ensure they look good across all viewports.
