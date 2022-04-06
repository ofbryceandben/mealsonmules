/* ======================================
Table of Contents:
1. Fetch
2. Flickity Slider

========================================*/


/* ======================================
 1. Fetch
========================================*/
function apiLoad() {

  function getProducts() {
    fetch('https://momapi.megankrenbrink.com/api/products/read.php?filter=')
      .then(res => res.json())
      .then(data => {
        data.products;
        console.log(data.products);
      })
  }
  async function renderProducts() {
    let data = await getProducts();
    let html = '';
    data.forEach(products => {
      let htmlSegment = `<div class="card" style="width: 18rem;">
      <img src="${products.image}" class="card-img-top" alt="${products.name}">
      <div class="card-body">
        <h5 class="card-title">${products.name}</h5>
      </div>
    </div>`;

      html += htmlSegment;
    });

    let container = document.querySelector('.main');
    container.innerHTML = html;
  }

  renderProducts();

}

$(document).ready(function () {

  /* ======================================
    2. Flickity Slider
  ========================================*/
  $('.cat-carousel').flickity({
    // options
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    cellAlign: 'center',
    pageDots: false
  });

  $('.special-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
    pageDots: false,
    autoPlay: true
  });
});
