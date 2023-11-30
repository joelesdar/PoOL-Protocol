import Link from "next/link";
import { useRouter } from "next/router";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

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
  return (
    <>
      <div className="container-flex text-center">
        <div className="row align-items-start bg-primary-subtle p-0 h-20 shadow mb-4 bg-white ">
          <div className="col-1 p-2">
            <img className="rounded float-start" src="/marca_pool.svg" alt="logo" width={90} />
          </div>
          <div className="d-inline-flex col-5 p-4">
            <ul className="list-group list-group-horizontal">
              <HeaderMenuLinks />
            </ul>
          </div>
          <div className="col-6 p-4">
            <div className="">
              <RainbowKitCustomConnectButton />
              <FaucetButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
