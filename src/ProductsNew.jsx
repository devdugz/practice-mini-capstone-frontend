export function ProductsNew() {
  return (
    <div className="new-product">
      <h2>Add New Product</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Description:</label>
          <textarea></textarea>
        </div>
        <div>
          <label>Price:</label>
          <input type="number" />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
