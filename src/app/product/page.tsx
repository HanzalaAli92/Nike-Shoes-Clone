"use client";

import { useEffect, useState } from "react";
import { Product } from "../../../types/products";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { addToCart } from "@/app/actions/actions";
import Swal from "sweetalert2";

export default function ProductShow() {
  const [product, setProduct] = useState<Product[]>([]);
  const [isGenderOpen, setGenderOpen] = useState(true);
  const [isKidsOpen, setKidsOpen] = useState(true);
  const [isPriceOpen, setPriceOpen] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchProduct();
  }, []);

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    Swal.fire({
      position: "top-right",
      icon: "success",
      title: `${product.productName} added to cart`,
      showConfirmButton: false,
      timer: 1000,
    });
    addToCart(product);
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto max-w-[1440px] p-4 gap-6">
      {/* Filters Section */}
      <div className="w-full md:w-1/4 bg-white p-4 rounded-lg shadow-md">
        {/* Gender Filter */}
        <div>
          <h3
            className="font-bold cursor-pointer flex justify-between items-center"
            onClick={() => setGenderOpen(!isGenderOpen)}
          >
            Gender <span>{isGenderOpen ? "▲" : "▼"}</span>
          </h3>
          {isGenderOpen && (
            <ul className="mt-2 space-y-2">
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" /> <span>Men</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" /> <span>Women</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" /> <span>Unisex</span>
              </li>
            </ul>
          )}
        </div>
        <hr className="my-4" />

        {/* Kids Filter */}
        <div>
          <h3
            className="font-bold cursor-pointer flex justify-between items-center"
            onClick={() => setKidsOpen(!isKidsOpen)}
          >
            Kids <span>{isKidsOpen ? "▲" : "▼"}</span>
          </h3>
          {isKidsOpen && (
            <ul className="mt-2 space-y-2">
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" /> <span>Boys</span>
              </li>
              <li className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4" /> <span>Girls</span>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Products Section */}
      <div className="w-full md:w-3/4">
        <div className="flex justify-between items-center mb-4">
          <p>Sort By</p>
          <Image src="/button.png" alt="Button" width={14} height={14} className="hover:cursor-pointer" />
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Shoes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200"
            >
              <Link href={`/product-detail/${product.slug.current}`}>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-md"
                  />
                )}
                <h2 className="text-lg font-semibold mt-4">{product.productName}</h2>
                <p className="text-gray-500 mt-2">
                  {product.price ? `$${product.price}` : "Price not available"}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
