//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('[data-mobile-menu-button]');
  const menu = document.querySelector('[data-mobile-menu]');
  const hambugerIcon = document.querySelector('#hamburger-icon');

  if (button) {
    button.addEventListener('click', () => {
      menu.classList.toggle('open');
      hambugerIcon.classList.toggle('open');
    });
  }

  // Close the menu when clicking outside
  document.addEventListener('click', (event) => {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = button.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton && menu.classList.contains('open')) {
      menu.classList.remove('open');
      hambugerIcon.classList.remove('open');
    }
  });

  // Close the menu on Escape key
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      hambugerIcon.classList.remove('open');
    }
  });
  
  
  const extraPadding = 3;

  const dropdown = document.querySelector('.mobile-menu');
  const main = document.querySelector('main');
  const desktopMenu = document.querySelector('.desktop-menu');

  function isDesktopMenuHidden() {
    return window.getComputedStyle(desktopMenu).display === 'none';
  }

  function updateMainOffset() {
    if (!dropdown || !desktopMenu || !main) return;

    if (isDesktopMenuHidden()) {
      const offset = dropdown.offsetHeight + extraPadding;
      main.style.marginTop = `-${offset}px`;
    } else {
      main.style.marginTop = '0';
    }
  }

  // Resize observer for the dropdown height
  const observer = new ResizeObserver(updateMainOffset);

  // Listen for browser resize to check media query changes
  window.addEventListener('resize', updateMainOffset);
  window.addEventListener('load', updateMainOffset); // ensure it's set on initial load

  if (dropdown && desktopMenu) {
    observer.observe(dropdown);
  }

});

