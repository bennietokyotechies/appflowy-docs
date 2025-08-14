// AppFlowy Documentation JavaScript

// Navigation data
const navigation = [
  {
    title: 'Getting Started',
    items: [
      { name: 'Overview', path: 'index.html' },
      { name: 'Environment Setup', path: 'environment-setup.html' },
    ]
  },
  {
    title: 'Architecture',
    items: [
      { name: 'System Architecture', path: 'unified-space-project-architecture.html' },
      { name: 'Database Architecture', path: 'database-architecture.html' },
      { name: 'Extensions Architecture', path: 'extensions-architecture.html' },
    ]
  },
  {
    title: 'Implementation',
    items: [
      { name: 'Space & Project Management', path: 'unified-space-project-management-plan.html' },
      { name: 'Kanban Board', path: 'kanban-board-implementation.html' },
      { name: 'Project Management Report', path: 'project-management-implementation-report.html' },
    ]
  },
  {
    title: 'Testing',
    items: [
      { name: 'Test Cases', path: 'test-cases.html' },
      { name: 'Compilation Fixes', path: 'compilation-fixes.html' },
    ]
  }
];

// Initialize navigation
function initializeNavigation() {
  const nav = document.getElementById('docs-nav');
  if (!nav) return;

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  
  navigation.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.className = 'nav-section';
    
    const title = document.createElement('div');
    title.className = 'nav-section-title';
    title.textContent = section.title;
    sectionDiv.appendChild(title);
    
    section.items.forEach(item => {
      const link = document.createElement('a');
      link.href = item.path;
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
  
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const currentPage = findCurrentPage(currentPath);
  
  if (currentPage) {
    breadcrumb.innerHTML = `
      <a href="index.html">Documentation</a>
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