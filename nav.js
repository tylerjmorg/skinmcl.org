//
// Copyright (c) 2025 Skin - Medical Cosmetics & Laser. All rights reserved.
//
// Contributors
// Tyler Morgan <git@tylerjm.org>
//

// Boulevard Self-Booking overlay
(function (a) {
  var b = {
    businessId: 'b80dc0fe-2972-4363-b7b7-0ea0df0767fb',
    gaMeasurementId: 'G-TDZ7SH7P0W',
  };

  var c = a.createElement('script');
  var d = a.querySelector('script');

  c.src = 'https://static.joinboulevard.com/injector.min.js';
  c.async = true;
  c.onload = function () {
    blvd.init(b);
  };

  d.parentNode.insertBefore(c, d);
})

(document);
// End Boulevard Self-Booking overlay

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
    const desktopDropdowns = document.querySelectorAll('.desktop-dropdown');
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      return;
    }

    let anyOpen = false;
    desktopDropdowns.forEach(dropdown => {
      if (dropdown.classList.contains('open')) {
        anyOpen = true;
      }
    });

    if (anyOpen) {
      return;
    }

    if (!ticking) {
      requestAnimationFrame(() => {
        updateHeader(window.scrollY);
      });
      ticking = true;
    }
  });

  // const closeButton = document.querySelector('[data-close-rewards]');
  // const modal = document.querySelector('#rewards-dialog');

  // Close modal when close button is clicked
  // closeButton.addEventListener('click', () => {
  //   modal.close();
  //   if (document.referrer && document.referrer !== window.location.href) {
  //       window.history.back();
  //   } else {
  //     window.location.href = '/';
  //   }
  // });


  // Open modal if URL hash is "#sign-in"
  // window.addEventListener('DOMContentLoaded', () => {
  //   if (window.location.hash === '#sign-in' || window.location.hash === '#login') {
  //     modal.showModal();
  //   }
  // });

  // Optional: if user navigates to "#sign-in" after load
  // window.addEventListener('hashchange', () => {
  //   if (window.location.hash === '#sign-in' || window.location.hash === '#login') {
  //     modal.showModal();
  //   }
  // });

  
  
  
  window.addEventListener('load', () => {
    if (window.location.hash === '#gift-card' || window.location.hash === '#gift-cards') {
      if (window.blvd && typeof blvd.openBookingWidget === 'function') {
        blvd.openBookingWidget({
          urlParams: {
            locationId: '1e429c6f-d454-4d4d-b838-82ddcaabe5df',
            path: '/cart/menu/Gift%20Cards',
            visitType: 'GIFT_CARD'
          }
        });
      }
    }
  });

  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#gift-card' || 
      window.location.hash === '#gift-cards' ||
      window.location.hash === '#giftcard'
    ) {
      if (window.blvd && typeof blvd.openBookingWidget === 'function') {
        blvd.openBookingWidget({
          urlParams: {
            locationId: '1e429c6f-d454-4d4d-b838-82ddcaabe5df',
            path: '/cart/menu/Gift%20Cards',
            visitType: 'GIFT_CARD'
          }
        });
      }
    }
  });




  window.addEventListener('load', () => {
    // Run once on page load
    if (
      window.location.hash === '#package' || 
      window.location.hash === '#packages'
    ) {
      if (window.blvd && typeof blvd.openBookingWidget === 'function') {
        blvd.openBookingWidget({
          urlParams: {
            locationId: '1e429c6f-d454-4d4d-b838-82ddcaabe5df',
            path: '/cart/menu',
            visitType: 'PACKAGE'
          }
        });
      }
    }
  });

  // Run every time hash changes
  window.addEventListener('hashchange', () => {
    if (
      window.location.hash === '#package' || 
      window.location.hash === '#packages'
    ) {
      if (window.blvd && typeof blvd.openBookingWidget === 'function') {
        blvd.openBookingWidget({
          urlParams: {
            locationId: '1e429c6f-d454-4d4d-b838-82ddcaabe5df',
            path: '/cart/menu',
            visitType: 'PACKAGE'
          }
        });
      }
    }
  });

  window.addEventListener('load', () => {
    if (
      window.location.hash === '#sign-in' ||
      window.location.hash === '#signin' ||
      window.location.hash === '#login' ||
      window.location.hash === '#log-in'
    ) {
      window.location.href = "https://blvd.app/@skinmcl/login";
    }
  });

  window.addEventListener('hashchange', () => {
    if (
      window.location.hash === '#sign-in' ||
      window.location.hash === '#signin' ||
      window.location.hash === '#login' ||
      window.location.hash === '#log-in'
    ) {
      window.location.href = "https://blvd.app/@skinmcl/login";
    }
  });
});

