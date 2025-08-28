# AppFlowy Documentation

This folder contains the documentation for Klever AppFlowy, which is published at: https://bennietokyotechies.github.io/appflowy-docs/

## Folder Structure

```
appflowy-docs/
├── assets/
│   ├── docs-style.css  # Common styles for all pages
│   └── docs-script.js  # Navigation and breadcrumb logic
├── pages/              # All documentation pages (except index)
│   ├── template.html   # Template for new pages
│   └── *.html          # Individual documentation pages
└── index.html          # Documentation homepage
```


## Common Layout Structure

All documentation pages use a common layout that includes:
- **Sidebar navigation** - Automatically generated from the navigation configuration
- **Breadcrumb navigation** - Shows the current page location in the hierarchy
- **Search functionality** - Filter navigation items by keyword
- **Responsive design** - Mobile-friendly layout

## How to create New Pages

1. Copy `pages/template.html` as a starting point for new pages
2. Replace the `Main Content` section with your documentation
3. Update the navigation in `assets/docs-script.js`
4. All documentation pages (except index.html) should be placed in the `pages/` directory

## Adding Pages to Navigation

Edit `assets/docs-script.js` to add your page to the navigation:

```javascript
const navigation = [
  {
    title: 'Your Section',
    items: [
      { name: 'Your Page Name', path: 'pages/your-page.html' },
    ]
  }
];
```


