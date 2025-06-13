//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener("DOMContentLoaded", function () {

  function phoneSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('height', '16px');
    svg.setAttribute('class', 'share-phone-img');
    svg.setAttribute('aria-labelledby', 'call-title call-description');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 -960 960 960');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const svgTitle = document.createElementNS ('http://www.w3.org/2000/svg', 'title');
    svgTitle.setAttribute('id', 'call-title');
    svgTitle.textContent = 'Call';
    const svgDesc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    svgDesc.setAttribute('id', 'call-description');
    svgDesc.textContent = 'An icon of a phone';
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttribute('d', 'm887.21-0.0078543q-166.01 0-325.82-69.951-159.81-69.951-290.64-200.11-130.83-129.63-200.79-290.72-69.951-161.1-69.951-326.42 0-32.827 19.648-52.811 19.648-19.984 52.475-19.984h223.09q32.407 0 54.348 17.164 21.953 17.176 28.938 47.026l33.979 176.91q4.429 27.654-1.5483 48.659-5.9773 21.005-21.989 34.988l-127.23 120.13q20.092 34.7 48.238 68.967 28.158 34.255 64.37 70.467 33.295 32.095 65.078 58.033 31.783 25.938 62.726 44.674l130.67-124.52q17.068-17.068 37.544-22.709 20.488-5.6292 44.698-0.51612l179.04 39.501q30.379 8.8699 47.806 28.602 17.428 19.72 17.428 49.571v230.25q0 32.827-19.984 52.811-19.984 19.984-52.127 19.984z');
    svgPath.setAttribute('stroke-width', '1.2003');

    svg.appendChild(svgTitle);
    svg.appendChild(svgDesc);
    svg.appendChild(svgPath);

    return svg;
  }

  function chatSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('height', '16px');
    svg.setAttribute('class', 'share-phone-img');
    svg.setAttribute('aria-labelledby', 'chat-title chat-description');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 -960 960 864');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    svgTitle.setAttribute('id', 'chat-title');
    svgTitle.textContent = 'Text';
    const svgDesc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    svgDesc.setAttribute('id', 'chat-description');
    svgDesc.textContent = 'An icon of a chat bubble';
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttribute('d', 'm204-200-54 54q-32 32-74 15.22T34-194v-601q0-57.13 39.44-96.56Q112.88-931 170-931h620q57.13 0 96.56 39.44Q926-852.13 926-795v459q0 57.12-39.44 96.56Q847.13-200 790-200H204Zm70-200h251q17 0 28.5-11.5T565-440q0-17-11.5-28.5T525-480H274q-17 0-28.5 11.5T234-440q0 17 11.5 28.5T274-400Zm0-126h412q17 0 28.5-11.5T726-566q0-16-11.5-28T686-606H274q-17 0-28.5 12T234-565.5q0 16.5 11.5 28T274-526Zm0-126h412q17 0 28.5-11.5T726-692q0-16-11.5-28T686-732H274q-17 0-28.5 12T234-691.5q0 16.5 11.5 28T274-652Z');

    svg.appendChild(svgTitle);
    svg.appendChild(svgDesc);
    svg.appendChild(svgPath);

    return svg;
  }

  function contactSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('height', '16px');
    svg.setAttribute('class', 'icon-platter-img');
    svg.setAttribute('aria-labelledby', 'contact-title contact-description');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 -960 960 960');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    svgTitle.setAttribute('id', 'contact-title');
    svgTitle.textContent = 'Contacts';
    const svgDesc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    svgDesc.setAttribute('id', 'contact-description');
    svgDesc.textContent = 'An icon of a person in a square';
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttribute('d', 'M480-428.7q60.26 0 102.39-42.13t42.13-102.39q0-60.26-42.13-102.11-42.13-41.84-102.39-41.84t-102.39 41.84q-42.13 41.85-42.13 102.11t42.13 102.39Q419.74-428.7 480-428.7ZM206.78-100.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-546.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h546.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v546.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H206.78Zm0-106h546.44v-58.44q-54-50.17-122.11-77.56T480-370.17q-83 0-151.11 27.95-68.11 27.96-122.11 78.13v57.31Z');
    
    svg.appendChild(svgTitle);
    svg.appendChild(svgDesc);
    svg.appendChild(svgPath);

    return svg;
  }

  function shareSVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('height', '16px');
    svg.setAttribute('class', 'share-phone-img');
    svg.setAttribute('aria-labelledby', 'share-title share-description');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 -960 960 960');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    svgTitle.setAttribute('id', 'share-title');
    svgTitle.textContent = 'Share';
    const svgDesc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    svgDesc.setAttribute('id', 'share-description');
    svgDesc.textContent = 'An icon of a share symbol';
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttribute('d', 'M246.78-17.39q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-401.56q0-44.31 30.85-75.16 30.85-30.85 75.15-30.85H294q22.09 0 37.54 15.46Q347-600.04 347-577.96q0 22.09-15.46 37.55-15.45 15.46-37.54 15.46h-47.22v401.56h466.44v-401.56H666q-22.09 0-37.54-15.46Q613-555.87 613-577.96q0-22.08 15.46-37.54 15.45-15.46 37.54-15.46h47.22q44.3 0 75.15 30.85 30.85 30.85 30.85 75.16v401.56q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H246.78ZM427-740.43l-26.96 26.95Q384.65-698.09 363-698.3q-21.65-.22-37.04-15.61-14.96-15.39-15.18-37.05-.22-21.65 15.18-37.04l116.43-117q15.96-15.96 37.61-15.96T517.61-905l116.43 117Q649-773.04 649-751.17q0 21.87-14.96 37.26-15.39 15.39-37.26 15.39-21.87 0-37.26-15.39L533-740.43v387.21q0 22.09-15.46 37.55-15.45 15.45-37.54 15.45t-37.54-15.45Q427-331.13 427-353.22v-387.21Z');

    svg.appendChild(svgTitle);
    svg.appendChild(svgDesc);
    svg.appendChild(svgPath);

    return svg;
  }

  function copySVG() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('height', '16px');
    svg.setAttribute('class', 'share-phone-img');
    svg.setAttribute('aria-labelledby', 'copy-title copy-description');
    svg.setAttribute('role', 'img');
    svg.setAttribute('viewBox', '0 -960 960 960');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    const svgTitle = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    svgTitle.setAttribute('id', 'copy-title');
    svgTitle.textContent = 'Copy';
    const svgDesc = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    svgDesc.setAttribute('id', 'copy-description');
    svgDesc.textContent = 'An icon of a copy symbol';
    const svgPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    svgPath.setAttribute('d', 'M379.78-233.78q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-466.44q0-44.3 30.85-75.15 30.85-30.85 75.15-30.85h346.44q44.3 0 75.15 30.85 30.85 30.85 30.85 75.15v466.44q0 44.3-30.85 75.15-30.85 30.85-75.15 30.85H379.78Zm0-106h346.44v-466.44H379.78v466.44Zm-186 292q-44.3 0-75.15-30.85-30.85-30.85-30.85-75.15v-519.44q0-22.08 15.46-37.54 15.45-15.46 37.54-15.46t37.55 15.46q15.45 15.46 15.45 37.54v519.44h399.44q22.08 0 37.54 15.45 15.46 15.46 15.46 37.55 0 22.09-15.46 37.54-15.46 15.46-37.54 15.46H193.78Zm186-292v-466.44 466.44Z');

    svg.appendChild(svgTitle);
    svg.appendChild(svgDesc);
    svg.appendChild(svgPath);

    return svg;
  }

  const dialog = document.querySelector('dialog[data-phone-platter]');
  if (!dialog) return;
  
  dialog.className = 'phone-platter';
  dialog.setAttribute('hidden', '');

  // Clear existing content if needed
  dialog.innerHTML = '';

  // Close button section
  const closeDiv = document.createElement('div');
  closeDiv.className = 'close-phone-platter';
  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-phone-platter-text uppercase';
  closeBtn.setAttribute('data-close-platter', '');
  closeBtn.textContent = 'Close';
  closeDiv.appendChild(closeBtn);

  // Mini bar
  const miniBar = document.createElement('div');
  miniBar.className = 'phone-platter-mini-bar';

  // Phone number
  const numberText = document.createElement('p');
  numberText.className = 'text-center bottom-5 phone-platter-number-text';
  numberText.textContent = '435-716-8765';

  // Actions container
  const actions = document.createElement('div');
  actions.className = 'phone-platter-actions';

  // First row: Call & Text
  const flex1 = document.createElement('div');
  flex1.className = 'phone-share-options-flex';
  const callLink = document.createElement('a');
  callLink.className = 'share-phone-buttons uppercase';
  callLink.href = 'tel:+14357168765';
  callLink.setAttribute('data-call-platter', '');
  callLink.appendChild(phoneSVG());
  callLink.appendChild(document.createTextNode('Call'));

  const textLink = document.createElement('a');
  textLink.className = 'share-phone-buttons uppercase';
  textLink.href = 'sms:+14357168765';
  textLink.setAttribute('data-text-platter', '');
  textLink.appendChild(chatSVG());
  textLink.appendChild(document.createTextNode('Text'));

  flex1.appendChild(callLink);
  flex1.appendChild(textLink);

  // Second row: Add to Contacts
  const contactsDiv = document.createElement('div');
  const contactsP = document.createElement('p');
  const contactsLink = document.createElement('a');
  contactsLink.className = 'normal-link text-phone-platter uppercase';
  contactsLink.href = '/elements/contact/skin.vcf';
  contactsLink.download = true;
  contactsLink.type = 'text/vcard';
  contactsLink.appendChild(contactSVG());
  contactsLink.appendChild(document.createTextNode('Add to contacts'));
  contactsP.appendChild(contactsLink);
  contactsDiv.appendChild(contactsP);

  // Third row: Share & Copy
  const flex2 = document.createElement('div');
  flex2.className = 'phone-share-options-flex';

  const shareBtn = document.createElement('button');
  shareBtn.className = 'share-phone-buttons uppercase';
  shareBtn.setAttribute('data-share-phone', '');
  const shareSpan = document.createElement('span');
  shareSpan.className = 'phone-platter-button-text';
  shareSpan.textContent = 'Share number';
  shareBtn.appendChild(shareSVG());
  shareBtn.appendChild(shareSpan);

  const copyBtn = document.createElement('button');
  copyBtn.className = 'share-phone-buttons uppercase';
  copyBtn.id = 'copyBtn';
  copyBtn.onclick = () => copyText();
  const copyTrans = document.createElement('span');
  copyTrans.id = 'copyTrans';
  copyTrans.className = 'phone-platter-button-text';
  copyTrans.textContent = 'Copy number';
  copyBtn.appendChild(copySVG());
  copyBtn.appendChild(copyTrans);

  flex2.appendChild(shareBtn);
  flex2.appendChild(copyBtn);

  // Assemble all
  actions.appendChild(flex1);
  actions.appendChild(contactsDiv);
  actions.appendChild(flex2);

  dialog.appendChild(closeDiv);
  dialog.appendChild(miniBar);
  dialog.appendChild(numberText);
  dialog.appendChild(actions);



