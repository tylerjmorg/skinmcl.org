//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener("DOMContentLoaded", function () {
  const topHeaderBarContainer = document.querySelector('[data-nav-header]');

  const topHeaderBar = document.createElement('div');
  topHeaderBar.className = 'top-header-bar';
  topHeaderBarContainer.appendChild(topHeaderBar);

  const brandDiv = document.createElement('div');
  brandDiv.id = 'brand';
  topHeaderBar.appendChild(brandDiv);

  const brandAnchor = document.createElement('a');
  brandAnchor.href = '/';
  brandDiv.appendChild(brandAnchor);

  const brandImg = document.createElement('img');
  brandImg.src = '/elements/logo/logo_white.svg';
  brandImg.alt = 'Skin logo';
  brandImg.width = '60';
  brandImg.height = '35';
  brandAnchor.appendChild(brandImg);

  const phoneDiv = document.createElement('div');
  phoneDiv.className = 'absolute-center';
  topHeaderBar.appendChild(phoneDiv);

  const phoneButton = document.createElement('button');
  phoneButton.classList.add('white-link');
  phoneButton.classList.add('pointer');
  phoneButton.setAttribute('data-phone-button', '');
  phoneButton.textContent = '435-716-8765';
  phoneDiv.appendChild(phoneButton);

  const desktopMenu = document.createElement('nav');
  desktopMenu.className = 'desktop-menu';
  topHeaderBar.appendChild(desktopMenu);

  const desktopMenuList = document.createElement('ul');
  desktopMenuList.className = 'uppercase';
  desktopMenu.appendChild(desktopMenuList);

  const desktopMenuItems = [
    { text: 'Home', href: '/', id: 'desktop-home' },
    { text: 'About', href: '/about/', id: 'desktop-about' },
    { text: 'Services', href: '/services/', id: 'desktop-services' },
    { text: 'Products', href: '/products/', id: 'desktop-products' },
    { text: 'Events', href: '/events/', id: 'desktop-events' },
    { text: 'Contact', href: '/contact/', id: 'desktop-contact' }
  ];

  desktopMenuItems.forEach(item => {
    const desktopHeaderNavListItem = document.createElement('li');
    desktopMenuList.appendChild(desktopHeaderNavListItem);

    const anchorDesktopHeaderNavListItem = document.createElement('a');
    anchorDesktopHeaderNavListItem.href = item.href;
    anchorDesktopHeaderNavListItem.id = item.id;
    anchorDesktopHeaderNavListItem.textContent = item.text;
    desktopHeaderNavListItem.appendChild(anchorDesktopHeaderNavListItem);
  });

  const mobileMenuIcon = document.createElement('nav');
  mobileMenuIcon.id = 'hamburger-icon'; 
  mobileMenuIcon.setAttribute('data-mobile-menu-button', '');
  topHeaderBar.appendChild(mobileMenuIcon);

  const mobileMenuButton = document.createElement('button');
  mobileMenuButton.id = 'hamburger-button';
  mobileMenuButton.className = 'pointer';
  mobileMenuButton.setAttribute('aria-label', 'Navigate Menu');
  mobileMenuIcon.appendChild(mobileMenuButton);

  const mobileMenuBar1 = document.createElement('span');
  mobileMenuBar1.className = 'bar1';
  mobileMenuButton.appendChild(mobileMenuBar1);

  const mobileMenuBar2 = document.createElement('span');
  mobileMenuBar2.className = 'bar2';
  mobileMenuButton.appendChild(mobileMenuBar2);

  const mobileMenuBar3 = document.createElement('span');
  mobileMenuBar3.className = 'bar3';
  mobileMenuButton.appendChild(mobileMenuBar3);

  const mobileMenu = document.createElement('nav');
  mobileMenu.className = 'mobile-nav';
  topHeaderBarContainer.appendChild(mobileMenu);

  const mobileMenuList = document.createElement('ul');
  mobileMenuList.classList.add('mobile-menu');
  mobileMenuList.classList.add('uppercase');
  mobileMenuList.setAttribute('data-mobile-menu', '');
  mobileMenu.appendChild(mobileMenuList);

  const mobileMenuItems = [
    { text: 'Home', href: '/', id: 'mobile-home' },
    { text: 'About', href: '/about/', id: 'mobile-about' },
    { text: 'Services', href: '/services/', id: 'mobile-services' },
    { text: 'Products', href: '/products/', id: 'mobile-products' },
    { text: 'Events', href: '/events/', id: 'mobile-events' },
    { text: 'Contact', href: '/contact/', id: 'mobile-contact' }
  ];

  mobileMenuItems.forEach(item => {
    const mobileHeaderNavListItem = document.createElement('li');
    mobileMenuList.appendChild(mobileHeaderNavListItem);

    const anchorMobileHeaderNavListItem = document.createElement('a');
    anchorMobileHeaderNavListItem.href = item.href;
    anchorMobileHeaderNavListItem.id = item.id;
    anchorMobileHeaderNavListItem.textContent = item.text;
    mobileHeaderNavListItem.appendChild(anchorMobileHeaderNavListItem);
  });
});