import ProductsList from "../productsList";


export default async function ProductsPage() {
    const response= await fetch('http://localhost:3000/api/products');
    const products= await response.json();

    const response2= await fetch('http://localhost:3000/api/users/2/cart');
    const cartProducts= await response2.json();

     return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <ProductsList products={products} initialCartProducts={cartProducts} />
    </div>
  );
}