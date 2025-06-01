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

  // Desktop menu items
  fetch('/navigation.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const desktopHeaderNavListItem = document.createElement('li');
      desktopMenuList.appendChild(desktopHeaderNavListItem);

      if (item.dropdown_items) {
        desktopHeaderNavListItem.classList.add('desktop-dropdown');
      }

      if (item.href) {
        const anchor = document.createElement('a');
        anchor.href = item.href;
        anchor.id = `desktop-${item.id}`;
        appendTextWithTrademark(anchor, item.text);
        desktopHeaderNavListItem.appendChild(anchor);
      } else {
        const dropdownToggle = document.createElement('button');
        dropdownToggle.type = 'button';
        dropdownToggle.id = `desktop-${item.id}`;
        dropdownToggle.className = 'desktop-dropdown-toggle';
        appendTextWithTrademark(dropdownToggle, item.text);
        desktopHeaderNavListItem.appendChild(dropdownToggle);

        const desktopHeaderNavListItemDropdownArrow = document.createElement('span');
        desktopHeaderNavListItemDropdownArrow.className = 'desktop-dropdown-arrow';
        const desktopHeaderNavListItemDropdownLeftArrow = document.createElement('span');
        desktopHeaderNavListItemDropdownLeftArrow.className = 'desktop-dropdown-left-arrow';
        desktopHeaderNavListItemDropdownArrow.appendChild(desktopHeaderNavListItemDropdownLeftArrow);

        const desktopHeaderNavListItemDropdownRightArrow = document.createElement('span');
        desktopHeaderNavListItemDropdownRightArrow.className = 'desktop-dropdown-right-arrow';
        desktopHeaderNavListItemDropdownArrow.appendChild(desktopHeaderNavListItemDropdownRightArrow);

        dropdownToggle.appendChild(desktopHeaderNavListItemDropdownArrow);
        dropdownToggle.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            desktopHeaderNavListItem.classList.toggle('open');
          }
        });
      }

      if (item.dropdown_items) {
        const desktopDropdownMenu = document.createElement('ul');
        desktopDropdownMenu.className = 'desktop-dropdown-content';
        desktopHeaderNavListItem.appendChild(desktopDropdownMenu);
        item.dropdown_items.forEach(dropdownItem => {
          const dropdownListItem = document.createElement('li');
          const dropdownAnchor = document.createElement('a');
          dropdownAnchor.href = dropdownItem.href;
          dropdownAnchor.id = `desktop-${dropdownItem.id}`;
          appendTextWithTrademark(dropdownAnchor, dropdownItem.text);
          dropdownListItem.appendChild(dropdownAnchor);
          desktopDropdownMenu.appendChild(dropdownListItem);
        });
      }
    });
  });

function appendTextWithTrademark(parent, text) {
  const parts = text.split('®');
  parts.forEach((part, index) => {
    parent.appendChild(document.createTextNode(part));
    if (index < parts.length - 1) {
      const span = document.createElement('span');
      span.className = 'trademark';
      span.textContent = '®';
      parent.appendChild(span);
    }
  });
}


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

  // Mobile menu items
  fetch('/navigation.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const mobileHeaderNavListItem = document.createElement('li');
      mobileMenuList.appendChild(mobileHeaderNavListItem);
      if(item.dropdown_items) {
        mobileHeaderNavListItem.classList.add(`mobile-dropdown`);
      }

      const anchorMobileHeaderNavListItem = document.createElement('a');
      anchorMobileHeaderNavListItem.href = item.href;
      anchorMobileHeaderNavListItem.id = `mobile-${item.id}`;
      anchorMobileHeaderNavListItem.textContent = item.text;
      mobileHeaderNavListItem.appendChild(anchorMobileHeaderNavListItem);
    });
  });

  const footer = document.querySelector('[data-main-footer]');
  if (!footer) return;

  footer.className = 'inner-footer';

  // Helper function to create elements
  const createEl = (tag, props = {}, children = []) => {
    const el = document.createElement(tag);
    Object.entries(props).forEach(([key, val]) => {
      if (key === "class") el.className = val;
      else if (key === "text") el.textContent = val;
      else if (key === "html") el.innerHTML = val;
      else el.setAttribute(key, val);
    });
    children.forEach(child => el.appendChild(child));
    return el;
  };

  // Logo
  const logo = createEl("a", { class: "center-logo", href: "/" }, [
    createEl("img", {
      width: "150",
      height: "100",
      src: "/elements/logo/logo_wordmark_white.svg",
      alt: "Skin - Medical Cosmetics & Laser"
    })
  ]);

  // Nav links
  const navList = createEl("ul", { class: "footer-hours uppercase" });
  fetch('/navigation.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      const footerNavListItem = document.createElement('li');
      if (item.dropdown_items) {
        footerNavListItem.classList.add('footer-dropdown');
      }

      const anchorFooterNavListItem = document.createElement('a');
      anchorFooterNavListItem.href = item.href;
      anchorFooterNavListItem.id = `footer-${item.id}`;
      anchorFooterNavListItem.textContent = item.text;

      footerNavListItem.appendChild(anchorFooterNavListItem);
      navList.appendChild(footerNavListItem);
    });
  });

