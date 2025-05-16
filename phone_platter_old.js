//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener("DOMContentLoaded", function () {
  const platter = document.querySelector('[data-phone-platter]');
  const callPlater = document.querySelector('[data-call-platter]');
  const textPlatter = document.querySelector('[data-text-platter]');
  const openButtons = document.querySelectorAll('[data-phone-button]');
  const closeButton = document.querySelector('[data-close-platter]');

  // Store all potentially focusable elements outside the platter
  const focusableSelectors = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const allFocusable = Array.from(document.querySelectorAll(focusableSelectors));
  const platterFocusable = Array.from(platter.querySelectorAll(focusableSelectors));

  function isInsidePlatter(el) {
    return platter.contains(el);
  }

  function disableOutsideFocus() {
    allFocusable.forEach(el => {
      if (!isInsidePlatter(el)) {
        el.setAttribute('data-original-tabindex', el.getAttribute('tabindex') || '');
        el.setAttribute('tabindex', '-1');
      }
    });
  }

  function restoreOutsideFocus() {
    allFocusable.forEach(el => {
      if (!isInsidePlatter(el)) {
        const original = el.getAttribute('data-original-tabindex');
        if (original === '') {
          el.removeAttribute('tabindex');
        } else {
          el.setAttribute('tabindex', original);
        }
        el.removeAttribute('data-original-tabindex');
      }
    });
  }

  function openPlatter() {
    platter.classList.add('visible');
    platter.setAttribute('aria-hidden', 'false');
    callPlater.setAttribute('tabindex', '0');
    textPlatter.setAttribute('tabindex', '0');
    closeButton.setAttribute('tabindex', '0');
    disableOutsideFocus();
  }

  function closePlatter() {
    platter.classList.remove('visible');
    platter.setAttribute('aria-hidden', 'true');
    callPlater.setAttribute('tabindex', '-1');
    textPlatter.setAttribute('tabindex', '-1');
    closeButton.setAttribute('tabindex', '-1');
    restoreOutsideFocus();
  }

  function togglePlatter() {
    if (platter.classList.contains('visible')) {
      closePlatter();
    } else {
      openPlatter();
    }
  }

  openButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlatter();
    });

    button.addEventListener('keydown', (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        togglePlatter();
      }
    });
  });

  closeButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    closePlatter();
  });
  
  closeButton?.addEventListener('keydown', (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closePlatter();
    }
  });

  document.addEventListener('click', function (e) {
    const isClickInsidePlatter = platter.contains(e.target);
    const isClickOnButton = [...openButtons].some(btn => btn.contains(e.target));
    if (!isClickInsidePlatter && !isClickOnButton) {
      closePlatter();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === "Escape") closePlatter();
  });

  // Initial accessibility state
  platter.setAttribute('aria-hidden', 'true');
  platter.setAttribute('tabindex', '-1');
  callPlater.setAttribute('tabindex', '-1');
  textPlatter.setAttribute('tabindex', '-1');
  closeButton.setAttribute('tabindex', '-1');
});
