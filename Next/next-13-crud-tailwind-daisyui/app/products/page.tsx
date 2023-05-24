type Product = {
  id: number;
  name: string;
  price: number;
};

async function getProduct() {
  const res = await fetch("http://localhost:5000/products", { cache: "no-store" });
  return res.json();
}

export default async function ProductList() {
  const product: Product[] = await getProduct();
  return (
    <div className="py-10 px-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
