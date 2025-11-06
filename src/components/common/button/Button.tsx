import Link from "next/link";

type ButtonProps = {
  href: string;
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ href, size, children, variant }: ButtonProps) {
  const sizeClasses = {
    sm: "text-[12px] py-[10px] px-[20px]",
    md: "text-[14px] py-[15px] px-[30px]",
    lg: "text-[20px] py-[15px] px-[40px]",
  };

  const variantClasses = {
    primary:
      "text-[#4a5052] border-[#4a5052] border rounded-3xl hover:text-white hover:bg-black duration-300",
    secondary:
      "bg-white text-[#00e3af] border-[#00e3af] border rounded-3xl hover:bg-[#00e3af] hover:text-white hover:border-[#00e3af] duration-300",
  };

  return (
    <Link
      href={href}
      className={`${variantClasses[variant || "primary"]} ${
        sizeClasses[size || "md"]
      }`}
    >
      {children}
    </Link>
  );
}
