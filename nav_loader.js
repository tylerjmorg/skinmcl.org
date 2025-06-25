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

  function createExternalDesktopLinkIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("class", "external-desktop-svg");
    svg.setAttribute("height", "13");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-labelledby", "external-link-title");
    
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.setAttribute("id", "external-link-title");
    title.textContent = "External Link";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M206.78-100.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85H427q22.09 0 37.54 15.46Q480-828.3 480-806.22q0 22.09-15.46 37.55-15.45 15.45-37.54 15.45H206.78v546.44h546.44V-427q0-22.09 15.45-37.54Q784.13-480 806.22-480q22.08 0 37.54 15.46 15.46 15.45 15.46 37.54v220.22q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H206.78Zm546.44-578.91L442-368.48q-14.96 14.96-36.48 14.68-21.52-.29-36.48-15.24-14.95-14.96-14.95-36.77 0-21.8 14.95-36.76l310.65-310.65H613q-22.09 0-37.54-15.45Q560-784.13 560-806.22q0-22.08 15.46-37.54 15.45-15.46 37.54-15.46h193.22q22.08 0 37.54 15.46t15.46 37.54V-613q0 22.09-15.46 37.54Q828.3-560 806.22-560q-22.09 0-37.55-15.46-15.45-15.45-15.45-37.54v-66.69Z");

    svg.appendChild(title);
    svg.appendChild(path);
    return svg;
  }

  // Desktop menu items
  fetch('/navigation.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      if (item.hidden || item.header_hidden || item.desktop_header_hidden) return;

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
        if (
          !item.href.startsWith("/") &&
          !item.href.startsWith("https://skinmcl.org/")
        ) {
          anchor.appendChild(createExternalDesktopLinkIcon());
          anchor.target = "_blank";
        }
        desktopHeaderNavListItem.appendChild(anchor);
      } else {
        const desktopDropdownToggle = document.createElement('button');
        desktopDropdownToggle.type = 'button';
        desktopDropdownToggle.id = `desktop-${item.id}`;
        desktopDropdownToggle.className = 'desktop-dropdown-toggle';
        desktopDropdownToggle.setAttribute('aria-expanded', 'false');
        appendTextWithTrademark(desktopDropdownToggle, item.text);
        desktopHeaderNavListItem.appendChild(desktopDropdownToggle);

        const desktopHeaderNavListItemDropdownArrow = document.createElement('span');
        desktopHeaderNavListItemDropdownArrow.className = 'desktop-dropdown-arrow';
        const desktopHeaderNavListItemDropdownLeftArrow = document.createElement('span');
        desktopHeaderNavListItemDropdownLeftArrow.className = 'desktop-dropdown-left-arrow';
        desktopHeaderNavListItemDropdownArrow.appendChild(desktopHeaderNavListItemDropdownLeftArrow);

        const desktopHeaderNavListItemDropdownRightArrow = document.createElement('span');
        desktopHeaderNavListItemDropdownRightArrow.className = 'desktop-dropdown-right-arrow';
        desktopHeaderNavListItemDropdownArrow.appendChild(desktopHeaderNavListItemDropdownRightArrow);

        desktopDropdownToggle.appendChild(desktopHeaderNavListItemDropdownArrow);
        desktopDropdownToggle.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            desktopHeaderNavListItem.classList.toggle('open');
            if (desktopHeaderNavListItem.classList.contains('open')) {
              desktopDropdownToggle.setAttribute('aria-expanded', 'true');
            } else {
              desktopDropdownToggle.setAttribute('aria-expanded', 'false');
            }
          }
        });
      }

      if (item.dropdown_items) {
        const desktopDropdownMenu = document.createElement('ul');
        desktopDropdownMenu.className = 'desktop-dropdown-content';
        desktopHeaderNavListItem.appendChild(desktopDropdownMenu);
        item.dropdown_items.forEach(dropdownItem => {
          if (dropdownItem.hidden || dropdownItem.header_hidden || dropdownItem.desktop_header_hidden) return;

          const desktopDropdownListItem = document.createElement('li');
          const desktopDropdownAnchor = document.createElement('a');
          desktopDropdownAnchor.href = dropdownItem.href;
          desktopDropdownAnchor.id = `desktop-${dropdownItem.id}`;
          appendTextWithTrademark(desktopDropdownAnchor, dropdownItem.text);
          if (
            !dropdownItem.href.startsWith("/") &&
            !dropdownItem.href.startsWith("https://skinmcl.org/")
          ) {
            desktopDropdownAnchor.appendChild(createExternalDesktopLinkIcon());
            desktopDropdownAnchor.target = "_blank";
          }
          desktopDropdownListItem.appendChild(desktopDropdownAnchor);
          desktopDropdownMenu.appendChild(desktopDropdownListItem);
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

  const mobileMenuWrapper = document.createElement('div');
  mobileMenuWrapper.className = 'mobile-menu-wrapper';
  mobileMenuWrapper.setAttribute('data-mobile-menu', '');
  mobileMenu.appendChild(mobileMenuWrapper);

  const mobileMenuList = document.createElement('ul');
  mobileMenuList.classList.add('mobile-menu');
  mobileMenuList.classList.add('uppercase');
  mobileMenuWrapper.appendChild(mobileMenuList);

  function createExternalMobileLinkIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("class", "external-mobile-svg");
    svg.setAttribute("height", "13");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-labelledby", "external-link-title");
    
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.setAttribute("id", "external-link-title");
    title.textContent = "External Link";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M206.78-100.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85H427q22.09 0 37.54 15.46Q480-828.3 480-806.22q0 22.09-15.46 37.55-15.45 15.45-37.54 15.45H206.78v546.44h546.44V-427q0-22.09 15.45-37.54Q784.13-480 806.22-480q22.08 0 37.54 15.46 15.46 15.45 15.46 37.54v220.22q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H206.78Zm546.44-578.91L442-368.48q-14.96 14.96-36.48 14.68-21.52-.29-36.48-15.24-14.95-14.96-14.95-36.77 0-21.8 14.95-36.76l310.65-310.65H613q-22.09 0-37.54-15.45Q560-784.13 560-806.22q0-22.08 15.46-37.54 15.45-15.46 37.54-15.46h193.22q22.08 0 37.54 15.46t15.46 37.54V-613q0 22.09-15.46 37.54Q828.3-560 806.22-560q-22.09 0-37.55-15.46-15.45-15.45-15.45-37.54v-66.69Z");

    svg.appendChild(title);
    svg.appendChild(path);
    return svg;
  }

  // Mobile menu items
  fetch('/navigation.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      if (item.hidden || item.header_hidden || item.mobile_header_hidden) return;

      const mobileHeaderNavListItem = document.createElement('li');
      mobileMenuList.appendChild(mobileHeaderNavListItem);

      if (item.dropdown_items) {
        mobileHeaderNavListItem.classList.add('mobile-dropdown');
      }

      if (item.href) {
        const anchor = document.createElement('a');
        anchor.href = item.href;
        anchor.id = `mobile-${item.id}`;
        appendTextWithTrademark(anchor, item.text);
        if (
          !item.href.startsWith("/") &&
          !item.href.startsWith("https://skinmcl.org/")
        ) {
          anchor.appendChild(createExternalMobileLinkIcon());
          anchor.target = "_blank";
        }
        mobileHeaderNavListItem.appendChild(anchor);
      } else {
        const mobileDropdownToggle = document.createElement('button');
        mobileDropdownToggle.type = 'button';
        mobileDropdownToggle.id = `mobile-${item.id}`;
        mobileDropdownToggle.className = 'mobile-dropdown-toggle';
        mobileDropdownToggle.setAttribute('aria-expanded', 'false');
        appendTextWithTrademark(mobileDropdownToggle, item.text);
        mobileHeaderNavListItem.appendChild(mobileDropdownToggle);

        const mobileHeaderNavListItemDropdownArrow = document.createElement('span');
        mobileHeaderNavListItemDropdownArrow.className = 'mobile-dropdown-arrow';
        const mobileHeaderNavListItemDropdownLeftArrow = document.createElement('span');
        mobileHeaderNavListItemDropdownLeftArrow.className = 'mobile-dropdown-x-arrow';
        mobileHeaderNavListItemDropdownArrow.appendChild(mobileHeaderNavListItemDropdownLeftArrow);

        const mobileHeaderNavListItemDropdownRightArrow = document.createElement('span');
        mobileHeaderNavListItemDropdownRightArrow.className = 'mobile-dropdown-y-arrow';
        mobileHeaderNavListItemDropdownArrow.appendChild(mobileHeaderNavListItemDropdownRightArrow);

        mobileDropdownToggle.appendChild(mobileHeaderNavListItemDropdownArrow);

        if (item.dropdown_items) {
          const mobileDropdownMenu = document.createElement('ul');
          mobileDropdownMenu.className = 'mobile-dropdown-content';
          mobileHeaderNavListItem.appendChild(mobileDropdownMenu);

          item.dropdown_items.forEach(dropdownItem => {
            if (dropdownItem.hidden || dropdownItem.header_hidden || dropdownItem.mobile_header_hidden) return;

            const mobileDropdownListItem = document.createElement('li');
            const mobileDropdownAnchor = document.createElement('a');
            mobileDropdownAnchor.href = dropdownItem.href;
            mobileDropdownAnchor.id = `mobile-${dropdownItem.id}`;
            appendTextWithTrademark(mobileDropdownAnchor, dropdownItem.text);
            if (
              !dropdownItem.href.startsWith("/") &&
              !dropdownItem.href.startsWith("https://skinmcl.org/")
            ) {
              mobileDropdownAnchor.appendChild(createExternalMobileLinkIcon());
              mobileDropdownAnchor.target = "_blank";
            }
            mobileDropdownListItem.appendChild(mobileDropdownAnchor);
            mobileDropdownMenu.appendChild(mobileDropdownListItem);
          });

          // Toggle on click
          mobileDropdownToggle.addEventListener('click', () => {
            mobileHeaderNavListItem.classList.toggle('open');
            mobileDropdownMenu.classList.toggle('open');
            if (mobileHeaderNavListItem.classList.contains('open')) {
              mobileDropdownToggle.setAttribute('aria-expanded', 'true');
            } else {
              mobileDropdownToggle.setAttribute('aria-expanded', 'false');
            }
          });
        }
      }
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

  function createExternalFooterLinkIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("viewBox", "0 -960 960 960");
    svg.setAttribute("class", "external-footer-svg");
    svg.setAttribute("height", "13");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-labelledby", "external-link-title");
    
    const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
    title.setAttribute("id", "external-link-title");
    title.textContent = "External Link";
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", "M206.78-100.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85H427q22.09 0 37.54 15.46Q480-828.3 480-806.22q0 22.09-15.46 37.55-15.45 15.45-37.54 15.45H206.78v546.44h546.44V-427q0-22.09 15.45-37.54Q784.13-480 806.22-480q22.08 0 37.54 15.46 15.46 15.45 15.46 37.54v220.22q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H206.78Zm546.44-578.91L442-368.48q-14.96 14.96-36.48 14.68-21.52-.29-36.48-15.24-14.95-14.96-14.95-36.77 0-21.8 14.95-36.76l310.65-310.65H613q-22.09 0-37.54-15.45Q560-784.13 560-806.22q0-22.08 15.46-37.54 15.45-15.46 37.54-15.46h193.22q22.08 0 37.54 15.46t15.46 37.54V-613q0 22.09-15.46 37.54Q828.3-560 806.22-560q-22.09 0-37.55-15.46-15.45-15.45-15.45-37.54v-66.69Z");

    svg.appendChild(title);
    svg.appendChild(path);
    return svg;
  }

  // Nav links
  const navList = createEl("ul", { class: "footer-hours uppercase footer-nav-list" });
  fetch('/navigation.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(item => {
      if (item.hidden || item.footer_hidden) return;

      const footerHeaderNavListItem = document.createElement('li');
      navList.appendChild(footerHeaderNavListItem);

      if (item.dropdown_items) {
        footerHeaderNavListItem.classList.add('footer-dropdown');
      }

      if (item.href) {
        const anchor = document.createElement('a');
        anchor.classList.add('footer-nav-no-nest');
        anchor.href = item.href;
        anchor.id = `footer-${item.id}`;
        appendTextWithTrademark(anchor, item.text);
        if (
          !item.href.startsWith("/") &&
          !item.href.startsWith("https://skinmcl.org/")
        ) {
          anchor.appendChild(createExternalFooterLinkIcon());
          anchor.target = "_blank";
        }
        footerHeaderNavListItem.appendChild(anchor);
      } else {
        const footerDropdownToggle = document.createElement('button');
        footerDropdownToggle.type = 'button';
        footerDropdownToggle.id = `footer-${item.id}`;
        footerDropdownToggle.className = 'footer-dropdown-toggle';
        footerDropdownToggle.setAttribute('aria-expanded', 'false');
        appendTextWithTrademark(footerDropdownToggle, item.text);
        footerHeaderNavListItem.appendChild(footerDropdownToggle);

        const footerHeaderNavListItemDropdownArrow = document.createElement('span');
        footerHeaderNavListItemDropdownArrow.className = 'footer-dropdown-arrow';
        const footerHeaderNavListItemDropdownLeftArrow = document.createElement('span');
        footerHeaderNavListItemDropdownLeftArrow.className = 'footer-dropdown-x-arrow';
        footerHeaderNavListItemDropdownArrow.appendChild(footerHeaderNavListItemDropdownLeftArrow);

        const footerHeaderNavListItemDropdownRightArrow = document.createElement('span');
        footerHeaderNavListItemDropdownRightArrow.className = 'footer-dropdown-y-arrow';
        footerHeaderNavListItemDropdownArrow.appendChild(footerHeaderNavListItemDropdownRightArrow);

        footerDropdownToggle.appendChild(footerHeaderNavListItemDropdownArrow);

        if (item.dropdown_items) {
          const footerDropdownMenu = document.createElement('ul');
          footerDropdownMenu.className = 'footer-dropdown-content';
          footerHeaderNavListItem.appendChild(footerDropdownMenu);

          item.dropdown_items.forEach(dropdownItem => {
            if (dropdownItem.hidden || dropdownItem.footer_hidden) return;
            const footerDropdownListItem = document.createElement('li');
            const footerDropdownAnchor = document.createElement('a');
            footerDropdownAnchor.href = dropdownItem.href;
            footerDropdownAnchor.id = `footer-${dropdownItem.id}`;
            appendTextWithTrademark(footerDropdownAnchor, dropdownItem.text);
            if (
              !dropdownItem.href.startsWith("/") &&
              !dropdownItem.href.startsWith("https://skinmcl.org/")
            ) {
              footerDropdownAnchor.appendChild(createExternalFooterLinkIcon());
              footerDropdownAnchor.target = "_blank";
            }
            footerDropdownListItem.appendChild(footerDropdownAnchor);
            footerDropdownMenu.appendChild(footerDropdownListItem);
          });

          footerDropdownToggle.addEventListener('click', () => {
            footerHeaderNavListItem.classList.toggle('open');
            footerDropdownMenu.classList.toggle('open');
            if (footerHeaderNavListItem.classList.contains('open')) {
              footerDropdownToggle.setAttribute('aria-expanded', 'true');
            } else {
              footerDropdownToggle.setAttribute('aria-expanded', 'false');
            }
          });
        }
      }
    });
  });

