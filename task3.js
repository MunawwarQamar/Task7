async function getProducts() {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  const result = data.products.map(function (product) {
    const { title, thumbnail, price } = product;
    console.log("title: " + title);
    console.log("thumbnail: " + thumbnail);
    console.log("price: " + price);
    return `
        <div class="products">
          <span>Product name:  ${title} </span>
          <img src="${thumbnail}" /> 
          <span> Price: ${price} $ </span>
        </div>
      `;
  }).join('');

  document.querySelector(".continar").innerHTML = result;
}

getProducts();
