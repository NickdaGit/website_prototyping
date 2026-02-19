---
title: My Prototyping Site
description: First steps—looks decent, works fast
---

# Welcome to My Site

Built with Markdown. No servers, no fuss.

## What's Here
- Learning code on a Mac Mini  
- Dark mode toggle (click below)  
- Random image because why not  

! (https://picsum.photos/1200/600?random)  

### Quick Links
- (/about.md)  
- (/projects.md)  

<button id="theme-toggle" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700">
  Switch to Dark Mode
</button>

<script>
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    body.classList.add('dark');
    toggle.textContent = 'Switch to Light Mode';
  }

  toggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      localStorage.theme = 'light';
      toggle.textContent = 'Switch to Dark Mode';
    } else {
      body.classList.add('dark');
      localStorage.theme = 'dark';
      toggle.textContent = 'Switch to Light Mode';
    }
  });
</script>

<style>
  body.dark {
    background: #111827;
    color: #e5e7eb;
  }
  body.dark h1, body.dark h2 {
    color: #a5b4fc;
  }
  body.dark a {
    color: #818cf8;
  }
  body.dark button {
    background: #374151;
  }
</style>

<small>Preview with Live Server—push later for GitHub Pages.</small>
