import { useState } from "react";

export function ProductsNew(props) {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreate(params);
    event.target.reset();
  };

  return (
    <div className="new-product">
      <h2>Add New Product</h2>k
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            value={name}
            onChange={(event) => setName(event.target.value.slice(0, 20))}
            name="name"
            type="text"
            className="form-control"
          />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div>
          <label>Description:</label>
          <textarea type="text" name="description" id="description"></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input type="integer" id="price" name="price" />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" id="image" name="image_url" />
        </div>
        <div>
          <label>Supplier ID:</label>
          <input type="text" id="supplier_id" name="supplier_id" />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="text" id="quantity" name="quantity" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
