//
// Copyright (c) 2025 Skin - Medical Cosmetics & Laser. All rights reserved.
//
// Contributors
// Tyler Morgan <git@tylerjm.org>
//

(function () {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '/theme/pride-month-2025/pride_month_2025_promo.css';
  link.type = 'text/css';
  document.head.appendChild(link);

  // --- Header
  const promoHeader = document.querySelector('[data-promo-header]');
  if (promoHeader) {
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
  }

  // --- Logo Swap
  const logos = document.querySelectorAll('img[src="/elements/logo/logo_wordmark_light.svg"]');
  logos.forEach(img => {
    img.src = '/elements/logo/logo_light_pride.svg';
  });

  // --- Home CTA
  const promoHomeCta = document.querySelector('[data-promo-home-cta]');
  if (promoHomeCta) {
    promoHomeCta.classList.add('promo-pride-home-cta', 'uppercase');

    const promoHomeCtaAnchor = document.createElement('a');
    promoHomeCtaAnchor.className = 'promo-pride-home-cta-anchor';
    promoHomeCtaAnchor.href = '/pride/';

    const promoHomeCtaTitle = document.createElement('span');
    promoHomeCtaTitle.className = 'promo-pride-home-cta-title';
    promoHomeCtaTitle.textContent = 'Happy Pride Month';

    const promoHomeCtaText = document.createElement('span');
    promoHomeCtaText.className = 'promo-pride-home-cta-text';
    promoHomeCtaText.textContent = 'See Pride Offers';

    promoHomeCtaAnchor.appendChild(promoHomeCtaTitle);

    promoHomeCtaAnchor.appendChild(promoHomeCtaText);

    promoHomeCta.appendChild(promoHomeCtaAnchor);
  }

  // --- Services CTA
  const promoServicesCta = document.querySelector('[data-promo-services-cta]');
  if (promoServicesCta) {
    promoServicesCta.classList.add('promo-pride-home-cta', 'uppercase');

    const promoServicesCtaAnchor = document.createElement('a');
    promoServicesCtaAnchor.className = 'promo-pride-home-cta-anchor';
    promoServicesCtaAnchor.href = '/pride/';

    const promoServicesCtaTitle = document.createElement('span');
    promoServicesCtaTitle.className = 'promo-pride-home-cta-title';
    promoServicesCtaTitle.textContent = 'Happy Pride Month';

    const promoServicesCtaText = document.createElement('span');
    promoServicesCtaText.className = 'promo-pride-home-cta-text';
    promoServicesCtaText.textContent = 'See Pride Offers';

    promoServicesCtaAnchor.appendChild(promoServicesCtaTitle);

    promoServicesCtaAnchor.appendChild(promoServicesCtaText);

    promoServicesCta.appendChild(promoServicesCtaAnchor);
  }

  const promoProductsCta = document.querySelector('[data-promo-products-cta]');
  if (promoProductsCta) {
    promoProductsCta.classList.add('promo-pride-home-cta', 'uppercase');

    const promoProductsCtaAnchor = document.createElement('a');
    promoProductsCtaAnchor.className = 'promo-pride-home-cta-anchor';
    promoProductsCtaAnchor.href = '/pride/';

    const promoProductsCtaTitle = document.createElement('span');
    promoProductsCtaTitle.className = 'promo-pride-home-cta-title';
    promoProductsCtaTitle.textContent = 'Happy Pride Month';

    const promoProductsCtaText = document.createElement('span');
    promoProductsCtaText.className = 'promo-pride-home-cta-text';
    promoProductsCtaText.textContent = 'See Pride Offers';

    promoProductsCtaAnchor.appendChild(promoProductsCtaTitle);

    promoProductsCtaAnchor.appendChild(promoProductsCtaText);

    promoProductsCta.appendChild(promoProductsCtaAnchor);
  }

  const promo404Cta = document.querySelector('[data-promo-404-cta]');
  if (promo404Cta) {
    promo404Cta.classList.add('promo-pride-home-cta', 'uppercase');

    const promo404CtaAnchor = document.createElement('a');
    promo404CtaAnchor.className = 'promo-pride-home-cta-anchor';
    promo404CtaAnchor.href = '/pride/';

    const promo404CtaTitle = document.createElement('span');
    promo404CtaTitle.className = 'promo-pride-home-cta-title';
    promo404CtaTitle.textContent = 'Happy Pride Month';

    const promo404CtaText = document.createElement('span');
    promo404CtaText.className = 'promo-pride-home-cta-text';
    promo404CtaText.textContent = 'See Pride Offers';

    promo404CtaAnchor.appendChild(promo404CtaTitle);

    promo404CtaAnchor.appendChild(promo404CtaText);

    promo404Cta.appendChild(promo404CtaAnchor);
  }

  const promoEventsCta = document.querySelector('[data-promo-events-cta]');
  if (promoEventsCta) {
    promoEventsCta.classList.add('promo-pride-home-cta', 'uppercase');

    const promoEventsCtaAnchor = document.createElement('a');
    promoEventsCtaAnchor.className = 'promo-pride-home-cta-anchor';
    promoEventsCtaAnchor.href = '/pride/';

    const promoEventsCtaTitle = document.createElement('span');
    promoEventsCtaTitle.className = 'promo-pride-home-cta-title';
    promoEventsCtaTitle.textContent = 'Happy Pride Month';

    const promoEventsCtaText = document.createElement('span');
    promoEventsCtaText.className = 'promo-pride-home-cta-text';
    promoEventsCtaText.textContent = 'See Pride Offers';

    promoEventsCtaAnchor.appendChild(promoEventsCtaTitle);

    promoEventsCtaAnchor.appendChild(promoEventsCtaText);

    promoEventsCta.appendChild(promoEventsCtaAnchor);
  }
})();
