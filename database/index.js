import { products } from './data/products';
import { categories } from './data/categories';

class Database {
  constructor() {
    this.products = products;
    this.categories = categories;
  }

  // Méthodes pour les catégories
  getAllCategories() {
    return this.categories;
  }

  getCategoryById(id) {
    return this.categories.find(category => category.id === id);
  }

  getMainCategories() {
    return this.categories.filter(category => !category.parentId);
  }

  // Méthodes pour les produits
  getAllProducts() {
    return this.products;
  }

  getProductById(id) {
    return this.products.find(product => product.id === id);
  }

  getProductsByCategory(categoryName) {
    return this.products.filter(product => 
      product.tabFilterOptions.includes(categoryName)
    );
  }

  getProductsWithCategories() {
    return this.products.map(product => ({
      ...product,
      categories: product.tabFilterOptions.map(catName => 
        this.categories.find(cat => cat.name === catName)
      ).filter(Boolean)
    }));
  }
}

export const db = new Database();