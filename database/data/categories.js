import Category from '../models/category';

export const categories = [
  new Category({
    id: 1,
    name: "Les nouveautés Licki Sanit",
    slug: "nouveautes",
    description: "Derniers produits ajoutés à notre catalogue"
  }),
  new Category({
    id: 2,
    name: "En promotion",
    slug: "promotions",
    description: "Produits en promotion"
  })
];