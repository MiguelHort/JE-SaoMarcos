"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

import logoJE from "@/assets/img/logoJE.png"
import Image from "next/image"


const navLinks = [
  { name: "Início", href: "/" },
  { name: "Eventos", href: "/eventos" },
  { name: "Álbuns", href: "/albuns" },
  { name: "Contribua", href: "/contribua" },
  { name: "Sobre", href: "/sobre" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b shadow-sm bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex text-2xl font-bold text-gray-900">
          <Image src={logoJE} alt="logo JE São Marcos" height={40} />
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-700 hover:text-black transition-colors 
             before:content-[''] before:absolute before:bottom-0 before:left-1/2 
             before:w-0 before:h-[2px] before:bg-red-800 
             before:transition-all before:duration-300 
             hover:before:left-0 hover:before:w-full"
            >
              {link.name}
            </Link>
          ))}
          <Button className="cursor-pointer">Faça Parte</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="mt-2 w-full">Faça Parte</Button>
          </nav>
        </div>
      )}
    </header>
  );
};
