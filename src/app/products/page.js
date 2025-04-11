"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Product = () => {
  const productID = 100;
  const isActive = usePathname();
  return (
    <div>
      <h1 className="text-2xl font-bold">Product List</h1>
      <h2>
        <Link
          href="/products/1"
          className={
            isActive === "/products/1"
              ? "text-blue-950 font-bold"
              : "text-blue-800 underline"
          }
        >
          Product 1
        </Link>
      </h2>
      <h2>
        <Link
          href="/products/2"
          className={
            isActive === "/products/1"
              ? "text-blue-950 font-bold"
              : "text-blue-800 underline"
          }
        >
          Product 2
        </Link>
      </h2>
      <h2>
        <Link
          href="/products/3"
          className={
            isActive === "/products/1"
              ? "text-blue-950 font-bold"
              : "text-blue-800 underline"
          }
          replace
        >
          Product 3
        </Link>
      </h2>
      <h2>
        <Link
          href={`/products/${productID}`}
          className={
            isActive === "/products/1"
              ? "text-blue-950 font-bold"
              : "text-blue-800 underline"
          }
        >
          Product {productID}
        </Link>
      </h2>
    </div>
  );
};

export default Product;
