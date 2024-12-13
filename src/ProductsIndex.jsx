export function ProductsIndex(props) {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">All Products ({props.products.length} total)</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {props.products.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100 shadow-sm">
              <img
                src={product.primary_image_url}
                className="card-img-top p-3"
                alt={product.name}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <strong className="text-primary fs-4">
                    ${product.price}
                  </strong>
                </p>
              </div>
              <div className="card-footer bg-transparent border-0 pb-3">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => props.onShow(product)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
