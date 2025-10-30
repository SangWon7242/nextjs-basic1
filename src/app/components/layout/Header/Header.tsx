import Link from "next/link";
import Image from "next/image";
import { Handbag } from "lucide-react";
import pcLogo from "../../../../assets/images/pc-logo.png";
import mobileLogo from "../../../../assets/images/mobile-logo.png";

const menuList = [
  {
    name: "임대방법",
    href: "#",
  },
  {
    name: "WiFi",
    href: "#",
  },
  {
    name: "HomeFi",
    href: "#",
  },
  {
    name: "WonderFi",
    href: "#",
  },
  {
    name: "찾아오는길",
    href: "#",
  },
  {
    name: "브랜드스토리",
    href: "#",
  },
];

const userMenuList = [
  {
    name: "로그인",
    href: "#",
  },
  {
    name: "회원가입",
    href: "#",
  },
  {
    name: "장바구니",
    href: "#",
    icon: <Handbag />,
    iconOnly: true,
  },
];

export default function Header() {
  return (
    // 헤더 임시 컬러 : bg-black
    <header className="top-bar border-b bg-black">
      <div className="con max-w-[var(--site-width)] mx-auto px-[5px] h-20 flex">
        <div className="logo-box">
          <Link href="/" className="flex items-center h-full w-[85px]">
            <Image src={pcLogo} alt="pc로고" />
            <Image src={mobileLogo} alt="mobile로고" className="hidden" />
          </Link>
        </div>
        <nav className="menu-box ml-5">
          <ul className="flex text-white h-full">
            {menuList.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  className="flex h-full items-center px-5 hover:text-[#FFFFFF80] transition-colors duration-500"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="user-menu-box ml-auto">
          <ul className="flex h-full text-white">
            {userMenuList.map((menu) => (
              <li key={menu.name}>
                {menu.iconOnly ? (
                  <Link
                    href={menu.href}
                    className="flex h-full items-center px-4 hover:text-[#FFFFFF80] transition-colors duration-500"
                  >
                    {menu.icon}
                  </Link>
                ) : (
                  <Link
                    href={menu.href}
                    className="flex h-full items-center px-4 hover:text-[#FFFFFF80] transition-colors duration-500"
                  >
                    {menu.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
