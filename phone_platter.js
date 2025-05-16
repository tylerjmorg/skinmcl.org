//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

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
