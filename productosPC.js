document.addEventListener('DOMContentLoaded', function() {
  var productList = document.querySelector('.product-list');
  var productContainer = document.getElementById('product-container');

  productList.addEventListener('click', function(event) {
    var target = event.target;

    if (target.tagName === 'LI') {
      var category = target.getAttribute('data-category');

      if (category) {
        showProducts(category);
      }
    }
  });

  function showProducts(category) {
    var products = [];

    if (category === 'pc') {
      products = [
        { image: 'perifericos.png', text: 'Periféricos' },
        { image: 'tarjeta_grafica.png', text: 'Tarjetas Gráficas' },
        { image: 'tarjetas_madre.jpg', text: 'Tarjetas Madre' }
      ];
    }

    productContainer.innerHTML = '';

    products.forEach(function(product) {
      var productBox = document.createElement('div');
      productBox.className = 'product-box';

      var productImage = document.createElement('img');
      productImage.src = product.image;

      var productText = document.createElement('div');
      productText.textContent = product.text;

      productBox.appendChild(productImage);
      productBox.appendChild(productText);
      productContainer.appendChild(productBox);
    });
  }
});
