import { IMAGES } from "@/constants/images";
import Image from "next/image";
import DomesticWifiSection from "./Domestic/DomesticWifiSection";
import InternationalWifiSection from "./International/InternationalWifiSection";

export default function ShopBestSection() {
  return (
    <section className="bg-[#e5e7eb] py-[50px]">
      <div className="shop-box max-w-(--site-width) mx-auto">
        <div className="flex flex-col items-center">
          <Image
            src={IMAGES.shopTitleImage}
            alt="shop best 이미지"
            className="w-[268px]"
          ></Image>
          <p className="text-[36px] font-bold text-[#404040]">
            인기 데이터를 한눈에!
          </p>
        </div>
        <div className="wifi-box ">
          {/* 국내 */}
          <DomesticWifiSection />
          {/* 해외 */}
          <InternationalWifiSection />
        </div>
      </div>
    </section>
  );
}
