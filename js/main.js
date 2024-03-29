/* ======================================
Table of Contents:
1. Fetch
2. Flickity Slider

========================================*/


/* ======================================
 1. Fetch
========================================*/
function apiLoad() {

    async function getProducts() {
        // create an empty array outside of the arrow function so it can be returned
        let productsList = [];
        await fetch('https://momapi.megankrenbrink.com/api/products/read.php?filter=produce')
            .then(res => res.json())
            .then(data => {
                // insert the products data in productList variable
                productsList = data.products;
                console.log(data.products);
            });
        // return the populated productsList variable
        return productsList;
    }

    // function to display products on page
    async function renderProducts() {
        let data = await getProducts();
        let html = '';
        data.forEach(products => {
            let htmlSegment =
                `<div class="card">
        <img src="${products.image}" class="card-img-top" alt="${products.name}">
        <div class="card-body">
          <p class="card-title">${products.name}</p>
          <div class="d-flex justify-content-between">
            <p class="card-text">$${products.retail}/unit</p>
            <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#97C45F"
              class="bi bi-plus-circle-fill" viewBox="0 0 16 16">
              <path
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
         </div>

         <span class="fa fa-star "></span>
         <span class="fa fa-star "></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>
         <span class="fa fa-star"></span>


          <div class="d-flex atc-width"> 
          <button type="button" class="btn btn-atc mt-4">Add To Cart</button>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#97c45f" class="bi-heart bi-heart-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
          </div>
        </div>
      </div>`

            html += htmlSegment;
        });

        let container = document.querySelector('.products');
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
        cellAlign: 'center',
        contain: true,
        wrapAround: true,
        pageDots: false,
        autoPlay: true,
    });
});