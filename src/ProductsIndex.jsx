export function ProductsIndex({ products }) {
  return (
    <div className="products-grid">
      {products.map((product, index) => (
        <div key={index} className="product-card">
          <img src={product.image_url} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
