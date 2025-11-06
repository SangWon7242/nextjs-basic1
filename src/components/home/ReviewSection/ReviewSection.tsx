import ReviewPcTop from "./ReviewPcTop";

import { IMAGES } from "@/constants/images";

export default function ReviewSection() {
  return (
    <div
      className="review-box"
      style={{
        backgroundImage: `url(${IMAGES.reviewBackgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-(--site-width) mx-auto pt-[100px]">
        <div className="text-center">
          <p className="md:text-[20px] text-[14px]">
            앨리스 모바일은 차근차근 신뢰를 쌓아가고 있어요
          </p>
          <p className="md:text-[36px] text-[20px] font-bold text-[#404040] py-2.5 pb-10">
            5만명의 사람들이 앨리스를 찾았어요
          </p>
        </div>

        <ReviewPcTop />
      </div>
    </div>
  );
}