const openPhonePlatterButtons = document.querySelectorAll('[data-phone-button]');
const closePhonePlatterButton = document.querySelector('[data-close-platter]');
const phonePlatterModal = document.querySelector('[data-phone-platter]');

// Open the modal
openPhonePlatterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    phonePlatterModal.showModal();
    // Force reflow so transition triggers
    requestAnimationFrame(() => {
      phonePlatterModal.classList.add('visible');
    });
  });
});

// Close with animation
function closeWithAnimation() {
  // Add inert temporarily to prevent focus inside
  phonePlatterModal.setAttribute('inert', '');

  // Start transition
  phonePlatterModal.classList.remove('visible');

  const onTransitionEnd = (e) => {
    if (e.propertyName === 'bottom') {
      phonePlatterModal.close();
      phonePlatterModal.removeAttribute('inert');
      phonePlatterModal.removeEventListener('transitionend', onTransitionEnd);
    }
  };

  phonePlatterModal.addEventListener('transitionend', onTransitionEnd);
}

// Close on button
closePhonePlatterButton.addEventListener('click', closeWithAnimation);

// Close on click outside
phonePlatterModal.addEventListener('click', (event) => {
  const rect = phonePlatterModal.getBoundingClientRect();
  const isInDialog = (
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom
  );

  if (!isInDialog) {
    closeWithAnimation();
  }
});

// Close on Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && phonePlatterModal.open) {
    closeWithAnimation();
  }
});
});
