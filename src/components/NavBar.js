import logo from "../assets/logo-sucor-sekuritas-white.png";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      data-aos="fade-down"
      className="fixed w-full px-8 py-5 bg-sucor-500 rounded-b-md z-50 font-cera"
    >
      <div className="container mx-auto flex gap-x-3 justify-between content-center items-center">
        {/* Left Logo Start */}
        <div className="leading-none">
          <Link to="/">
            <p className="text-white -mb-2">Loyalty</p>
            <img src={logo} className="w-[200px]" alt="Logo Sucor Sekuritas" />
          </Link>
        </div>
        {/* Left Logo End */}

        {/* Right Button Start */}
        <div>
          <Link
            to="https://eform.sucorsekuritas.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="rounded-md bg-white px-4 py-3 outline outline-1 outline-white text-sucor-500 hover:text-white hover:bg-sucor-500 hover:ease-in-out duration-300">
              <p className="md:hidden leading-none">
                <i className="fa-solid fa-right-to-bracket py-1"></i>
              </p>
              <p className="hidden md:inline-block leading-none">
                Online Registration
              </p>
            </button>
          </Link>
        </div>
        {/* Right Button End */}
      </div>
    </nav>
  );
}
