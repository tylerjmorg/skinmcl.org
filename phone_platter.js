//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener("DOMContentLoaded", function () {
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
  callLink.innerHTML = `<img class="share-phone-img" width="16" height="16" src="/elements/utility/icon/call_black.svg" alt="Call">Call`;

  const textLink = document.createElement('a');
  textLink.className = 'share-phone-buttons uppercase';
  textLink.href = 'sms:+14357168765';
  textLink.setAttribute('data-text-platter', '');
  textLink.innerHTML = `<img class="share-phone-img" width="16" height="16" src="/elements/utility/icon/chat_black.svg" alt="Text">Text`;

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
  contactsLink.innerHTML = `<img class="icon-platter-img" width="16" height="16" src="/elements/utility/icon/account_box_black.svg" alt="Contacts">Add to contacts`;
  contactsP.appendChild(contactsLink);
  contactsDiv.appendChild(contactsP);

  // Third row: Share & Copy
  const flex2 = document.createElement('div');
  flex2.className = 'phone-share-options-flex';

  const shareBtn = document.createElement('button');
  shareBtn.className = 'share-phone-buttons uppercase';
  shareBtn.setAttribute('data-share-phone', '');
  shareBtn.innerHTML = `<img class="share-phone-img" width="16" height="16" src="/elements/utility/icon/ios_share_black.svg" alt="Share Icon">Share Number`;

  const copyBtn = document.createElement('button');
  copyBtn.className = 'share-phone-buttons uppercase';
  copyBtn.id = 'copyBtn';
  copyBtn.onclick = () => copyText();
  copyBtn.innerHTML = `<img class="share-phone-img" width="16" height="16" src="/elements/utility/icon/content_copy_black.svg" alt="Copy Icon"><span id="copyTrans">Copy Number</span>`;

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
