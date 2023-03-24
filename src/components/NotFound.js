import React from 'react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-8 pt-32 text-center text-sucorblue">
        <h1 className="text-4xl font-bold pb-2">Maaf!</h1>
        <h3 className="text-2xl font-bold pb-8">
          Halaman ini tidak ditemukan!
        </h3>
        <p className="text-md pb-8">
          Silahkan kembali ke{' '}
          <Link
            to="/"
            className="px-2 py-1 rounded-md bg-sucorblue text-white outline outline-0 duration-150 hover:bg-white hover:outline-1 hover:border-sucorblue hover:text-sucorblue"
          >
            halaman utama
          </Link>
        </p>
      </div>
    </>
  );
}

export default NotFound;
