export const filterProduct = ({ dataProduct, searchInput = "", toTable }) => {
  const filterAllProduct = dataProduct.filter((product) => {
    if (product.stok > 0 && toTable === false) {
      if (
        product.namaProduk.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return true;
      } else if (searchInput === "" || searchInput === null) {
        return true;
      }
    } else if (product.stok >= 0 && toTable === true) {
      if (
        product.namaProduk.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return true;
      } else if (searchInput === "" || searchInput === null) {
        return true;
      }
    }

    return false;
  });

  return filterAllProduct;
};
