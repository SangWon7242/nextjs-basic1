import Link from "next/link";

type ButtonProps = {
  href: string;
  size?: "sm" | "md";
  children: React.ReactNode;
};

export default function Button({ href, size, children }: ButtonProps) {
  const sizeClasses = {
    sm: "text-[12px] py-[10px] px-[20px]",
    md: "text-[14px] py-[15px] px-[30px]",
  };

  return (
    <Link
      href={href}
      className={`text-[#4a5052] border-[#4a5052] border rounded-3xl hover:text-white hover:bg-black duration-300 ${
        sizeClasses[size || "md"]
      }`}
    >
      {children}
    </Link>
  );
}
