const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
} = require("./products.model");

module.exports = {
  Query: {
    products: async () => {
      return getAllProducts();
    },
    productsByPrice: (_, args) => {
      return getProductsByPrice(args.min, args.max);
    },
    product: (_, args) => {
      return getProductById(args.id);
    },
  },
  Mutation: {
    addNewProduct: (_, args) => {
      return addNewProduct(args.id, args.description, args.price);
    },
    addNewProductReview: (_, args) => {
      const { productId, rating, comment } = args;
      return addNewProductReview(productId, rating, comment);
    },
  },
};
