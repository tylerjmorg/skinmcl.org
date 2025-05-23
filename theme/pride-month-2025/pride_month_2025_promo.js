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
    promoHomeCta.className = 'promo-pride-home-cta';
    promoHomeCta.classList.add('uppercase');

    const promoHomeCtaTitle = document.createElement('a');
    promoHomeCtaTitle.className = 'promo-pride-home-cta-title';
    promoHomeCtaTitle.href = '/pride/';
    promoHomeCtaTitle.textContent = 'Happy Pride Month';
    promoHomeCta.appendChild(promoHomeCtaTitle);

    const promoHomeCtaText = document.createElement('p');
    promoHomeCtaText.className = 'promo-pride-home-cta-text';
    promoHomeCtaText.textContent = 'See Pride Offers';
    promoHomeCtaTitle.appendChild(promoHomeCtaText);
  }

  // --- Services CTA
  const promoServicesCta = document.querySelector('[data-promo-services-cta]');
  if (promoServicesCta) {
    promoServicesCta.classList.add('promo-pride-home-cta', 'uppercase');

    const promoServicesCtaTitle = document.createElement('a');
    promoServicesCtaTitle.className = 'promo-pride-home-cta-title';
    promoServicesCtaTitle.href = '/pride/';
    promoServicesCtaTitle.textContent = 'Happy Pride Month';
    promoServicesCta.appendChild(promoServicesCtaTitle);

    const promoServicesCtaText = document.createElement('p');
    promoServicesCtaText.className = 'promo-pride-home-cta-text';
    promoServicesCtaText.textContent = 'See Pride Offers';
    promoServicesCtaTitle.appendChild(promoServicesCtaText);
  }

  const promoProductsCta = document.querySelector('[data-promo-products-cta]');
  if (promoProductsCta) {
    promoProductsCta.classList.add('promo-pride-home-cta', 'uppercase');

    const promoProductsCtaTitle = document.createElement('a');
    promoProductsCtaTitle.className = 'promo-pride-home-cta-title';
    promoProductsCtaTitle.href = '/pride/';
    promoProductsCtaTitle.textContent = 'Happy Pride Month';
    promoProductsCta.appendChild(promoProductsCtaTitle);

    const promoProductsCtaText = document.createElement('p');
    promoProductsCtaText.className = 'promo-pride-home-cta-text';
    promoProductsCtaText.textContent = 'See Pride Offers';
    promoProductsCtaTitle.appendChild(promoProductsCtaText);
  }

  const promo404Cta = document.querySelector('[data-promo-404-cta]');
  if (promo404Cta) {
    promo404Cta.classList.add('promo-pride-home-cta', 'uppercase');

    const promo404CtaTitle = document.createElement('a');
    promo404CtaTitle.className = 'promo-pride-home-cta-title';
    promo404CtaTitle.href = '/pride/';
    promo404CtaTitle.textContent = 'Happy Pride Month';
    promo404Cta.appendChild(promo404CtaTitle);

    const promo404CtaText = document.createElement('p');
    promo404CtaText.className = 'promo-pride-home-cta-text';
    promo404CtaText.textContent = 'See Pride Offers';
    promo404CtaTitle.appendChild(promo404CtaText);
  }

  const promoEventsCta = document.querySelector('[data-promo-events-cta]');
  if (promoEventsCta) {
    promoEventsCta.classList.add('promo-pride-home-cta', 'uppercase');

    const promoEventsCtaTitle = document.createElement('a');
    promoEventsCtaTitle.className = 'promo-pride-home-cta-title';
    promoEventsCtaTitle.href = '/pride/';
    promoEventsCtaTitle.textContent = 'Happy Pride Month';
    promoEventsCta.appendChild(promoEventsCtaTitle);

    const promoEventsCtaText = document.createElement('p');
    promoEventsCtaText.className = 'promo-pride-home-cta-text';
    promoEventsCtaText.textContent = 'See Pride Offers';
    promoEventsCtaTitle.appendChild(promoEventsCtaText);
  }
})();
