class Product {
    constructor({
      id,
      title,
      imgSrc,
      imgHover,
      description,
      tabFilterOptions,
      isActive = true,
      createdAt = new Date(),
      updatedAt = new Date()
    }) {
      this.id = id;
      this.title = title;
      this.imgSrc = imgSrc;
      this.imgHover = imgHover;
      this.description = description;
      this.tabFilterOptions = tabFilterOptions;
      this.isActive = isActive;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  
export default Product;