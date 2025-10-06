//
// Copyright (c) 2025 Skin - Medical Cosmetics & Laser. All rights reserved.
//
// Contributors
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener('DOMContentLoaded', function () {

  const relativeJsPath = '/theme/halloween-2025/halloween_2025_promo.js';

  const script = document.createElement('script');
  script.src = relativeJsPath;

  console.log('Theme loaded!'); 

  document.body.appendChild(script);
});
