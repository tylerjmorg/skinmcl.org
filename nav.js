//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

function toggleMobileMenu(menu) {
  menu.classList.toggle('open');

  function handleOutsideClick(event) {
    if (!menu.contains(event.target)) {
      menu.classList.remove('open');
      removeListeners();
    }
  }

  function handleEscapeKey(event) {
    if (event.key === 'Escape') {
      menu.classList.remove('open');
      removeListeners();
    }
  }

  function removeListeners() {
    document.removeEventListener('click', handleOutsideClick);
    document.removeEventListener('keydown', handleEscapeKey);
  }

  if (menu.classList.contains('open')) {
    setTimeout(() => {
      // Timeout to allow the original click to finish before listening
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEscapeKey);
    }, 0);
  }
}
