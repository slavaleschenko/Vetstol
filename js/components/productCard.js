export function createProductCard(product) {
    const card = document.createElement('article');
    card.className = 'product-card';
    
    card.innerHTML = getProductCardTemplate(product);
    return card;
}

function getProductCardTemplate(product) {
    return `
        <div class="product-image">
            <img src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="product-info">
            <h2>${product.name}</h2>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <div class="price">${formatPrice(product.price)}</div>
                <button class="view-details" onclick="window.location.href='productDetails.html?id=${product.id}'">
                    Детальніше
                </button>
            </div>
        </div>
    `;
}

function formatPrice(price) {
    return typeof price === 'number' 
        ? new Intl.NumberFormat('uk-UA', { 
            style: 'currency', 
            currency: 'UAH',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price)
        : price;
}