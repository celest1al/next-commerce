"use client";

import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navigationMenuItems = [
  {
    id: 1,
    title: "Merch",
    link: "/products?category=merch",
    description: "Shop our latest merch collection",
  },
  {
    id: 2,
    title: "Bags",
    link: "/products?category=bags",
    description: "Shop our latest bags collection",
  },
  {
    id: 3,
    title: "Boxes",
    link: "/products?category=boxes",
    description: "Shop our latest boxes collection",
  },
  {
    id: 4,
    title: "Food & Beverage",
    link: "/products?category=food-boxes",
    description: "Shop our latest food & beverage collection",
  },
  {
    id: 5,
    title: "Marketing",
    link: "/products?category=marketing",
    description: "Shop our latest marketing collection",
  },
  {
    id: 6,
    title: "Stickers",
    link: "/products?category=stickers",
    description: "Shop our latest stickers collection",
  },
  {
    id: 7,
    title: "Stamps and Acrylic",
    link: "/products?category=stamps-acrylic",
    description: "Shop our latest stamps and acrylic collection",
  },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white min-h-[60px] flex items-center justify-center">
      <div className="px-5 w-full flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/">
            <Image
              src="/images/header-logo.svg"
              width={172}
              height={45}
              alt="Sealed logo header"
            />
          </Link>
          <div className="flex items-center gap-4">
            <NavigationMenu className="w-full">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-base font-semibold">
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid grid-cols-2 gap-4 p-4 sm:w-[400px] lg:w-[800px]">
                      {navigationMenuItems.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link href={item.link} legacyBehavior passHref>
                              <NavigationMenuLink>
                                <div
                                  className={cn(
                                    "flex flex-col select-none space-y-1 rounded-md p-3 leading-none",
                                    "no-underline outline-none transition-colors hover:bg-accent",
                                    "hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  )}
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {item.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {item.description}
                                  </p>
                                </div>
                              </NavigationMenuLink>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "font-semibold text-base"
                      )}
                    >
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
