'use client';

import { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { LogIn, Menu } from "lucide-react";



export function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const session = null

  const navItems = [
    { href: "#", label: "Profissionais" },
  ];

  const NavLinks = () => (
    <>
    {navItems.map((item) => (
      <Button
        onClick={() => setIsOpen(false)}
        key={item.label}
        asChild
        className="text-black bg-transparent hover:bg-transparent shadow-none"
       
      >
        <Link href={item.href} className="flex items-center gap-2 text-black">
          {item.label}
        </Link>

      </Button>
    ))}
    {session ? (
      <Link 
        href="/dashboard"
        className=" flex items-center text-black justify-center gap-2"
      >
        Painel da Clinica
      </Link>
    ) : (
      <Button >
        <LogIn />
        Fazer login
      </Button>
    )}
    </>
  );


  return (
    <header 
      className="fixed top-0 right-0 left-0 z-999 py-4 px-6 bg-white"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          href="/"
          className="text-2xl font-bold text-zinc-900">
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        <nav className="hidden space-x-4 md:flex items-center">
          <NavLinks />
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
           <Button 
            className="text-black hover:bg-transparent"
            variant="ghost"
            size="icon"
           >
             <Menu className="h-6 w-6" />
           </Button>
          </SheetTrigger>


          <SheetContent side="right" className="w-60 sm:w-75 z-9999">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>
                Veja nossos links
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 px-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}