const nav = createEl("nav", {}, [navList]);


  // Contact info
  const contactBlock = createEl("div", {}, [
    createEl("p", { class: "footer-start-p" }, [
      createEl("a", {
        class: "white-link address",
        href: "/contact/#location",
        html: "2150 N MAIN ST STE 4<br>NORTH LOGAN UT  84341-1740"
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
    "<span aria-label=\"Sunday\">Sun</span>:\u00A0<span class=\"italic\">Closed</span>",
    "<span aria-label=\"Monday\">Mon</span>:\u00A08AM\u00A0—\u00A06PM\u00A0MT",
    "<span aria-label=\"Tuesday\">Tue</span>:\u00A08AM\u00A0—\u00A06PM\u00A0MT",
    "<span aria-label=\"Wednesday\">Wed</span>:\u00A08AM\u00A0—\u00A06PM\u00A0MT",
    "<span aria-label=\"Thursday\">Thu</span>:\u00A08AM\u00A0—\u00A06PM\u00A0MT",
    "<span aria-label=\"Friday\">Fri</span>:\u00A08AM\u00A0—\u00A06PM\u00A0MT",
    "<span aria-label=\"Saturday\">Sat</span>:\u00A0<span class=\"italic\">Closed</span>",
    "Closed:\u00A012PM\u00A0—\u00A01PM\u00A0MT<br>Every\u00A0weekday",
    "Closed:\u00A0July\u00A04th\u00A0&\u00A024th"
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
    ["Instagram", "https://www.instagram.com/skinmcl/", "/elements/social/instagram_white.svg"],
    ["TikTok", "https://www.tiktok.com/@skinmcl", "/elements/social/tiktok_white.svg"],
    ["Yelp", "https://www.yelp.com/biz/skin-medical-cosmetics-and-laser-north-logan", "/elements/social/yelp_white.svg"]
  ];
  const socialList = createEl("ul", {
    class: "flex-row col-gap-10 remove-top-20-footer"
  }, socials.map(([title, href, src]) =>
    createEl("li", {}, [
      createEl("a", { target: "_blank", href }, [
        createEl("img", {
          class: "social-media-icon",
          height: "28",
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
      document.createTextNode(" Skin\u00A0\u2011\u00A0Medical\u00A0Cosmetics\u00A0&\u00A0Laser"),
      createEl("span", { html: ". All&nbsp;rights&nbsp;reserved." })
    ]),
    createEl("ul", {}, [
      createEl("li", {}, [
        createEl("a", {
          href: "/intellectual-property/",
          text: "Intellectual Property"
        })
      ]),
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