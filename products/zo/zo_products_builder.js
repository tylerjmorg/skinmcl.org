//
// Copyright (c) 2025 Skin - Medical Cosmetics & Laser. All rights reserved.
//
// Contributors
// Tyler Morgan <git@tylerjm.org>
//

const container = document.getElementById('products-container');

fetch('/products/zo/zo_products.json')
  .then(response => response.json())
  .then(data => {
    data.zo_products.forEach(product => {
      const a = document.createElement('a');
      a.id = product.id;
      a.href = `/products/zo/${product.id}/`;

      const img = document.createElement('img');
      img.className = 'product-img';
      img.src = product.img;
      img.alt = product.name;

      const name = document.createElement('p');
      name.className = 'product-name';

      const trademarkSplit = product.name.split('®');
      name.appendChild(document.createTextNode(trademarkSplit[0]));
      if (trademarkSplit.length > 1) {
        const span = document.createElement('span');
        span.className = 'trademark';
        span.textContent = '®';
        name.appendChild(span);
        name.appendChild(document.createTextNode(trademarkSplit[1]));
      }

      const cta = document.createElement('p');
      cta.className = 'about-cta top-20';
      cta.textContent = 'Learn more\u00A0'; // \u00A0 = &nbsp;

      const spanWrap = document.createElement('span');
      const upperArrow = document.createElement('span');
      upperArrow.className = 'upper-about-arrow';
      const lowerArrow = document.createElement('span');
      lowerArrow.className = 'lower-about-arrow';

      spanWrap.appendChild(upperArrow);
      spanWrap.appendChild(lowerArrow);
      cta.appendChild(spanWrap);

      a.appendChild(img);
      a.appendChild(name);
      a.appendChild(cta);

      container.appendChild(a);
    });
  })
  .catch(error => console.error('Error loading ZO products:', error));
