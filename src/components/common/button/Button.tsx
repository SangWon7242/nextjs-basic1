import Link from "next/link";

type ButtonProps = {
  href: string;
  size?: "sm" | "md";
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({ href, size, children, variant }: ButtonProps) {
  const sizeClasses = {
    sm: "text-[12px] py-[10px] px-[20px]",
    md: "text-[14px] py-[15px] px-[30px]",
  };

  const variantClasses = {
    primary:
      "text-[#4a5052] border-[#4a5052] border rounded-3xl hover:text-white hover:bg-black duration-300",
    secondary:
      "bg-white text-[#00e3af] border-[#00e3af] hover:bg-[#00e3af] hover:border-[#00e3af]",
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