// Select all buttons with the class "secondary-booking-button"
const secondaryButtons = document.querySelectorAll('.secondary-booking-button');

secondaryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Add the active class
    button.classList.add('secondary-booking-button-active');

    // Remove the class after 3 seconds (3000ms)
    setTimeout(() => {
      button.classList.remove('secondary-booking-button-active');
    }, 3000);
  });
});

const todaysDate = document.querySelectorAll('[data-todays-date]');
if (todaysDate) {
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions = { 
    hour: 'numeric', 
    minute: '2-digit', 
    second: '2-digit', 
    timeZoneName: 'short' 
  };
  
  const now = new Date();
  
  const formattedDate = now.toLocaleDateString(undefined, dateOptions);
  const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
  
  const formattedDateTime = `${formattedDate}, ${formattedTime}`;
  
  todaysDate.forEach(element => {
    element.textContent = formattedDateTime;
  });
}

const browserInfoElements = document.querySelectorAll('[data-browser-info]');
if (browserInfoElements) {
  const ua = navigator.userAgent;
  let browserName = '';
  let browserVersion = '';
  let osName = '';
  let osVersion = '';

  // --- Browser detection ---
  if (/Chrome\/(\d+)/.test(ua) && !/Edg\//.test(ua) && !/OPR\//.test(ua)) {
    browserName = 'Chrome';
    browserVersion = ua.match(/Chrome\/(\d+)/)[1];
  } else if (/Edg\/(\d+)/.test(ua)) {
    browserName = 'Edge';
    browserVersion = ua.match(/Edg\/(\d+)/)[1];
  } else if (/Firefox\/(\d+)/.test(ua)) {
    browserName = 'Firefox';
    browserVersion = ua.match(/Firefox\/(\d+)/)[1];
  } else if (/Safari\/(\d+)/.test(ua) && !/Chrome\//.test(ua)) {
    browserName = 'Safari';
    browserVersion = ua.match(/Version\/(\d+)/)?.[1] || '';
  }

  // --- OS detection ---
  if (/Windows NT/.test(ua)) {
    osName = 'Windows';
    const versionMap = {
      '10.0': '10 or 11',
      '6.3': '8.1',
      '6.2': '8',
      '6.1': '7',
      '6.0': 'Vista',
      '5.1': 'XP'
    };
    const match = ua.match(/Windows NT ([0-9.]+)/);
    osVersion = versionMap[match?.[1]] || match?.[1] || '';
  } else if (/Mac OS X/.test(ua)) {
    osName = 'macOS';
    const match = ua.match(/Mac OS X ([0-9_]+)/);
    osVersion = '';
  } else if (/iPhone OS/.test(ua)) {
    osName = 'iOS';
    const match = ua.match(/iPhone OS ([0-9_]+)/);
    osVersion = match ? match[1].replace(/_/g, '.') : '';
  } else if (/iPad;.*CPU OS/.test(ua)) {
    osName = 'iPadOS';
    const match = ua.match(/CPU OS ([0-9_]+)/);
    osVersion = match ? match[1].replace(/_/g, '.') : '';
  } else if (/Android/.test(ua)) {
    osName = 'Android';
    const match = ua.match(/Android ([0-9.]+)/);
    osVersion = match ? match[1] : '';
  } else if (/Linux/.test(ua)) {
    osName = 'Linux';
  }

  // --- Compose text ---
  const browserText = browserName && browserVersion ? `${browserName} ${browserVersion}` : '';
  const osText = osName ? `${osName}${osVersion ? ' ' + osVersion : ''}` : '';
  const fullText = [osText, browserText].filter(Boolean).join(' on ');

  browserInfoElements.forEach(element => {
    element.textContent = fullText ? ` via ${fullText}` : '';
  });
}
