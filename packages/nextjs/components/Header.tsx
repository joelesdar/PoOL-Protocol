import React from "react";
import Link from "next/link";
//import Image from "next/image";
//import { useRouter } from "next/router";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

/**
 * Site header
 */
export const Header = () => {
  return (
    <>
      <div className="container-fluid align-items-center bg-dark border-bottom border-body">
        <div className="d-flex">
          <div className="col-9">
            <nav className="navbar navbar-expand-md bg-dark border-bottom border-body" data-bs-theme="dark">
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
                    <img src="/marca_pool.svg" className="" alt="logo" width="90" />
                  </a>
                  <ul className="navbar-nav me-auto mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Inicio
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="profile">
                        Perfil
                      </Link>
                      <a className="nav-link" href="#"></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Comunidad
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        FAQ
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="d-flex">
            <RainbowKitCustomConnectButton />
          </div>
        </div>
      </div>
    </>
  );
};
