let cartCount = 0;

const products = [
    {
        name: "Wireless Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231693"
    },
    {
        name: "Smart Watch",
        price: 2999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },
    {
        name: "Bluetooth Speaker",
        price: 1499,
        image: "https://images.unsplash.com/photo-1585386959984-a41552231694"
    },
    {
        name: "Power Bank",
        price: 999,
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db"
    }
];

const productList = document.getElementById("productList");

products.forEach(product => {
    productList.innerHTML += `
        <div class="product">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        </div>
    `;
});

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}
