//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

const el = document.querySelector('[data-back-to-top]');

window.addEventListener('scroll', () => {
  el.classList.toggle('visible', window.scrollY > 300);
});

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';

el.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: scrollBehavior });
});

