//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/theme/pride-month-2025/pride_month_2025_promo.css';
link.type = 'text/css';
document.head.appendChild(link);

const promoHeader = document.querySelector('[data-promo-header]');
promoHeader.classList.add('promo-pride-header');

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
colors.forEach(color => {
  const stripe = document.createElement('div');
  stripe.className = `promo-pride-header-stripe-${color}`;
  promoHeader.appendChild(stripe);
});

const ringsContainer = document.createElement('div');
ringsContainer.className = 'promo-pride-header-rings-container';
promoHeader.appendChild(ringsContainer);

const leftRing = document.createElement('div');
leftRing.className = 'promo-pride-header-left-ring';
ringsContainer.appendChild(leftRing);

const rightRing = document.createElement('div');
rightRing.className = 'promo-pride-header-right-ring';
ringsContainer.appendChild(rightRing);

const anchorWrapper = document.createElement('div');
anchorWrapper.className = 'promo-pride-header-anchor-wrapper';
promoHeader.appendChild(anchorWrapper);

const anchor = document.createElement('a');
anchor.className = 'promo-pride-header-anchor';
anchor.href = '/pride/';
anchor.setAttribute('aria-hidden', 'true');
anchor.setAttribute('tabindex', '-1');
anchorWrapper.appendChild(anchor);

const anchorAbove = document.createElement('a');
anchorAbove.className = 'promo-pride-header-anchor-above';
anchorAbove.href = '/pride/';
anchorWrapper.appendChild(anchorAbove);

const anchorImg = document.createElement('img');
anchorImg.src = '/elements/logo/pride_month_header_title.svg';
anchorImg.alt = 'Happy Pride Month';
anchorImg.className = 'promo-pride-header-anchor-img';
anchorAbove.appendChild(anchorImg);

const logos = document.querySelectorAll('img[src="/elements/logo/logo_wordmark_light.svg"]');
logos.forEach(img => {
  img.src = '/elements/logo/logo_light_pride.svg';
});
