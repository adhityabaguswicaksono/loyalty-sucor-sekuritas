import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="font-cera container mx-auto p-8 pt-48 text-center text-sucor-500">
        <h1 className="text-4xl font-bold pb-2 font-cera-bold">Maaf!</h1>
        <h3 className="text-2xl font-bold pb-8 font-cera-bold">
          Halaman ini tidak ditemukan!
        </h3>
        <p className="text-md pb-8">
          Silahkan kembali ke{" "}
          <Link
            to="/"
            className="px-2 py-1 rounded-md bg-sucor-500 text-white outline outline-0 duration-150 hover:bg-white hover:outline-1 hover:border-sucor-500 hover:text-sucor-500"
          >
            halaman utama
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
