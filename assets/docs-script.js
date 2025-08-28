// AppFlowy Documentation JavaScript

// Navigation data
const navigation = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Overview', path: 'index.html' },
      { name: 'First-time Setup', path: 'pages/environment-setup.html' },
      { name: 'Backend Configuration', path: 'backend-configuration.html' },
      { name: 'Frontend Configuration', path: 'frontend-configuration.html' },
    ]
  },
  {
    title: 'Architecture',
    items: [
      { name: 'System Architecture', path: 'pages/unified-space-project-architecture.html' },
      { name: 'Database Architecture', path: 'pages/database-architecture.html' },
      { name: 'Extensions Architecture', path: 'pages/extensions-architecture.html' },
    ]
  },
  {
    title: 'Implementation',
    items: [
      { name: 'Space & Project Management', path: 'pages/unified-space-project-management-plan.html' },
      { name: 'Kanban Board', path: 'pages/kanban-board-implementation.html' },
      { name: 'Kanban Board Spec', path: 'pages/project-management-kanban-spec.html' },
      { name: 'Project Management Report', path: 'pages/project-management-implementation-report.html' },
      { name: 'Project Extension Conversion', path: 'pages/project-extension-conversion.html' },
    ]
  },
  {
    title: 'Authentication & SSO',
    items: [
      { name: 'OAuth Providers', path: 'authentication.html' },
      { name: 'Okta SAML', path: 'okta-saml.html' },
    ]
  },
  {
    title: 'Cloud Setup',
    items: [
      { name: 'Cloud Overview', path: 'cloud-guide.html' },
      { name: 'Deployment', path: 'deployment.html' },
      { name: 'AWS EC2 Self-Host', path: 'ec2-self-host-guide.html' },
      { name: 'Local Multi-Arch Build', path: 'local-build-multiarch.html' },
      { name: 'Backend Project Structure', path: 'project-structure-backend.html' },
    ]
  },
  {
    title: 'Access Control',
    items: [
      { name: 'Workspace Invitation Flow', path: 'workspace-invitation-flow.html' },
      { name: 'Space Permissions Plan', path: 'space-permissions-plan.html' },
      { name: 'Space Visibility & Enforcement', path: 'space-visibility-enforcement.html' },
      { name: 'Space ACL API Status', path: 'space-acl-api-todo.html' },
      { name: 'Per-View Visibility (Draft)', path: 'per-view-visibility.html' },
    ]
  },
  {
    title: 'Projects',
    items: [
      { name: 'Project Members — Requirements', path: 'project-member-requirements.html' },
      { name: 'Project Members — Technical Plan', path: 'project-member-technical-plan.html' },
      { name: 'Project Plugin Diagrams', path: 'project-plugin-diagrams.html' },
    ]
  },
  {
    title: 'Testing',
    items: [
      { name: 'Test Cases', path: 'pages/test-cases.html' },
      { name: 'Compilation Fixes', path: 'pages/compilation-fixes.html' },
    ]
  },
  {
    title: 'Extensibility',
    items: [
      { name: 'Extensions & Add-ons', path: 'extensions-and-addons.html' },
    ]
  },
  {
    title: 'Contributing',
    items: [
      { name: 'Contributing (Backend)', path: 'contributing-backend.html' },
    ]
  }
];

// ---------- Syntax Highlighting (Highlight.js) ----------
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

function initializeHighlighting() {
  // Add a language hint to our custom blocks to improve accuracy
  document.querySelectorAll('pre.code-block > code').forEach((el) => {
    if (![...el.classList].some(c => c.startsWith('language-'))) {
      el.classList.add('language-bash');
    }
  });

  // Load Highlight.js from CDN and highlight
  const HLJS_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
  if (window.hljs && typeof window.hljs.highlightAll === 'function') {
    window.hljs.highlightAll();
    return;
  }
  loadScript(HLJS_CDN)
    .then(() => {
      if (window.hljs && typeof window.hljs.highlightAll === 'function') {
        window.hljs.highlightAll();
      }
    })
    .catch(() => {
      // Non-fatal; code blocks will still render with base styles
    });
}

// Initialize navigation
function initializeNavigation() {
  const nav = document.getElementById('docs-nav');
  if (!nav) return;

  // Get current path relative to the docs root
  const pathParts = window.location.pathname.split('/');
  const currentFile = pathParts.pop() || 'index.html';
  const isInPages = pathParts[pathParts.length - 1] === 'pages';
  const currentPath = isInPages ? `pages/${currentFile}` : currentFile;
  
  navigation.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'nav-section';
    
    const title = document.createElement('div');
    title.className = 'nav-section-title';
    title.textContent = section.title;
    sectionDiv.appendChild(title);
    
    section.items.forEach(item => {
      const link = document.createElement('a');
      // Adjust path based on current location
      if (isInPages) {
        if (item.path.startsWith('pages/')) {
          link.href = '../' + item.path;
        } else {
          link.href = '../' + item.path;
        }
      } else {
        link.href = item.path;
      }
      link.className = 'nav-item';
      link.textContent = item.name;
      
      if (item.path === currentPath) {
        link.classList.add('active');
      }
      
      sectionDiv.appendChild(link);
    });
    
    nav.appendChild(sectionDiv);
  });
}

// Initialize breadcrumb
function initializeBreadcrumb() {
  const breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;
  
  // Get current path relative to the docs root
  const pathParts = window.location.pathname.split('/');
  const currentFile = pathParts.pop() || 'index.html';
  const isInPages = pathParts[pathParts.length - 1] === 'pages';
  const currentPath = isInPages ? `pages/${currentFile}` : currentFile;
  const currentPage = findCurrentPage(currentPath);
  
  if (currentPage) {
    const homeLink = isInPages ? '../index.html' : 'index.html';
    breadcrumb.innerHTML = `
      <a href="${homeLink}">Documentation</a>
      <span class="breadcrumb-separator">›</span>
      <span>${currentPage.section}</span>
      <span class="breadcrumb-separator">›</span>
      <span>${currentPage.name}</span>
    `;
  }
}

// Find current page in navigation
function findCurrentPage(path) {
  for (const section of navigation) {
    for (const item of section.items) {
      if (item.path === path) {
        return { section: section.title, name: item.name };
      }
    }
  }
  return null;
}

// Search functionality
function initializeSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(query)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
    
    // Show/hide section titles based on visible items
    document.querySelectorAll('.nav-section').forEach(section => {
      const hasVisibleItems = Array.from(section.querySelectorAll('.nav-item'))
        .some(item => item.style.display !== 'none');
      
      const title = section.querySelector('.nav-section-title');
      if (title) {
        title.style.display = hasVisibleItems ? 'block' : 'none';
      }
    });
  });
}

// Mobile menu toggle
function initializeMobileMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const sidebar = document.querySelector('.docs-sidebar');
  
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }
}

// Initialize all components
document.addEventListener('DOMContentLoaded', () => {
  initializeNavigation();
  initializeBreadcrumb();
  initializeSearch();
  initializeMobileMenu();
  initializeHighlighting();
});

// Helper function to create the shared layout HTML
function createSharedLayout(title, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} - AppFlowy Documentation</title>
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
        ${content}
      </article>

      <footer class="docs-footer">
        <p>© 2024 AppFlowy. Built with ❤️ for developers.</p>
      </footer>
    </main>
  </div>

  <script src="assets/docs-script.js"></script>
</body>
</html>`;
}