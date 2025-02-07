import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <div className="flex flex-col md:flex-row items-center mx-auto max-w-[1440px] justify-between px-4 py-5 bg-white">
      <div>
        <Link href="/">
        <Image src="/nike-logo.png" alt="Nike image" width={78} height={78} />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row text-black items-center mt-4 md:mt-0 gap-4 md:gap-8">
        <Link href="/product" className="text-sm md:text-base">New & Featured</Link>
        <Link href="/card" className="text-sm md:text-base">Men</Link>
        <Link href="/women" className="text-sm md:text-base">Women</Link>
        <Link href="/kid" className="text-sm md:text-base">Kid</Link>
        <Link href="/sale" className="text-sm md:text-base">Sale</Link>
        <Link href="/" className="text-sm md:text-base">SNKRS</Link>
      </div>
      <div className="flex items-center mt-4 md:mt-0">
        <div className="flex items-center rounded-2xl h-10 w-60 pl-2 bg-[#F5F5F5]">
          <CiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search"
            className="pl-2 outline-none bg-transparent w-full"
          />
        </div>
        <div className="flex gap-4 items-center ml-4">
          <Image src="/heart-logo.png" alt="Heart Image" width={24} height={24} />
          <Image src="/sine-1.png" alt="Sine" width={24} height={24} />
        
        </div>
      </div>
    </div>
  );
}