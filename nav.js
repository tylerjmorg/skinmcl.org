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

  const dropdown = document.querySelector('.mobile-menu-wrapper');
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

  
  const header = document.querySelector('.top-header-bar');
  let lastScrollY = window.scrollY;
  let ticking = false;
  let lastChangeTime = performance.now();

  const scrollThreshold = 50; // How much scroll movement triggers a hide/show
  let scrollEnabled = false;

  // Activate scroll behavior after 3 seconds
  setTimeout(() => {
    scrollEnabled = true;
  }, 1500);

  function updateHeader(scrollY) {
    if (!scrollEnabled) {
      ticking = false;
      return; // Exit early if scroll behavior isn't ready yet
    }

    const scrollDelta = scrollY - lastScrollY;
    const now = performance.now();
    const deltaTime = now - lastChangeTime;

    if (Math.abs(scrollDelta) < scrollThreshold) {
      ticking = false;
      return;
    }

    const duration = Math.min(500, Math.max(50, deltaTime));
    header.style.transition = `top ${duration * 0.0015}s ease`;

    if (scrollDelta > 0 && scrollY > 50) {
      // Scrolling down
      header.style.top = `-${header.offsetHeight + 150}px`;
    } else if (scrollDelta < 0) {
      // Scrolling up
      header.style.top = `10px`;
    }

    lastScrollY = scrollY;
    lastChangeTime = now;
    ticking = false;
  }

  window.addEventListener('scroll', () => {
    const mobileMenu = document.querySelector('.mobile-menu-wrapper');
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      return;
    }

    if (!ticking) {
      requestAnimationFrame(() => {
        updateHeader(window.scrollY);
      });
      ticking = true;
    }
  });

});

