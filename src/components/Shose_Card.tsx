import Image from "next/image";


interface shopCard{
    image: string;
    name: string;
    description: string;
    discount: string;
};

export default function ShopCard({image, name, description, discount}:shopCard){
    return(
        <div className="flex flex-col gap-7">
            <Image src={image} alt={'showimage'} width={441} height={441} />
            <div>
                <span className="flex justify-between w-full">
                <h4>{name}</h4>
                <p>{discount}</p>
                </span>
                <p className="text-[#757575]">{description}</p>
            </div>
        </div>
    )
}