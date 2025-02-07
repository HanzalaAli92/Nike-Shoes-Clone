import Image from "next/image";
import Link from "next/link"

export default function Footer() {
  return (
    <div className="bg-black text-white p-4 mx-auto">
  <div className="flex flex-col md:flex-row md:gap-20">
    <div className="font-sans flex flex-col gap-2 mt-7">
      <p className="text-sm md:text-base">FIND A STORE</p>
      <p className="text-sm md:text-base">BECOME A MEMBER</p>
      <p className="text-sm md:text-base">SIGN UP FOR EMAIL</p>
      <p className="text-sm md:text-base">Send Us Feedback</p>
      <p className="text-sm md:text-base">STUDENT DISCOUNTS</p>
    </div>
    <div className="flex flex-col gap-2 mt-7">
      <h1 className="text-sm md:text-base">GET HELP</h1>
      <p className="text-[#7E7E7E] text-sm md:text-base">Order Status</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Delivery</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Returns</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Payment Options</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Contact Us On Nike.com Inquiries</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Contact Us On All Other Inquiries</p>
    </div>
    <div className="flex flex-col gap-2 mt-7">
      <h1 className="text-sm md:text-base">ABOUT NIKE</h1>
      <p className="text-[#7E7E7E] text-sm md:text-base">News</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Careers</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Investors</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Sustainability</p>
    </div>
    <div className="flex items-center gap-3 xs:mb-40 mb-10 mt-12 ml-18 lg:ml-56 xl:ml-96 justify-center md:justify-start">
      <Link href="">
      <Image
        src="/twitter-01.png"
        alt="Twitter"
        width="30"
        height="30"
      />
      </Link>
      <Link href="https://www.facebook.com/">
      <Image
        src="/facebook-01.png"
        alt="Facebook"
        width="30"
        height="30"
      />
      </Link>
      <Link href="https://www.youtube.com/">
      <Image
        src="/youtube-01.png"
        alt="Youtube"
        width="30"
        height="30"
      />
      </Link>
      <Link href="https://www.instagram.com/">
      <Image
        src="/instagram-01.png"
        alt="Instagram"
        width="30"
        height="30"
      />
      </Link>
    </div>
  </div>

  <div className="flex md:flex-row flex-col items-center justify-between mt-4 gap-3">
    <div className="flex gap-3 items-center">
      <Image
        src="/map.png"
        alt="Map"
        width="18"
        height="15"
        className="hover:cursor-pointer"
      />
      <h1 className="text-sm md:text-base">India</h1>
      <p className="text-[#7E7E7E] text-xs xs:text-sm md:text-base">Ⓒ 2023 Nike, Inc. All Rights Reserved</p>
    </div>
    <div className="flex xs:flex-row flex-col gap-4 items-center">
      <p className="text-[#7E7E7E] text-sm md:text-base">Guides</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Terms of Sales</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Terms of Use</p>
      <p className="text-[#7E7E7E] text-sm md:text-base">Nike Privacy Policy</p>
    </div>
  </div>
</div>
  );
}
