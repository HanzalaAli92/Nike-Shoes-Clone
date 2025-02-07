import Image from "next/image";

export default function Footer01() {
  return (
      <div className="flex xl:flex-row flex-col mx-auto h-auto xl:h-[51px] p-1 items-center bg-black justify-between mt-4 gap-3">
        <div className="flex gap-2 items-center mx-auto">
          <div className="flex mx-auto md:flex-row flex-col">
            <span className="flex items-center gap-2">
          <Image
            src="/map.png"
            alt="Map"
            width="18"
            height="15"
            className="hover:cursor-pointer"
          />
              <h1 className="text-sm text-white text-[9px] md:text-base">India</h1>
              <p className="text-[#7E7E7E] text-xs xs:text-sm md:text-base">
                Ⓒ 2023 Nike, Inc. All Rights Reserved
              </p>
            </span>
            <span className="flex items-center gap-2">
              <p className="text-[#7E7E7E] text-[9-px] text-sm md:text-base">Terms of Use</p>
              <p className="text-[#7E7E7E] text-[9-px] text-sm md:text-base">Terms of Sales</p>
              <p className="text-[#7E7E7E] text-[9-px] text-sm md:text-base">Privacy Policy</p>
            </span>
        </div>
        </div>
        

        <div className="grid md:grid-cols-11 grid-cols-6 gap-1 p-1 mx-auto ">
          <Image
          src="/Image-01.png"
          alt="Image-01"
          width={45}
          height={27}
          />
          <Image
          src="/Image-02.png"
          alt="Image-02"
          width={45}
          height={27}
          />
          <Image
          src="/Image-03.png"
          alt="Image-03"
          width={45}
          height={27}
          />
          <Image
          src="/Image-04.png"
          alt="Image-04"
          width={45}
          height={27}
          />
          <Image
          src="/Image-05.png"
          alt="Image-05"
          width={45}
          height={27}
          />
          <Image
          src="/Image-6.png"
          alt="Image-6"
          width={45}
          height={27}
          />
          <Image
          src="/Image-07.png"
          alt="Image-07"
          width={45}
          height={27}
          />
          <Image
          src="/Image-08.png"
          alt="Image-08"
          width={45}
          height={27}
          />
          <Image
          src="/Image-09.png"
          alt="Image-09"
          width={54}
          height={18}
          />
          <Image
          src="/Image-10.png"
          alt="Image-10"
          width={54}
          height={18}
          />
          <Image
          src="/Image-11.png"
          alt="Image-11"
          width={45}
          height={27}
          />
        </div>
        </div>
  );
}
