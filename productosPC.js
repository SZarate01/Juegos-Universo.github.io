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
        { image: 'tarjetas_RAM.png', text: 'Tarjetas RAM' },
        { image: 'ventiladores.png', text: 'Ventiladores' },
        { image: 'juegosPC.png', text: 'Juegos' },
        { image: 'perifericos.png', text: 'Periféricos' },
        { image: 'tarjeta_grafica.png', text: 'Tarjetas Gráficas' },
        { image: 'tarjeta_madre.png', text: 'Tarjetas Madre' }
      ];
    } else if (category === 'playstation') {
      products = [
        { image: 'producto_ps1.png', text: 'Producto PlayStation 1' },
        { image: 'producto_ps2.png', text: 'Producto PlayStation 2' },
        { image: 'producto_ps3.png', text: 'Producto PlayStation 3' }
      ];
    } else if (category === 'xbox') {
      products = [
        { image: 'producto_xbox1.png', text: 'Producto Xbox 1' },
        { image: 'producto_xbox2.png', text: 'Producto Xbox 2' },
        { image: 'producto_xbox3.png', text: 'Producto Xbox 3' }
      ];
    } else if (category === 'nintendo') {
      products = [
        { image: 'producto_nintendo1.png', text: 'Producto Nintendo 1' },
        { image: 'producto_nintendo2.png', text: 'Producto Nintendo 2' },
        { image: 'producto_nintendo3.png', text: 'Producto Nintendo 3' }
      ];
    } else if (category === 'mercancia') {
      products = [
        { image: 'producto_mercancia1.png', text: 'Producto de Mercancía 1' },
        { image: 'producto_mercancia2.png', text: 'Producto de Mercancía 2' },
        { image: 'producto_mercancia3.png', text: 'Producto de Mercancía 3' }
      ];
    }

    productContainer.innerHTML = '';

    var row = document.createElement('div');
    row.className = 'product-row';

    for (var i = 0; i < products.length; i++) {
      var productBox = document.createElement('div');
      productBox.className = 'product-box';

      var productImage = document.createElement('img');
      productImage.src = products[i].image;

      var productText = document.createElement('div');
      productText.textContent = products[i].text;

      if (i < 3) {
        row.appendChild(productBox);
      } else {
        var rowIndex = Math.floor(i / 3);
        var rowContainer = productContainer.getElementsByClassName('product-row')[rowIndex];
        if (!rowContainer) {
          rowContainer = document.createElement('div');
          rowContainer.className = 'product-row';
          productContainer.appendChild(rowContainer);
        }
        rowContainer.appendChild(productBox);
      }

      productBox.appendChild(productImage);
      productBox.appendChild(productText);
    }

    productContainer.appendChild(row);
    
  }
});
