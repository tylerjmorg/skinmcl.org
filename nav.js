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
});

