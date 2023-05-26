import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import FooterBar from "./FooterBar";

function NotFound() {
  return (
    <HelmetProvider>
      {/* Tag Head Start */}
      <Helmet>
        <title>Halaman Tidak Ditemukan - Loyalty Sucor Sekuritas</title>
      </Helmet>
      {/* Tag Head End */}

      {/* Navigation Bar Start */}
      <NavBar />
      {/* Navigation Bar End */}

      {/* Content Start */}
      <div className="calculation-height">
        <div
          data-aos="fade-up"
          className="font-cera container mx-auto p-8 pt-48 text-center text-sucor-500"
        >
          <h1 className="text-4xl pb-2 font-cera-bold">Maaf!</h1>
          <h3 className="text-2xl pb-8 font-cera-bold">
            Halaman ini tidak ditemukan!
          </h3>
          <p className="text-md pb-8">
            Silahkan kembali ke{" "}
            <Link
              to="/"
              className="px-2 py-1 rounded-md bg-sucor-500 text-white outline outline-1 outline-sucor-500 duration-150 hover:bg-sucor-700 hover:outline-sucor-700"
            >
              halaman utama
            </Link>
          </p>
        </div>
      </div>
      {/* Content End */}

      {/* Footer Start */}
      <FooterBar />
      {/* Footer End */}
    </HelmetProvider>
  );
}

export default NotFound;
