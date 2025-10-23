import { Category, Product } from './models.js';

class DataStore {
    constructor() {
        this.categories = new Map();
        this.products = new Map();
        this.initializeData();
    }

    initializeData() {
        // Initialize Categories
        const categories = [
            {
                id: 1,
                name: 'Професійні столи',
                description: 'Професійні столи для ветеринарних клінік та груммінг салонів',
                iconPath: '../assets/icons/table.png',
                slug: 'tables'
            },
            {
                id: 2,
                name: 'Грумерські ванни з нержавіючої сталі',
                description: 'Професійні ванни для грумінгу',
                iconPath: '../assets/icons/bathtub.png',
                slug: 'baths'
            },
            {
                id: 3,
                name: 'Реанімаційні стаціонари',
                description: 'Стаціонарне обладнання для ветеринарних клінік',
                iconPath: '../assets/icons/medical-service.png',
                slug: 'stations'
            }
        ];

        // Create Category instances
        categories.forEach(cat => {
            const category = new Category(cat.id, cat.name, cat.description, cat.iconPath, cat.slug);
            this.categories.set(cat.slug, category);
        });

        // Initialize Products
        const products = [
            {
                id: 1,
                name: 'Столи хірургічні на електропідйомі',
                description: 'Професійний хірургічний стіл з електричним регулюванням висоти. Плавне та безшумне регулювання положення для максимального комфорту під час операцій.',
                categoryId: 1,
                category: 'tables',
                specifications: {
                    dimensions: '130x60x85 см',
                    material: 'Нержавіюча сталь AISI 304',
                    maxWeight: '150 кг',
                    adjustmentType: 'Електричний підйом',
                    heightRange: '65-115 см',
                    voltage: '220V'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 42000
            },
            {
                id: 2,
                name: 'Столи хірургічні на гідравлічному підйомі',
                description: 'Надійний хірургічний стіл з гідравлічною системою регулювання висоти. Стабільна конструкція та плавний хід педалі.',
                categoryId: 1,
                category: 'tables',
                specifications: {
                    dimensions: '130x60x85 см',
                    material: 'Нержавіюча сталь AISI 304',
                    maxWeight: '150 кг',
                    adjustmentType: 'Гідравлічний підйом',
                    heightRange: '65-110 см',
                    pumpType: 'Гідравлічний насос посиленої надійності'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 35000
            },
            {
                id: 3,
                name: 'Столи для УЗД',
                description: 'Спеціалізований стіл для УЗД досліджень з вирізом для датчика та зручним позиціонуванням пацієнта.',
                categoryId: 1,
                category: 'tables',
                specifications: {
                    dimensions: '120x55x80 см',
                    material: 'Нержавіюча сталь AISI 304',
                    maxWeight: '100 кг',
                    features: 'Спеціальний виріз для УЗД датчика',
                    surface: 'Тепла поверхня з антиковзаючим покриттям'
                },
                images: ['../assets/images/products/product_id_3.jpeg'],
                price: 28000
            },
            {
                id: 4,
                name: 'Столи стаціонарні',
                description: 'Надійний стаціонарний стіл для оглядів та процедур. Міцна конструкція та стійке положення.',
                categoryId: 1,
                category: 'tables',
                specifications: {
                    dimensions: '120x60x80 см',
                    material: 'Нержавіюча сталь AISI 304',
                    maxWeight: '120 кг',
                    type: 'Стаціонарний',
                    surface: 'Антиковзаюче покриття'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 22000
            },
            {
                id: 5,
                name: 'Столи грумерські на електропідйомі',
                description: 'Професійний грумерський стіл з електричним регулюванням висоти. Безшумний підйомний механізм та стабільна поверхня.',
                categoryId: 1,
                category: 'tables',
                specifications: {
                    dimensions: '120x65x85 см',
                    material: 'Нержавіюча сталь AISI 304',
                    maxWeight: '100 кг',
                    adjustmentType: 'Електричний підйом',
                    heightRange: '50-100 см',
                    features: 'Кріплення для грумерської петлі'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 38000
            },
            {
                id: 6,
                name: 'Столи грумерські на гідравлічному підйомі',
                description: 'Надійний грумерський стіл з гідравлічним підйомним механізмом. Зручна педаль та плавне регулювання висоти.',
                categoryId: 1,
                category: 'tables',
                specifications: {
                    dimensions: '120x65x85 см',
                    material: 'Нержавіюча сталь AISI 304',
                    maxWeight: '100 кг',
                    adjustmentType: 'Гідравлічний підйом',
                    heightRange: '50-95 см',
                    features: 'Кріплення для грумерської петлі'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 32000
            },
            {
                id: 7,
                name: 'Столи грумерські без підйому',
                description: 'Базова модель грумерського столу з фіксованою висотою. Стабільна конструкція та надійне кріплення для грумерського обладнання.',
                categoryId: 1,
                category: 'tables',
                specifications: {
                    dimensions: '120x65x80 см',
                    material: 'Нержавіюча сталь AISI 304',
                    maxWeight: '80 кг',
                    type: 'Стаціонарний',
                    features: 'Кріплення для грумерської петлі'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 18000
            },
            {
                id: 8,
                name: 'Столи круглі на гідравлічному підйомі',
                description: 'Спеціалізований круглий стіл з гідравлічним регулюванням висоти. Ідеальний для оглядів та груммінгу дрібних порід.',
                categoryId: 1,
                category: 'tables',
                specifications: {
                    dimensions: 'Діаметр 80 см, висота 85 см',
                    material: 'Нержавіюча сталь AISI 304',
                    maxWeight: '80 кг',
                    adjustmentType: 'Гідравлічний підйом',
                    heightRange: '60-95 см',
                    shape: 'Круглий'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 29000
            },
            {
                id: 9,
                name: 'Ванна грумерська стандартна',
                description: 'Професійна грумерська ванна стандартного розміру з нержавіючої сталі. Ідеальна для більшості порід собак середнього розміру.',
                categoryId: 2,
                category: 'baths',
                specifications: {
                    dimensions: '120x60x85 см',
                    material: 'Нержавіюча сталь AISI 304',
                    capacity: '150 л',
                    drainage: 'Професійна система зливу з фільтром',
                    features: 'Антиковзаюче покриття дна, кріплення для фіксації',
                    accessories: 'Душовий шланг, тримач для шампуню'
                },
                images: ['../assets/images/products/product_id_9.jpeg'],
                price: 32000
            },
            {
                id: 10,
                name: 'Ванна грумерська міні',
                description: 'Компактна грумерська ванна для малих порід собак та котів. Зручна та ергономічна конструкція.',
                categoryId: 2,
                category: 'baths',
                specifications: {
                    dimensions: '90x50x85 см',
                    material: 'Нержавіюча сталь AISI 304',
                    capacity: '100 л',
                    drainage: 'Компактна система зливу з фільтром',
                    features: 'Антиковзаюче покриття дна, кріплення для фіксації',
                    accessories: 'Душовий шланг, тримач для шампуню'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 28000
            },
            {
                id: 11,
                name: 'Ванна грумерська ХХЛ',
                description: 'Велика професійна ванна для грумінгу собак великих та гігантських порід. Посилена конструкція та збільшена місткість.',
                categoryId: 2,
                category: 'baths',
                specifications: {
                    dimensions: '160x75x85 см',
                    material: 'Нержавіюча сталь AISI 304',
                    capacity: '250 л',
                    drainage: 'Посилена система зливу з великим фільтром',
                    features: 'Антиковзаюче покриття дна, подвійні кріплення для фіксації',
                    accessories: 'Подовжений душовий шланг, тримач для шампуню, платформа для підйому'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 45000
            },
            {
                id: 12,
                name: 'Стаціонар 5+1 секційний',
                description: 'Професійний стаціонар з 5 стандартними секціями та 1 додатковою секцією для інтенсивної терапії. Оснащений системою вентиляції та підігріву.',
                categoryId: 3,
                category: 'stations',
                specifications: {
                    dimensions: '200x65x180 см',
                    material: 'Нержавіюча сталь AISI 304',
                    sections: '6 (5 стандартних + 1 ІТ)',
                    features: 'Система вентиляції, підігрів, LED освітлення',
                    sectionSize: '60x60x65 см (стандартна), 70x70x65 см (ІТ)',
                    additional: 'Замки з ключами, регульовані полиці'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 85000
            },
            {
                id: 13,
                name: 'Стаціонар 4 секційний горизонтальний',
                description: 'Горизонтальний стаціонар з 4 просторими секціями. Ергономічне розташування для зручного доступу до всіх відсіків.',
                categoryId: 3,
                category: 'stations',
                specifications: {
                    dimensions: '240x65x90 см',
                    material: 'Нержавіюча сталь AISI 304',
                    sections: '4 горизонтальні секції',
                    features: 'Вентиляція, LED освітлення',
                    sectionSize: '60x65x90 см кожна',
                    additional: 'Індивідуальні замки, знімні перегородки'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 68000
            },
            {
                id: 14,
                name: 'Стаціонар 4 секційний вертикальний',
                description: 'Вертикальний стаціонар з 4 секціями, оптимальний для приміщень з обмеженою площею. Компактне рішення зі збереженням функціональності.',
                categoryId: 3,
                category: 'stations',
                specifications: {
                    dimensions: '65x65x200 см',
                    material: 'Нержавіюча сталь AISI 304',
                    sections: '4 вертикальні секції',
                    features: 'Вентиляція, LED освітлення',
                    sectionSize: '65x65x50 см кожна',
                    additional: 'Система фіксації дверей, посилені петлі'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: 65000
            },
            {
                id: 15,
                name: 'Багатосекційні стаціонари по індивідуальним замірам',
                description: 'Індивідуальні рішення для стаціонарів з можливістю вибору кількості та розміру секцій. Адаптація під конкретні потреби клініки.',
                categoryId: 3,
                category: 'stations',
                specifications: {
                    material: 'Нержавіюча сталь AISI 304',
                    features: 'Індивідуальне проектування, Вентиляція, LED освітлення',
                    options: 'Вибір розміру секцій, конфігурації розташування',
                    additional: 'Можливість інтеграції систем моніторингу, Додаткові опції комплектації',
                    customization: 'Повна адаптація під приміщення та вимоги замовника'
                },
                images: ['../assets/images/products/product_placeholder.jpg'],
                price: null,
                priceType: 'custom' // 'fixed' for regular prices, 'custom' for on-request
            }
        ];

        // Create Product instances and add to categories
        products.forEach(prod => {
            const product = new Product(
                prod.id,
                prod.name,
                prod.description,
                prod.categoryId,
                prod.category,
                prod.specifications,
                prod.images,
                prod.price,
                prod.priceType || 'fixed'
            );
            this.products.set(prod.id, product);
            this.categories.get(prod.category)?.addProduct(product);
        });
    }

    getCategory(slug) {
        return this.categories.get(slug);
    }

    getAllCategories() {
        return Array.from(this.categories.values());
    }

    getProduct(id) {
        return this.products.get(id);
    }

    getProductsByCategory(categorySlug) {
        return this.categories.get(categorySlug)?.getProducts() || [];
    }
}

// Create a singleton instance
const dataStore = new DataStore();
export default dataStore;