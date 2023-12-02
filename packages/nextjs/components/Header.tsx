import React from "react";
//import Image from "next/image";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

/**
 * Site header
 */
export const Header = () => {
  return (
    <>
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
            <img src="../public/marca_pool.svg" width="30" height="30" alt="logo" />
          </a>
          <ul className="navbar-nav d-flex justify-content-center align-items-center">
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
        </div>
        <div className="">
          <div className="">
            <RainbowKitCustomConnectButton />
            <FaucetButton />
          </div>
        </div>
      </div>
    </>
  );
};
