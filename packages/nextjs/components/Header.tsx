import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

interface HeaderMenuLink {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

export const menuLinks: HeaderMenuLink[] = [
  //Aquí se cambia los textos del menú
  {
    label: "Inicio",
    href: "/inicio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Comunidad",
    href: "/comunidad",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
];

export const HeaderMenuLinks = () => {
  const router = useRouter();

  return (
    <>
      {menuLinks.map(({ label, href, icon }) => {
        const isActive = router.pathname === href;
        return (
          <li key={href}>
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-2 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
          </li>
        );
      })}
    </>
  );
};

/**
 * Site header
 */
export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="sticky lg:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>

        <nav className="navbar bg-body-tertiary">
          <div className="container">
            <Image alt="logo" className="cursor-pointer" fill src="/marca_pool.svg" />
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#"></a>

            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <HeaderMenuLinks />
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="navbar-end flex-grow mr-4">
        <RainbowKitCustomConnectButton />
        <FaucetButton />
      </div>
    </div>
  );
};
