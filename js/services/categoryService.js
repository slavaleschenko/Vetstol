import dataStore from './models/dataStore.js';

class CategoryService {
    static renderCategoryDetails(categorySlug) {
        const category = dataStore.getCategory(categorySlug);
        if (!category) return;

        // Update page title and breadcrumb
        document.title = `Vetstol - ${category.name}`;
        document.querySelector('.current-page').textContent = category.name;
        document.getElementById('categoryTitle').textContent = category.name;

        // Get products for this category
        const products = dataStore.getProductsByCategory(categorySlug);
        
        // Create products section if it doesn't exist
        let productsSection = document.querySelector('.products-section');
        if (!productsSection) {
            productsSection = document.createElement('section');
            productsSection.className = 'products-section';
            productsSection.innerHTML = `
                <div class="container">
                    <div class="products-grid"></div>
                </div>
            `;
            document.querySelector('.hero').insertAdjacentElement('afterend', productsSection);
        }

        // Render products
        const productsGrid = productsSection.querySelector('.products-grid');
        productsGrid.innerHTML = products.map(product => `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-image">
                    <img src="${product.images[0]}" alt="${product.name}">
                </div>
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price} грн</div>
                <button class="product-details-btn">Детальніше</button>
            </div>
        `).join('');

        // Add event listeners for product cards
        document.querySelectorAll('.product-details-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const productId = e.target.closest('.product-card').dataset.productId;
                this.showProductDetails(productId);
            });
        });
    }

    static showProductDetails(productId) {
        const product = dataStore.getProduct(parseInt(productId));
        if (!product) return;

        // Create modal with product details
        const modal = document.createElement('div');
        modal.className = 'product-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${product.name}</h2>
                <div class="product-details">
                    <div class="product-images">
                        ${product.images.map(img => `<img src="${img}" alt="${product.name}">`).join('')}
                    </div>
                    <div class="product-info">
                        <p>${product.description}</p>
                        <h3>Характеристики:</h3>
                        <ul>
                            ${Object.entries(product.specifications).map(([key, value]) => `
                                <li><strong>${key}:</strong> ${value}</li>
                            `).join('')}
                        </ul>
                        <div class="product-price">${product.price} грн</div>
                        <button class="contact-btn">Зв'язатися з нами</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Add event listeners
        modal.querySelector('.close-modal').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('.contact-btn').addEventListener('click', () => {
            window.location.href = '../index.html#contact';
        });
    }
}

export default CategoryService;