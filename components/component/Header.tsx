"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import React from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-10 h-16 md:h-20"
      style={{
        background: 'linear-gradient(90deg, rgba(15,23,42,0.65) 60%, rgba(34,197,94,0.10) 100%)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
      }}
    >
      <Link className="flex items-center gap-2" href="/">
        <Image src="/logo.webp" alt="Innovate" width={44} height={44} className="rounded-lg shadow-md" />
      </Link>
      <nav
        className={
          open
            ? "flex flex-col absolute top-16 left-0 w-full bg-[rgba(15,23,42,0.97)] backdrop-blur-lg py-6 gap-4 md:static md:flex-row md:bg-transparent md:backdrop-blur-none md:py-0 md:gap-8 items-center transition-all duration-300"
            : "hidden md:flex flex-row gap-8 items-center"
        }
      >
        <Link
          className="text-base md:text-lg font-medium px-2 py-1 rounded-md transition-all duration-200 hover:underline underline-offset-4 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-base md:text-lg font-medium px-2 py-1 rounded-md transition-all duration-200 hover:underline underline-offset-4 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          href="/#Prizes"
        >
          Prizes
        </Link>
        <Link
          className="text-base md:text-lg font-medium px-2 py-1 rounded-md transition-all duration-200 hover:underline underline-offset-4 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          href="/#Mentors"
        >
          Mentor
        </Link>
        <Link
          className="text-base md:text-lg font-medium px-2 py-1 rounded-md transition-all duration-200 hover:underline underline-offset-4 hover:text-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          href="/#ProblemStatement"
        >
          Roadmap
        </Link>
        <a
          className="ml-0 md:ml-2 text-base md:text-lg font-semibold px-4 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 text-black shadow-md border border-emerald-200 hover:from-emerald-500 hover:to-cyan-500 hover:text-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          href="https://www.srmist-ncr-gfg.club/Registration"
          target="_blank"
          rel="noopener noreferrer"
        >
          Register
        </a>
      </nav>
      <button
        className="md:hidden flex items-center justify-center ml-2 p-2 rounded-lg bg-black/10 hover:bg-black/20 transition-all duration-200"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{ zIndex: 60 }}
      >
        {!open ? (
          <GiHamburgerMenu className="text-white text-2xl" />
        ) : (
          <IoMdClose className="text-white text-2xl" />
        )}
      </button>
      <style jsx>{`
        header {
          transition: background 0.3s, box-shadow 0.3s;
        }
        nav a, nav Link {
          font-family: 'Inter', system-ui, sans-serif;
        }
        @media (max-width: 768px) {
          nav {
            border-radius: 0 0 18px 18px;
            box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
            margin-top: 0;
          }
        }
      `}</style>
    </header>
  );
}
