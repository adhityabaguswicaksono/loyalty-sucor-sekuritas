import logo from '../assets/sucor-sekuritas-white-logo.png';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="fixed w-full px-8 py-5 bg-sucorblue gap-x-5 rounded-b-md z-50">
      <div className="container mx-auto flex justify-between content-center items-center">
        <div className="max-w-xxs">
          <Link to="/">
            <img src={logo} alt="Logo Sucor Sekuritas" />
          </Link>
        </div>
        <div>
          <Link to="https://eform.sucorsekuritas.com/">
            <button className="rounded-md bg-white px-4 py-3 text-sucorblue outline outline-0 hover:bg-sucorblue hover:outline-1 hover:outline-white hover:text-white hover:ease-in-out duration-150">
              <p className="md:hidden leading-none">
                <i className="fa-solid fa-right-to-bracket"></i>
              </p>
              <p className="hidden md:inline-block leading-none">
                Online Registration
              </p>
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
