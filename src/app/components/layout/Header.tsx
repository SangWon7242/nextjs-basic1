"use client";

import Link from "next/link";
import Image from "next/image";
import { Handbag } from "lucide-react";
import { useState, useEffect } from "react";
import { IMAGES } from "@/constants/images";

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
  // 상태 관리
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // 이벤트 처리
  useEffect(() => {
    let timeoutId: any = null;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // 디바운싱 로직
    // 스크롤 할 때마다 handleScroll 실행
    // 스크롤이 멈추고 0.1초가 지나면 최종적으로 실행
    const handleScroll = () => {
      timeoutId = setTimeout(() => {
        setIsScrolled(window.scrollY > 30);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  // 렌더링
  return (
    // 헤더 임시 컬러 : bg-black
    <header
      className={`${
        isScrolled ? "bg-[#ffffff80]" : ""
      } top-bar fixed inset-x-0 top-0 z-100`}
    >
      <div className="con max-w-[var(--site-width)] mx-auto px-[5px] h-20 flex">
        <div className="logo-box">
          <Link href="/" className="flex items-center h-full w-[85px]">
            {isScrolled ? (
              <Image src={IMAGES.logoWhite} alt="mobile로고" />
            ) : (
              <Image src={IMAGES.logo} alt="pc로고" />
            )}
          </Link>
        </div>
        <nav className="menu-box ml-5">
          <ul className="flex text-white h-full">
            {menuList.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  className={`flex h-full items-center px-5 hover:text-[#FFFFFF80] transition-colors duration-500 ${
                    isScrolled ? "text-[#000000]" : ""
                  }`}
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
                    className={`flex h-full items-center px-4 hover:text-[#FFFFFF80] transition-colors duration-500 ${
                      isScrolled ? "text-[#000000]" : ""
                    }`}
                  >
                    {menu.icon}
                  </Link>
                ) : (
                  <Link
                    href={menu.href}
                    className={`flex h-full items-center px-4 hover:text-[#FFFFFF80] transition-colors duration-500 ${
                      isScrolled ? "text-[#000000]" : ""
                    }`}
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
