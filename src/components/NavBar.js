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
                <svg className="h-6 w-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />  
                  <polyline points="10 17 15 12 10 7" />  
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
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