const nav = createEl("nav", {}, [navList]);


  // Contact info
  const contactBlock = createEl("div", {}, [
    createEl("p", { class: "footer-start-p" }, [
      createEl("a", {
        class: "white-link",
        target: "_blank",
        href: "https://maps.app.goo.gl/c6R3fychjjvEHcLd6",
        html: "2150 N MAIN ST STE 4<br>NORTH LOGAN UT 84341-1740"
      })
    ]),
    createEl("button", {
      class: "footer-p white-link pointer footer-button",
      "data-phone-button": "",
      text: "435-716-8765"
    }),
    createEl("p", { class: "footer-p" }, [
      createEl("a", {
        class: "white-link",
        href: "mailto:admin@loganmed.org",
        text: "admin@loganmed.org"
      })
    ])
  ]);

  // Hours
  const hours = [
    "Sun: <span class='italic'>Closed</span>",
    "Mon: 8AM — 6PM MT",
    "Tue: 8AM — 6PM MT",
    "Wed: 8AM — 6PM MT",
    "Thu: 8AM — 6PM MT",
    "Fri: 8AM — 6PM MT",
    "Sat: <span class='italic'>Closed</span>",
    "Closed: 12PM — 1PM MT<br>Every weekday"
  ];
  const hoursList = createEl("ul", { class: "footer-hours uppercase" },
    hours.map((line, i) => {
      const cls = i === 7 ? "lunch-closed" : "";
      return createEl("li", { class: cls, html: line });
    })
  );

  // Social
  const socials = [
    ["Facebook", "https://www.facebook.com/SkinMCL/", "/elements/social/facebook_white.svg"],
    ["Google", "https://g.co/kgs/ZkBckvr", "/elements/social/google_white.svg"],
    ["Instagram", "https://www.instagram.com/skinmcl/", "/elements/social/instagram_white.svg"]
  ];
  const socialList = createEl("ul", {
    class: "flex-row col-gap-10 remove-top-20-footer"
  }, socials.map(([title, href, src]) =>
    createEl("li", {}, [
      createEl("a", { target: "_blank", href }, [
        createEl("img", {
          class: "social-media-icon",
          width: "30",
          height: "30",
          title,
          src,
          alt: title
        })
      ])
    ])
  ));
  const socialBlock = createEl("div", {}, [
    createEl("p", { class: "find-us-on uppercase", text: "Find us on" }),
    socialList
  ]);

  // Assemble the footer sections
  const sections = createEl("div", { class: "footer-sections" }, [
    logo, nav, contactBlock, hoursList, socialBlock
  ]);

  // Disclaimer
  const disclaimer = createEl("div", { class: "disclaimer" }, [
    createEl("p", {}, [
      document.createTextNode("Copyright © "),
      createEl("span", { "data-copyright-currentyear": "" }),
      document.createTextNode(" "),
      createEl("a", {
        class: "disclaimer-link",
        target: "_blank",
        href: "https://www.loganmed.org/",
        html: "Logan&nbsp;Medical&nbsp;Group,&nbsp;LLC"
      }),
      createEl("span", { html: ". All&nbsp;rights&nbsp;reserved." })
    ]),
    createEl("ul", {}, [
      createEl("li", {}, [
        createEl("a", {
          href: "/privacy-policy/",
          rel: "privacy-policy",
          text: "Privacy Policy"
        })
      ]),
      createEl("li", {}, [
        createEl("a", {
          href: "/terms-of-service/",
          rel: "terms-of-service",
          text: "Terms of Service"
        })
      ])
    ])
  ]);

  // Append everything
  footer.appendChild(sections);
  footer.appendChild(disclaimer);
});