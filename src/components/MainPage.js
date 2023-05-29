import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Pagination from "./Pagination";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loader from "./Loader";
import Card from "./Card";
import FooterBar from "./FooterBar";

export default function MainPage() {
  // For set merchant data from API
  const [merchantData, setMerchantData] = useState([]);

  // For input from search data
  const [searchData, setSearchData] = useState("");

  // for input category from merchant data (Not Ready Yet from API)
  const [categoryData, setCategoryData] = useState("");

  // For set page from pagination
  const [currentPage, setCurrentPage] = useState(1);

  // For show loading page
  const [isLoading, setIsLoading] = useState(true);

  // For filtered merchant data after filtered via name and category
  let filteredData = [];

  // For show much merchant data in one page
  let PageSize = 25;

  useEffect(() => {
    fetchData();
  }, []);

  // For fetching data from API
  async function fetchData() {
    const dataAPI = await axios.get(
      "https://apiloyalty.sucorsekuritas.com/api/v1/merchant/MerchantList"
    );

    setMerchantData(dataAPI.data);
    setIsLoading(false);
  }

  // For show merchant data after filtered
  function ShowFilteredData() {
    // For select filtered data
    const filterText = searchData.toLowerCase();
    filteredData = merchantData.filter((element) => {
      return element["merchantID"].toLowerCase().includes(filterText);
    });

    // For slice merchant data into page with pagination
    let currentFilteredMerchantData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return filteredData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    // For show notification if filtered merchant data doesn't exist
    if (filteredData.length === 0) {
      return (
        <div
          data-aos="fade-up"
          className="group flex flex-col grow bg-white p-8 py-24 rounded-lg gap-4 md:gap-8 text-red-600 outline outline-1 outline-red-600 duration-150"
        >
          <h4 className="text-2xl text-center font-cera-bold">
            Tidak Ada Data Merchant
          </h4>
          <h4 className="text-normal text-center self-center">
            Silahkan cari menggunakan kata kunci lainnya...
          </h4>
        </div>
      );
    }

    // For show filtered merchant data
    return (
      <>
        <div className="flex flex-wrap flex-col md:flex-row gap-4 justify-center">
          {currentFilteredMerchantData.map((element) => (
            <Card data={element} key={element.merchantID} />
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
  }

  function ShowFullData() {
    // For slice merchant data into page with pagination
    const currentMerchantData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return merchantData.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);

    // For show all merchant data
    return (
      <>
        <div className="flex flex-wrap flex-col md:flex-row gap-4 justify-center">
          {currentMerchantData.map((element) => (
            <Card data={element} key={element.merchantID} />
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

  // For loader until merchant data is ready to show
  if (isLoading) {
    return <Loader />;
  }

  return (
    <HelmetProvider>
      {/* Tag Head Start */}
      <Helmet>
        <title>Loyalty Sucor Sekuritas</title>
      </Helmet>
      {/* Tag Head End */}

      {/* Navigation Bar Start */}
      <NavBar />
      {/* Navigation Bar End */}

      {/* Content Start */}
      <div className="calculation-height">
        <div className="container mx-auto p-8 font-cera">
          {/* Landing Section Start */}

          <div
            data-aos="fade-up"
            className="pb-48 pt-60 font-cera-bold text-center text-sucor-500"
          >
            <h2 className="text-xl pb-4">Selamat Datang di</h2>
            <h1 className="text-3xl">LOYALTY SUCOR SEKURITAS</h1>
          </div>
          {/* Landing Section Start */}

          {/* Seperator Start */}
          <hr
            data-aos="fade-up"
            className="h-0.5 border-none bg-sucor-500 rounded-full"
          />
          {/* Seperator End */}

          {/* Merchant Section Start */}
          <div className="py-12">
            {/* Merchant Head Section Start */}
            <div
              data-aos="fade-up"
              className="font-cera-bold text-sucor-500 pb-8 text-center"
            >
              <h2 className="text-xl pb-4 ">Daftar Merchant</h2>
              <h1 className="text-3xl">LOYALTY SUCOR SEKURITAS</h1>
            </div>
            {/* Merchant Head Section End */}

            {/* Merchant Filter Section Start */}
            <div
              data-aos="fade-up"
              className="flex flex-col gap-3 py-6 md:flex-row-reverse"
            >
              <div className="grow items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    className="h-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-sucor-500 focus:ring-0 focus:border-sucor-500 focus:outline-none duration-150 block w-full p-2.5"
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
                  className="h-10 bg-white border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-sucor-500 focus:border-sucor-500 focus:outline-none duration-150 block w-full p-2.5"
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
            {/* Merchant Filter Section End */}

            {/* Merchant Data Section Start */}
            {searchData.length === 0 && <ShowFullData />}
            {searchData.length > 0 && <ShowFilteredData />}
            {/* Merchant Data Section End */}
          </div>
        </div>
        {/* Content End */}
      </div>

      {/* Footer Start */}
      <FooterBar />
      {/* Footer End */}
    </HelmetProvider>
  );
}
