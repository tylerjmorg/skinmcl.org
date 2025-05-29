//
// Copyright (c) 2025 Logan Medical Group, LLC. All rights reserved.
//
// Contributers
// Tyler Morgan <git@tylerjm.org>
//

document.addEventListener('DOMContentLoaded', function () {

  const relativeJsPath = '/theme/pride-month-2025/pride_month_2025_promo.js';

  const script = document.createElement('script');
  script.src = relativeJsPath;

  console.log('Theme loaded!'); 

  document.body.appendChild(script);
});
