import Image from "next/image";
import Link from "next/link";

interface productCard {
  image: string;
  name: string;
  title: string;
  description: string;
  description2?: string;
  color: string;
  price: string;
}

export default function ProductCard({
  image,
  name,
  title,
  description,
  description2,
  color,
  price,
}: productCard) {
  return (
    <Link href={"/product-detail"}>
    <div className="flex flex-col sm:items-start">

      <Image
        src={image}
        alt="product"
        width={348}
        height={348}
        className="w-full max-w-xs object-cover"
      />

      <div className="mt-4 text-center sm:text-left">
        <h3 className="text-[#9E3500] font-medium text-base sm:text-lg">
          {name}
        </h3>
        <p className="text-[#111111] text-sm sm:text-base">{title}</p>
        <p className="text-[#757575] text-sm sm:text-base">{description}</p>
        {description2 && (
          <p className="text-[#757575] text-sm sm:text-base">{description2}</p>
        )}
        <p className="text-[#757575] text-sm sm:text-base">{color}</p>
        <p className="text-[#111111] font-bold text-sm sm:text-base">{price}</p>
      </div>
    </div>
    </Link>
  );
}
