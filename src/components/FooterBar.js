import logo from "../assets/logo-sucor-sekuritas-white.png";
import { Link } from "react-router-dom";

export default function FooterBar() {
  return (
    <footer
      data-aos="fade-down"
      className="static bottom-0 w-full px-8 py-5 bg-sucor-500 rounded-t-md z-50 font-cera"
    >
      <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-between content-center items-start md:items-center">
        {/* Logo Start */}
        <div className="md:w-1/2">
          <div className="w-fit">
            <Link to="/">
              <h3 className="text-white -mb-2">Loyalty</h3>
              <img
                src={logo}
                className="w-[200px]"
                alt="Logo Sucor Sekuritas"
              />
            </Link>
          </div>
        </div>
        {/* Logo End */}

        {/* Seperator Start */}
        <hr className="h-0.5 w-full md:h-20 md:w-0.5 border-none bg-white rounded-full" />
        {/* Seperator End */}

        {/* Link Start */}
        <div className="flex flex-col md:w-1/2">
          <h3 className="text-white font-cera-bold text-start md:text-end pb-3">
            Menu Eksternal
          </h3>
          <div className="flex flex-col w-full gap-1 text-white">
            <div className="text-start md:text-end">
              <Link
                to="https://sucorsekuritas.com/"
                className="w-fit no-underline duration-150 hover:underline hover:text-sucor-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web Resmi Sucor Sekuritas
              </Link>
            </div>
            <div className="text-start md:text-end">
              <Link
                to="https://spot.sucorsekuritas.com/"
                className="w-fit no-underline duration-150 hover:underline hover:text-sucor-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                Web SPOT. Sucor Sekuritas
              </Link>
            </div>
          </div>
        </div>
        {/* Link End */}
      </div>

      <div className="mt-6 text-white text-center text-sm">
        <p>
          Hak Cipta &#169; {new Date().getFullYear() + " "}
          <span className="font-cera-bold">Sucor Sekuritas</span>
        </p>
        <p>Semua Hak Dilindungi</p>
      </div>
    </footer>
  );
}
