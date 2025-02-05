class Category {
    constructor({
      id,
      name,
      slug,
      description,
      parentId = null,
      isActive = true
    }) {
      this.id = id;
      this.name = name;
      this.slug = slug;
      this.description = description;
      this.parentId = parentId;
      this.isActive = isActive;
    }
  }
  
export default Category;