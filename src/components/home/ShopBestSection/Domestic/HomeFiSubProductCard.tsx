import { SUB_CARD_ITEMS } from "@/constants/product";
import Image from "next/image";
import Button from "@/components/common/button/Button";

export default function HomeFiSubProductCard() {
  return (
    // <div className="sub-card">
    //   <ul className="flex w-full gap-5 pt-5">
    //     {SUB_CARD_ITEMS.map((subItem) => (
    //       <li
    //         key={subItem.id}
    //         className="w-1/3 h-[250px] flex bg-white rounded-3xl py-2.5 items-center"
    //       >
    //         <div className="w-[40%]">
    //           <Image
    //             src={subItem.itemImage}
    //             alt={subItem.title}
    //             className="block mx-auto"
    //             style={{
    //               width: `${subItem.width}`,
    //               height: "auto",
    //             }}
    //           />
    //         </div>
    //         <div className="w-[60%]">
    //           <Image
    //             src={subItem.wifi}
    //             alt="와이파이 이미지"
    //             style={{ width: "auto", height: "25px" }}
    //           />
    //           <p className="font-bold text-[20px] mt-2 mb-2.5">
    //             {subItem.title}
    //           </p>
    //           <p className="text-[18px] font-bold mb-5">
    //             <span className="text-[#cb4cff]">{subItem.percent}%</span>
    //             {subItem.price}
    //           </p>
    //           <Button href="#" size="md">
    //             자세히 보기
    //           </Button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>

    <div className="sub-card">
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-5 pt-5">
        {SUB_CARD_ITEMS.map((subItem) => (
          <li
            key={subItem.id}
            className="h-[250px] flex bg-white rounded-3xl py-2.5 items-center"
          >
            <div className="w-[40%]">
              <Image
                src={subItem.itemImage}
                alt={subItem.title}
                className="block mx-auto"
                style={{
                  width: `${subItem.width}`,
                  height: "auto",
                }}
              />
            </div>
            <div className="w-[60%]">
              <Image
                src={subItem.wifi}
                alt="와이파이 이미지"
                style={{ width: "auto", height: "25px" }}
              />
              <p className="font-bold text-[20px] mt-2 mb-2.5">
                {subItem.title}
              </p>
              <p className="text-[18px] font-bold mb-5">
                <span className="text-[#cb4cff]">{subItem.percent}%</span>
                {subItem.price}
              </p>
              <Button href="#" size="md">
                자세히 보기
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
