# AppFlowy Documentation Site

A comprehensive documentation site for AppFlowy's unified space and project management system, built with a shared layout similar to Storybook or Notion.

## Features

- **Unified Layout**: All pages share a consistent sidebar navigation and breadcrumb system
- **Search Functionality**: Built-in search across all documentation pages
- **Responsive Design**: Mobile-friendly navigation with collapsible sidebar
- **Test Cases**: Comprehensive testing documentation with step-by-step instructions
- **Architecture Documentation**: Detailed system architecture with visual diagrams

## Structure

```
appflowy-docs/
├── assets/
│   ├── docs-style.css      # Shared CSS styles
│   └── docs-script.js      # Navigation and search functionality
├── index.html              # Main landing page
├── test-cases.html         # Comprehensive test cases (NEW)
├── unified-space-project-architecture.html  # Updated architecture docs
└── [other documentation files...]
```

## Key Components

### Shared Layout
All pages use a consistent layout with:
- **Sidebar Navigation**: Automatically generated from the navigation data
- **Breadcrumb Trail**: Shows current location in documentation hierarchy
- **Search Box**: Filter navigation items by keyword
- **Responsive Design**: Mobile-friendly with collapsible sidebar

### Navigation Structure
The documentation is organized into logical sections:

1. **Getting Started**
   - Overview (index.html)
   - Environment Setup

2. **Architecture**
   - System Architecture (unified-space-project-architecture.html)
   - Database Architecture
   - Extensions Architecture

3. **Implementation**
   - Space & Project Management
   - Kanban Board Implementation
   - Project Management Report

4. **Testing**
   - Test Cases (test-cases.html) ⭐ NEW
   - Compilation Fixes

## Usage

### Local Development
```bash
# Start a local server
cd appflowy-docs
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

### Adding New Pages
1. Create your HTML file using the shared layout structure
2. Add the navigation imports:
   ```html
   <link rel="stylesheet" href="assets/docs-style.css">
   <script src="assets/docs-script.js"></script>
   ```
3. Update the navigation data in `docs-script.js`

### Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Page Title - AppFlowy Documentation</title>
  <link rel="stylesheet" href="assets/docs-style.css">
</head>
<body>
  <div class="docs-container">
    <!-- Sidebar -->
    <aside class="docs-sidebar">
      <a href="index.html" class="docs-logo">
        <span style="font-size: 32px;">📚</span>
        <h1>AppFlowy Docs</h1>
      </a>
      
      <div class="search-box">
        <input type="text" id="search-input" placeholder="Search documentation...">
      </div>
      
      <nav id="docs-nav" class="docs-nav">
        <!-- Navigation will be inserted here by JavaScript -->
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="docs-main">
      <header class="docs-header">
        <div id="breadcrumb" class="breadcrumb">
          <!-- Breadcrumb will be inserted here by JavaScript -->
        </div>
      </header>

      <article class="docs-content">
        <!-- Your content here -->
      </article>

      <footer class="docs-footer">
        <p>© 2024 AppFlowy. Built with ❤️ for developers.</p>
      </footer>
    </main>
  </div>

  <script src="assets/docs-script.js"></script>
</body>
</html>
```

## Features Highlight

### Test Cases Page
The new `test-cases.html` includes:
- 8 major test categories with 20+ detailed test cases
- Step-by-step instructions for each test
- Expected results for verification
- Special styling for test case presentation
- Color-coded badges for different test types

### Updated Architecture Documentation
The `unified-space-project-architecture.html` now features:
- Consistent navigation with other docs
- Enhanced visual diagrams
- Detailed API endpoint documentation
- Implementation phase tracking
- Technology stack overview

### Responsive Design
- Mobile-friendly navigation
- Collapsible sidebar on small screens
- Touch-friendly interactive elements
- Optimized for all device sizes

## Customization

### CSS Variables
Customize the appearance by modifying CSS variables in `docs-style.css`:
```css
:root {
  --primary-color: #6366f1;
  --sidebar-bg: #f8fafc;
  --text-primary: #1f2937;
  /* ... more variables */
}
```

### Navigation
Update the navigation structure in `docs-script.js`:
```javascript
const navigation = [
  {
    title: 'Your Section',
    items: [
      { name: 'Page Name', path: 'your-page.html' }
    ]
  }
];
```

## Browser Compatibility
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Performance
- Optimized CSS and JavaScript
- Minimal external dependencies
- Fast page load times
- Efficient search implementation