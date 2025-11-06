import { ReviewItems } from "@/types/review.types";

export default function ReviewCard({ review }: { review: ReviewItems }) {
  return (
    <div
      className={`${review.bgColor} ${review.color} rounded-3xl p-8 flex items-center py-[40px]`}
    >
      <h3 className="text-2xl font-bold w-1/3">{review.title}</h3>
      <div className="space-y-1 w-2/3">
        {review.content.split("\n").map((line, index) => (
          <p key={index} className="leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
