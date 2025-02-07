import Image from "next/image";

interface menWomenCard {
  image: string;
  name: string;
  description: string;
  discount: string;
}

export default function MenWomenCard({
  image,
  name,
  description,
  discount,
}: menWomenCard) {
  return (
    <div className="flex flex-col h-auto w-full max-w-[300px] mx-auto bg-white shadow-md rounded-lg p-4">
      <Image
        src={image}
        alt="showimage"
        width={300}
        height={300}
        className="w-full h-auto rounded-lg"
      />
      <div className="flex flex-col mt-2">
        <h4 className="text-[12px] md:text-[16px] font-bold text-left">
          {name}
        </h4>
        <p className="text-[12px] md:text-[16px] font-bold text-left">
          {discount}
        </p>
        <p className="text-[#757575] text-sm md:text-base text-left">
          {description}
        </p>
      </div>
    </div>
  );
}

// second card

interface clothesCard {
  image: string;
  button: string;
  width: string;
}

export function ClothesCard({ image, button, width }: clothesCard) {
  return (
    <div className="relative w-full max-w-[440px] mx-auto">
      <Image
        src={image}
        alt="menimage"
        width={440}
        height={540}
        className="w-full h-auto"
      />
      <button
        className={`bg-white rounded-full absolute bottom-5 left-5 h-[39px] ${width} text-[15px]`}
      >
        {button}
      </button>
    </div>
  );
}
