// Pro Scripts: Search, Theme, Scroll
function toggleTheme() {
  const body = document.body;
  const isLight = body.getAttribute('data-theme') === 'light';
  body.setAttribute('data-theme', isLight ? 'dark' : 'light');
  localStorage.setItem('theme', isLight ? 'dark' : 'light');
}

function searchSite() {
  const query = document.getElementById('site-search').value.toLowerCase();
  // Simple client-side search (expand with Lunr.js later)
  const links = document.querySelectorAll('.nav-tree a');
  links.forEach(link => {
    link.style.display = link.textContent.toLowerCase().includes(query) ? 'block' : 'none';
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  document.querySelector('.back-to-top').classList.toggle('show', window.scrollY > 300);
});

// Load theme
if (localStorage.getItem('theme') === 'light') toggleTheme();
