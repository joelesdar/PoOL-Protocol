import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="container-fluid  bg-black h-40">
      <div className="container text-center">
        <div className="row align-items-start text-white">
          <div className="col-2">
            <img className="rounded float-start" src="/marca_pool.svg" alt="logo" width={120} />
          </div>
          <div className="list-group-horizontal col-2">
            <a href="#" className="list-group-item">
              Inicio
            </a>
            <a href="#" className="list-group-item">
              Blog
            </a>
            <a href="#" className="list-group-item">
              Comunidad
            </a>
            <a href="#" className="list-group-item">
              FAQ
            </a>
          </div>
        </div>
      </div>
      <div className="">
        <p className="text-white text-center">
          Hecho por LatinoAmericanos con <HeartIcon className="inline-block h-4 w-4" /> para el mundo
        </p>
      </div>
    </div>
  );
};
