import React, { useState, useEffect, Suspense, useMemo } from 'react';
import axios from 'axios';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import Pagination from './Pagination';
import { Helmet } from 'react-helmet';
import Loader from './Loader';

let PageSize = 10;

function MainPage() {
  const [merchantData, setMerchantData] = useState([]);
  const [searchData, setSearchData] = useState('');
  const [categoryData, setCategoryData] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    const dataAPI = await axios.get(
      'https://apiloyalty.sucorsekuritas.com/api/v1/merchant/MerchantList'
    );

    setMerchantData(dataAPI.data);
    setIsLoading(false);
  }

  function ShowFilteredData() {
    const filterText = searchData.toLowerCase();

    const filteredData = merchantData.filter((element) => {
      if (element['merchantID'].toLowerCase().includes(filterText)) {
        return true;
      }
    });

    const currentFilteredMerchantData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return filteredData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    if (filteredData.length > 0) {
      return (
        <>
          <div className="flex flex-wrap flex-col md:flex-row gap-4 justify-center">
            {currentFilteredMerchantData.map((element) => (
              <Link
                to={`./merchant-detail`}
                state={{ element }}
                key={element.merchantNID}
              >
                <div className="group flex flex-row md:flex-col grow md:grow-0 md:w-80 md:h-full bg-sucorblue p-4 md:p-8 rounded-lg gap-4 md:gap-8 text-white outline outline-0 duration-150 hover:bg-white hover:text-sucorblue hover:outline-1 hover:outline-sucorblue hover:ease-in">
                  <img
                    src={element.img}
                    className="rounded-full bg-white w-24 h-24 md:w-52 md:h-52 bg-cover self-center outline outline-0 duration-150 group-hover:outline-1 group-hover:outline-sucorblue"
                    alt={element.merchantID}
                  />
                  <h4 className="text-xl text-start md:text-center self-center">
                    {element.merchantID}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={filteredData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      );
    } else if (filteredData.length === 0) {
      return (
        <div className="group flex flex-col grow bg-white p-8 py-24 rounded-lg gap-4 md:gap-8 text-red-600 outline outline-1 outline-red-600 duration-150">
          <h4 className="text-2xl text-center font-bold">
            Tidak Ada Data Merchant
          </h4>
          <h4 className="text-normal text-center self-center">
            Silahkan cari menggunakan kata kunci lainnya...
          </h4>
        </div>
      );
    }
  }

  function ShowFullData() {
    const filterText = searchData.toLowerCase();

    const currentMerchantData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return merchantData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    if (filterText.length === 0) {
      return (
        <>
          <div className="flex flex-wrap flex-col md:flex-row gap-4 justify-center">
            {currentMerchantData.map((element) => (
              <Link
                to={`./merchant-detail`}
                state={{ element }}
                key={element.merchantNID}
              >
                <div className="group flex flex-row md:flex-col grow md:grow-0 md:w-80 bg-sucorblue p-4 md:p-8 rounded-lg gap-4 md:gap-8 text-white outline outline-0 duration-150 hover:bg-white hover:text-sucorblue hover:outline-1 hover:outline-sucorblue hover:ease-in">
                  <img
                    src={element.img}
                    className="rounded-full bg-white w-24 h-24 md:w-52 md:h-52 bg-cover self-center outline outline-0 duration-150 group-hover:outline-1 group-hover:outline-sucorblue"
                    alt={element.merchantID}
                  />
                  <h4 className="text-xl text-start md:text-center self-center">
                    {element.merchantID}
                  </h4>
                </div>
              </Link>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalCount={merchantData.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      );
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return !isLoading ? (
    <>
      <Helmet>
        <title>Loyalty Sucor Sekuritas</title>
      </Helmet>
      <NavBar />
      <div className="container mx-auto p-8">
        <div className="pb-48 pt-60 font-bold text-center text-sucorblue">
          <h2 className="text-xl pb-4">Selamat Datang di</h2>
          <h1 className="text-3xl">LOYALTY SUCOR SEKURITAS</h1>
        </div>

        <hr className="border border-1 border-sucorblue rounded-full" />

        <div className="py-12">
          <h2 className="text-xl font-bold text-center text-sucorblue pb-4">
            Daftar Merchant
            <br />
            Loyalty Sucor Sekuritas
          </h2>

          <div className="flex flex-col gap-3 py-6 md:flex-row-reverse">
            <div className="grow items-center">
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-sucorblue focus:ring-0 focus:border-sucorblue focus:outline-none block w-full p-2.5"
                  placeholder="Search..."
                  onChange={(e) => {
                    setSearchData(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="items-center">
              <label htmlFor="category" className="sr-only">
                Category
              </label>
              <select
                id="category"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-sucorblue focus:border-sucorblue focus:outline-none block w-full p-2.5"
                defaultValue="0"
                onChange={(e) => {
                  setCategoryData(e.target.value);
                }}
              >
                <option value="0">All Category</option>
                <option value="1">Fashion</option>
                <option value="2">Culinary</option>
              </select>
            </div>
          </div>

          {searchData.length === 0 && (
            <Suspense fallback={<Loader />}>
              <ShowFullData />
            </Suspense>
          )}
          {searchData.length > 0 && (
            <Suspense fallback={<Loader />}>
              <ShowFilteredData />
            </Suspense>
          )}
        </div>
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default MainPage;
