"use client";

import { useEffect, useState, useRef } from "react";

import Logo from "./Logo";
import MainNav from "./MainNav";
import AuthNav from "./AuthNav";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const handleScroll = () => {
      timeoutRef.current = setTimeout(() => {
        console.log("실행");
        setIsScrolled(window.scrollY > 30);
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <header
      className={`top-bar ${
        isScrolled ? "bg-[#ffffffe6]" : ""
      } fixed w-full z-100`}
    >
      <div className="con max-w-(--site-width) mx-auto px-[5px] h-20 flex">
        <Logo isScrolled={isScrolled} />
        <MainNav isScrolled={isScrolled} />
        <AuthNav isScrolled={isScrolled} />
      </div>
    </header>
  );
}
