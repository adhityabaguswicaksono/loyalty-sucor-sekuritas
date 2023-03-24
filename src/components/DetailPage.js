import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, redirect } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/style.css';
import { Helmet } from 'react-helmet';
import Loader from './Loader';

export function DetailPage() {
  const data = useLocation().state.element;

  function replaceText(text) {
    let result = text.replace(/(\r\n|\r|\n)/g, '<br/>');
    return (
      <p className="text-md" dangerouslySetInnerHTML={{ __html: result }} />
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Helmet>
        <title>{data.merchantID} - Loyalty Sucor Sekuritas</title>
      </Helmet>
      <NavBar />
      <div className="container mx-auto p-8 pt-32 flex flex-col lg:grid grid-all gap-4">
        <div className="flex flex-col justify-center grow gap-4 p-8 md:p-12 bg-sucorblue rounded-md text-white outline outline-0 grid-profile">
          <div>
            <div className="flex flex-col grow gap-3">
              <img
                src={data.img}
                className="rounded-full bg-white w-36 h-36 md:w-52 md:h-52 bg-cover self-center"
                alt={data.merchantID}
              />
              <h4 className="text-xl font-bold text-center self-center">
                {data.merchantID}
              </h4>
            </div>
            <hr className="border border-1 border-white rounded-full my-4" />
            <div className="flex flex-row gap-4 mb-3 break-all md:break-normal">
              <p className="text-md">
                <i className="fa-solid fa-location-dot"></i>
              </p>
              <p className="text-md">{replaceText(data.address)}</p>
            </div>
            <div className="flex flex-row gap-3 mb-3 break-all md:break-normal">
              <p className="text-md">
                <i className="fa-solid fa-phone"></i>
              </p>
              <p className="text-md">{data.telp}</p>
            </div>
            <div className="flex flex-row gap-3 break-all md:break-normal">
              <p className="text-md">
                <i className="fa-brands fa-instagram"></i>
              </p>
              <p className="text-md">{data.instagram}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap flex-col grow gap-4 p-8 md:p-12 justify-center bg-white rounded-md text-sucorblue outline outline-1 outline-sucorblue grid-detail">
            <h4 className="text-xl font-bold text-center self-center pb-8">
              About
              <br />
              {data.merchantID}
            </h4>
            {replaceText(data.about)}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
