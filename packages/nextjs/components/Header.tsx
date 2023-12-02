import React from "react";
//import Image from "next/image";
//import Link from "next/link";
//import { useRouter } from "next/router";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

/**
 * Site header
 */
export const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar-toggler">
            <a className="navbar-brand" href="#">
              <img src="/marca_pool.svg" className="rounded float-start" alt="logo" width="70" />
            </a>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Perfil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Comunidad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  FAQ
                </a>
              </li>
            </ul>
            <div className="">
              <RainbowKitCustomConnectButton />
              <FaucetButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
