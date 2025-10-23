// Category Model
class Category {
    constructor(id, name, description, iconPath, slug) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.iconPath = iconPath;
        this.slug = slug;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            iconPath: this.iconPath,
            slug: this.slug,
            products: this.products.map(product => product.toJSON())
        };
    }
}

// Product Model
class Product {
    constructor(id, name, description, categoryId, category, specifications, images, price, priceType = 'fixed') {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryId = categoryId;  // Numeric ID of the category
        this.category = category;      // Category slug for URL purposes
        this.specifications = specifications;
        this.images = images;
        this.price = price;
        this.priceType = priceType;    // 'fixed' for regular prices, 'custom' for on-request
    }

    toJSON() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            categoryId: this.categoryId,
            category: this.category,
            specifications: this.specifications,
            images: this.images,
            price: this.price,
            priceType: this.priceType
        };
    }
}

export { Category, Product };