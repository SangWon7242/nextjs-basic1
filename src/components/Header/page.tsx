import Link from "next/link";

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

export default function Header() {
  return (
    // 헤더 임시 컬러 : bg-black
    <header className="top-bar border-b bg-black">
      <div className="con max-w-[var(--site-width)] mx-auto px-[5px] h-20 flex">
        <div className="logo-box">
          <Link href="/" className="flex items-center h-full w-[85px]">
            <img
              className="origin-logo"
              src="https://cdn.imweb.me/thumbnail/20230228/0dea93f9460ff.png"
              alt="pc로고"
            />
            <img
              className="mobile-logo hidden"
              src="https://cdn.imweb.me/thumbnail/20230330/707e05baa445b.png"
              alt="mobile로고"
            />
          </Link>
        </div>
        <nav className="menu-box">
          <ul className="flex text-white h-full">
            {menuList.map((menu) => (
              <li key={menu.name}>
                <Link
                  href={menu.href}
                  className="flex h-full items-center px-5"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
