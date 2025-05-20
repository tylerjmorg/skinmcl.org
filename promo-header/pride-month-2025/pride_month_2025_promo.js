//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = '/promo-header/pride-month-2025/pride_month_2025_promo.css'; // Replace with the actual path to your CSS file
link.type = 'text/css';
document.head.appendChild(link);

const promoHeader = document.querySelector('[data-promo-header]');

  promoHeader.classList.add('promo-pride-header');

  const redStripe = document.createElement('div');
  redStripe.className = 'promo-pride-header-stripe-red';
  promoHeader.appendChild(redStripe);

  const orangeStripe = document.createElement('div');
  orangeStripe.className = 'promo-pride-header-stripe-orange';
  promoHeader.appendChild(orangeStripe);

  const yellowStripe = document.createElement('div');
  yellowStripe.className = 'promo-pride-header-stripe-yellow';
  promoHeader.appendChild(yellowStripe);

  const greenStripe = document.createElement('div');
  greenStripe.className = 'promo-pride-header-stripe-green';
  promoHeader.appendChild(greenStripe);

  const blueStripe = document.createElement('div');
  blueStripe.className = 'promo-pride-header-stripe-blue';
  promoHeader.appendChild(blueStripe);

  const purpleStripe = document.createElement('div');
  purpleStripe.className = 'promo-pride-header-stripe-purple';
  promoHeader.appendChild(purpleStripe);

  const anchor = document.createElement('a');
  anchor.className = 'promo-pride-header-anchor';
  anchor.href = '/about/';

  const anchorTextBehind = document.createElement('span');
  anchorTextBehind.setAttribute('aria-hidden', 'true');
  anchorTextBehind.className = 'promo-pride-header-anchor-text-behind';
  anchorTextBehind.textContent = 'Happy Pride Month';
  anchor.appendChild(anchorTextBehind);

  const anchorText = document.createElement('img');
  anchorText.src = '/elements/logo/pride_month_header_title.svg';
  anchorText.alt = 'Happy Pride Month';
  anchorText.className = 'promo-pride-header-anchor-text';
  anchor.appendChild(anchorText);

  promoHeader.appendChild(anchor);


