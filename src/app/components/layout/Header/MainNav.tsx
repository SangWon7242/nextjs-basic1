import { HeaderCommonProps } from "./types";
import { MENU_LIST } from "./contants";
import Link from "next/link";

export default function MainNav({ isScrolled }: HeaderCommonProps) {
  return (
    <nav className={`menu-box`}>
      <ul
        className={` ${
          isScrolled ? "text-black" : "text-white"
        } md:flex hidden h-full`}
      >
        {MENU_LIST.map((menu) => (
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
  );
}
