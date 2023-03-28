import React, { useState, useEffect, Suspense } from 'react';
import { useLocation, redirect } from 'react-router-dom';
import NavBar from './NavBar';
import '../styles/style.css';
import { Helmet } from 'react-helmet';
import Loader from './Loader';
import NotFound from './NotFound';

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
            <div className="flex flex-row gap-3 mb-3 break-all md:break-normal">
              <p class="text-md">
                <svg class="h-5 w-5"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </p>
              {replaceText(data.address)}
            </div>
            <div className="flex flex-row gap-3 mb-3 break-all md:break-normal">
              <p className="text-md">
                <svg className="h-5 w-5"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                  <path stroke="none" d="M0 0h24v24H0z"/>  
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                </svg>
              </p>
              <p className="text-md">{data.telp}</p>
            </div>
            <div className="flex flex-row gap-3 break-all md:break-normal">
              <p class="text-md">
                <svg class="h-5 w-5"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
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
