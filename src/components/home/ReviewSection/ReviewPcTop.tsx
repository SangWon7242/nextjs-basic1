import { REVIEW_ITEMS } from "@/constants/reviews";
import Button from "@/components/common/button/Button";
import RiviewCard from "./RiviewCard";
import { IMAGES } from "@/constants/images";
import Image from "next/image";

export default function ReviewTop() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-2 gap-3 auto-rows-fr">
        <div className="flex flex-col gap-3">
          <RiviewCard review={REVIEW_ITEMS[0]} />
          <RiviewCard review={REVIEW_ITEMS[1]} />
          <RiviewCard review={REVIEW_ITEMS[2]} />
        </div>
        <div className="flex flex-col gap-3 justify-center">
          <div className="flex justify-center">
            <Image
              src={IMAGES.airplaneImage}
              alt="비행기 이미지"
              className="w-auto h-12"
            />
          </div>
          <RiviewCard review={REVIEW_ITEMS[3]} />
          <RiviewCard review={REVIEW_ITEMS[4]} />
        </div>
      </div>
      <div className="pt-20 w-full text-center">
        <Button href="#" size="lg" variant="secondary">
          <span className="font-bold">N </span>리뷰 보러가기
        </Button>
      </div>
    </div>
  );
}
