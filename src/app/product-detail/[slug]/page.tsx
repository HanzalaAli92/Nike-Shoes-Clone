import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";


interface ProductPageProps {
    params : Promise<{slug : string}>
}

 async function getProduct(slug : string): Promise<Product>{
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0]{
        _id,
        productName,
        _type,
        image,
        price,
        description,
        }`, {slug}
    )
 }

 export default async function ProductPage({params}: ProductPageProps){
    const {slug} = await params;
    const product = await getProduct(slug)

    return (
<div className="flex items-center justify-center  bg-white">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl bg-white p-6 ">
  {/* Product Image */}
  <div className="flex justify-center">
  {product?.image && (
<Image 
src={urlFor(product.image).url()}
 alt={product.productName}
width={500}
height={500}
className="w-full max-w-sm object-contain"/>
)}
  </div>

  {/* Product Details */}
  <div className="flex flex-col justify-center">
    {/* Title */}
    <h1 className="text-2xl font-bold text-gray-900 mb-2">
    {product?.productName} <br />
      
    </h1>

    {/* Description */}
    <p className="text-gray-600 mb-4 leading-relaxed">
    {product?.description}
    </p>

    {/* Price */}
    <div className="text-2xl font-semibold text-gray-900 mb-4">
    ${product?.price}
    </div>

    {/* Add to Cart Button */}
    <button className="flex items-center justify-center gap-6 w-full max-w-xs bg-black text-white py-3 px-6 rounded-full hover:bg-gray-800">
        <Link href="/cart">
      <Image 
      src="/Buy.png"
      alt="Buy"
      height={29}
      width={29}
      className="gap-5" />
      <p>
      Add To Cart
      </p>
      </Link>
    </button>
  </div>
</div>
</div>
 )
}