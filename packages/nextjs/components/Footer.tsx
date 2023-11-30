import React from "react";
import { HeartIcon } from "@heroicons/react/24/outline";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="container-fluid text-center">
      <div className="">
        <div className="">
          <p className="">
            Hecho por LatinoAmericanos con <HeartIcon className="inline-block h-4 w-4" /> para el mundo
          </p>
        </div>
      </div>
    </div>
  );
};
