//
// Copyright (c) 2025 Skin - Medical Cosmetics & Laser. All rights reserved.
//
// Contributors
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener('DOMContentLoaded', () => {
    const shareButtons = document.querySelectorAll('[data-share-phone]');

    shareButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const text = '+1 (435) 716-8765';
        const title = 'Skin Medical Cosmetics & Laser - Call or Text!';
        const url = 'https://skinmcl.org/';

        if (navigator.share) {
          try {
            await navigator.share({ text, title });
            console.log('Thanks for sharing!');
          } catch (err) {
            console.error('Error sharing:', err);
          }
        } else {
          alert('Sharing not supported on this browser.');
        }
      });
    });
  });