//
// Copyright (c) 2025 Skin - Medical Cosmetics & Laser. All rights reserved.
//
// Contributors
// Tyler Morgan <git@tylerjm.org>
//

const promoHeader = document.querySelector('[data-promo-header]');

if (promoHeader) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/theme/halloween-2025/halloween_2025_promo.css';
  link.type = 'text/css';
  document.head.appendChild(link);

  const bgLink = document.createElement('a');
  bgLink.className = 'halloween-header-background';
  bgLink.href = '/october-specials/';

  const textLink = document.createElement('a');
  textLink.className = 'halloween-header-text';
  textLink.href = '/october-specials/';

  const leftSkull = document.createElement('img');
  leftSkull.src = '/theme/halloween-2025/skull.svg';
  leftSkull.height = 25;
  leftSkull.alt = 'Skull Icon';
  leftSkull.className = 'left-promo-skull';

  const rightSkull = document.createElement('img');
  rightSkull.src = '/theme/halloween-2025/skull.svg';
  rightSkull.height = 25;
  rightSkull.alt = 'Skull Icon';
  rightSkull.className = 'right-promo-skull';

  textLink.append(leftSkull, 'Spooky Specials', rightSkull);

  promoHeader.append(bgLink, textLink);
}
