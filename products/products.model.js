const products = [
  {
    id: "redshoe",
    description: "Red Shoe",
    price: 42.2,
    reviews: [],
  },
  {
    id: "bluejean",
    description: "Blue jeans",
    price: 55.55,
    reviews: [],
  },
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (min, max) => {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
};

const getProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    price,
    description,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

const addNewProductReview = (productId, rating, comment) => {
  const product = products.find((product) => {
    return product.id === productId;
  });
  const newReview = {
    id: Math.random().toString(),
    rating,
    comment,
  };
  product.reviews.push(newReview);
  return newReview;
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addNewProductReview,
};
