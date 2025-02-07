import Image from "next/image";
import Link from "next/link";


import { ClothesCard } from "@/components/Men_Women_Card";
import Shoes from "@/components/Shoes";

export default function Home() {
  return (
    <div className="flex flex-col justify-center mx-auto max-w-[1440px]">
      <div className="bg-[#F5F5F5] w-full flex justify-center flex-col items-center text-center py-8">
        <h1 className="font-bold text-xl text-black md:text-3xl lg:text-4xl">
          Hello Nike App
        </h1>
        <p className="mt-4 text-sm md:text-base text-black lg:text-lg">
          Download the app to access everything Nike. {" "}
          <Link href="/" className="text-black underline">
            Get Your Great
          </Link>
        </p>
      </div>
      <div className="flex justify-center w-full">
        <Image
          src="/image.png"
          alt="Image"
          width={1344}
          height={977}
          className="max-w-full h-auto"
        />
      </div>
      <div className="flex flex-col items-center mt-8 px-4">
        <p className="text-xl md:text-2xl lg:text-3xl">First Look</p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-8 text-center">
          NIKE AIR MAX PULSE
        </h1>
        <p className="text-center mt-8 text-sm md:text-base lg:text-lg">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
          Pulse
          <br />
          --designed to push you past your limits and help you go to the max.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-9 mt-12 w-full px-4">
        <button className="bg-black rounded-full text-white h-12 w-full md:w-32">
          Notify Me
        </button>
        <button className="bg-black rounded-full text-white h-12 w-full md:w-32">
          Shop Air Max
        </button>
      </div>
      <Shoes />
      <div className="px-4">
        <h1 className="text-lg md:text-xl font-bold mt-9 mb-5">Featured</h1>
        <Image
          src="/mountain.png"
          alt="Mountain"
          width={1200}
          height={500}
          className="mx-auto w-full h-auto max-w-[1200px] md:w-3/4 lg:w-1/2"
        />
        <div className="text-center">
          <h1 className="font-bold mt-8 text-2xl md:text-4xl lg:text-5xl">
            STEEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 mb-8 text-sm md:text-base lg:text-lg">
            Cause everyone should know the feeling of running in that perfect pair.
          </p>
          <div className="flex justify-center">
            <button className="bg-black rounded-full text-white h-12 w-full md:w-32">
              Find Your Shoe
            </button>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-0">
        <div className="mt-12">
          <h1 className="text-lg md:text-xl font-bold mt-9 mb-5 ml-6">
            Don&#39;t Miss
          </h1>
          <div className="flex justify-center mt-12">
            <Image
              src="/see-site.png"
              alt="See Site Image"
              width={1344}
              height={700}
              className="max-w-full h-auto"
            />
          </div>
          <div className="text-center">
            <h1 className="font-bold mt-14 text-[32px] md:text-[52px]">
              FLIGHT ESSENTIALS
            </h1>
            <p className="mt-5 text-sm md:text-base">
              Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="bg-black rounded-full text-white mt-12 h-12 w-full md:w-32">
              Shop
            </button>
          </div>
        </div>
      </div>
      <div className="mx-4 md:mx-0">
        <h1 className="text-lg md:text-xl font-bold mt-9 mb-5 ml-6 text-center md:text-left">
          The Essentials
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <ClothesCard image="/men.png" button="Men&#39;s" width="w-[77px]" />
          <ClothesCard image="/women.png" button="Women&#39;s" width="w-[109px]" />
          <ClothesCard image="/kid.png" button="Kids&#39;" width="w-[77px]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center mb-7 mt-7 gap-16 p-4">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Icons</h1>
          <p className="text-[#757575]">Air Force 1</p>
          <p className="text-[#757575]">Huarache</p>
          <p className="text-[#757575]">Air Max 90</p>
          <p className="text-[#757575]">Air Max 95</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Shoes</h1>
          <p className="text-[#757575]">All Shoes</p>
          <p className="text-[#757575]">Custom Shoes</p>
          <p className="text-[#757575]">Jordan Shoes</p>
          <p className="text-[#757575]">Running Shoes</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold">Clothing</h1>
          <p className="text-[#757575]">All Clothing</p>
          <p className="text-[#757575]">Modest Wear</p>
          <p className="text-[#757575]">Hoodies & Pullovers</p>
          <p className="text-[#757575]">Shirts & Tops</p>
        </div>
      </div>
    </div>
  );
}