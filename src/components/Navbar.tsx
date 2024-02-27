"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
      <div
        className={cn(
          "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
          className
        )}
      >
        <Menu setActive={setActive}>
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={null} item="Home">
              <div className="flex flex-col space-y-4 text-sm">Home</div>
            </MenuItem>
          </Link>
          <MenuItem setActive={setActive} active={active} item="Trending">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/trending">Legend of Zelda</HoveredLink>
              <HoveredLink href="/trending">Red Dead Redemption 2</HoveredLink>
              <HoveredLink href="/trending">CyberPunk</HoveredLink>
              <HoveredLink href="/trending">Super Mario Odyssey</HoveredLink>
              <HoveredLink href="/trending">Gta 6</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
            <MenuItem setActive={setActive} active={active} item="Contact">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/trending">E-mail</HoveredLink>
                <HoveredLink href="/trending">Phone no.</HoveredLink>
              </div>
            </MenuItem>
          </Link>
        </Menu>
      </div>
    </>
  );
}
