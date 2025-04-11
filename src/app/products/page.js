import Link from "next/link";
import React from "react";

const Product = () => {
    const productID = 100;
  return (
    <div>
      <h1 className="text-2xl font-bold">Product List</h1>
      <h2 className="text-blue-800 underline font-semibold">
        <Link href="/products/1">Product 1</Link>
      </h2>
      <h2 className="text-blue-800 underline font-semibold">
        <Link href="/products/2">Product 2</Link>
      </h2>
      <h2 className="text-blue-800 underline font-semibold">
        <Link href="/products/3" replace>Product 3</Link>
      </h2>
      <h2 className="text-blue-800 underline font-semibold">
        <Link href={`/products/${productID}`}>Product {productID}</Link>
      </h2>
    </div>
  );
};

export default Product;
