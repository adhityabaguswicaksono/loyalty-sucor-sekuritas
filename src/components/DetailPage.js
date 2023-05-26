import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import "../styles/style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import FooterBar from "./FooterBar";
import Loader from "./Loader";

// For convert address merchant with HTML tag
function convertAddressMerchant(text) {
  let i = [];
  let j = [];
  let final = "";

  let result = text.replace(/(\r\n|\r|\n)/g, "<br/>");
  let data = result.split("<br/>");
  var regex = new RegExp(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi
  );

  for (let x of data) {
    if (x.match(regex)) {
      if (x.includes("(") && x.includes(")")) {
        let temp;
        temp = x.split("(")[1];
        i.push(temp.split(")")[0]);
      } else {
        i.push(x);
      }
    }
  }

  for (let x = 0; x < i.length; x++) {
    j.push(
      `<a class="duration-150 underline cursor-pointer hover:text-sucor-200" href="${i[x]}" target="_blank" rel="noopener noreferrer">${i[x]}</a>`
    );
  }

  for (let x = 0; x < data.length; x++) {
    for (let y = 0; y < i.length; y++) {
      if (data[x].includes(`(${i[y]})`) || data[x].includes(i[y])) {
        if (data[x].includes(`(${i[y]})`)) {
          final += `(${j[y]})<br/>`;
        } else {
          final += `${j[y]}<br/>`;
        }
        break;
      } else if (
        (!data[x].includes(`(${i[y]})`) || !data[x].includes(i[y])) &&
        y === i.length - 1
      ) {
        final += `${data[x]}<br/>`;
      }
    }
  }

  return (
    <p
      className="text-md leading-relaxed"
      dangerouslySetInnerHTML={{ __html: final }}
    />
  );
}

// For convert instagram link merchant with HTML tag
function convertInstagramLink(links) {
  const datas = links.split(" ");
  let data = "";
  let link = "";

  if (datas.length === 1) {
    if (datas[0].includes("@")) {
      data = datas[0].split("@")[1];
    } else if (!datas[0].includes("@")) {
      data = datas[0];
    } else if (datas[0].includes("http")) {
      data = datas[0];
    }
  } else if (datas.length > 1) {
    data = [];
    for (let x of datas) {
      if (x.includes("@")) {
        data.push(x.split("@")[1]);
      } else if (x.includes("http")) {
        data.push(x);
      }
    }
  }

  if (typeof data === "string") {
    if (data.includes("http")) {
      link = `<div><a class="duration-150 underline cursor-pointer hover:text-sucor-200" href="${data}" target="_blank" rel="noopener noreferrer">${data}</a><div>`;
    } else {
      link = `<div><a class="duration-150 underline cursor-pointer hover:text-sucor-200" href="https://instagram.com/${data}" target="_blank" rel="noopener noreferrer">${data}</a><div>`;
    }
  } else if (typeof data === "object") {
    for (let x of data) {
      if (data.includes("http")) {
        link += `<div><a class="duration-150 underline cursor-pointer hover:text-sucor-200" href="${x}" target="_blank" rel="noopener noreferrer">${x}</a><div>`;
      } else {
        link += `<div><a class="duration-150 underline cursor-pointer hover:text-sucor-200" href="https://instagram.com/${x}" target="_blank" rel="noopener noreferrer">${x}</a><div>`;
      }
    }
  }

  return (
    <div
      className="text-md leading-relaxed"
      dangerouslySetInnerHTML={{ __html: link }}
    ></div>
  );
}

// For convert about merchant with HTML tag
function convertAboutMerchant(text) {
  let result = text.replace(/(\r\n|\r|\n)/g, "<br/>");
  let datas = result.split("<br/>");
  let nonNumberData = [];
  let numberData = [];
  let data = "";

  for (let i = 0; i < datas.length; i++) {
    if (datas[i].match(/\b([1-9]|[1-9][0-9]|[1-9][0-9][0-9])\b/)) {
      numberData.push({
        id: i,
        content: datas[i].substring(datas[i].indexOf(" ") + 1),
      });
    } else {
      nonNumberData.push({ id: i, content: datas[i] });
    }
  }

  for (let i = 0; i < datas.length; i++) {
    for (let j = 0; j < nonNumberData.length; j++) {
      if (nonNumberData[j]["id"] === i) {
        data += nonNumberData[j]["content"] + "<br/>";
      }
    }
    for (let j = 0; j < numberData.length; j++) {
      if (numberData[j]["content"].includes("@") && numberData[j]["id"] === i) {
        numberData[j]["content"].split(" ").forEach((x, index) => {
          if (index === 0) {
            numberData[j]["content"] = "";
          }
          if (x.includes("@")) {
            if (x[x.length - 1].match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/)) {
              x = `<a class="duration-150 underline cursor-pointer hover:text-sucor-200" href="https://instagram.com/${
                x.substring(0, x.length - 1).split("@")[1]
              }" target="_blank" rel="noopener noreferrer">${
                x.substring(0, x.length - 1).split("@")[1]
              }</a>`;
            } else {
              x = `<a class="duration-150 underline cursor-pointer hover:text-sucor-200" href="https://instagram.com/${
                x.split("@")[1]
              }" target="_blank" rel="noopener noreferrer">${x}</a>`;
            }
            numberData[j]["content"] += `${x} `;
          } else {
            numberData[j]["content"] += `${x} `;
          }
        });
      }

      if (j === 0 && numberData[j]["id"] === i) {
        data +=
          "<ol class='list-decimal pl-5'><li>" +
          numberData[j]["content"] +
          "</li>";
      } else if (j === numberData.length - 1 && numberData[j]["id"] === i) {
        data += "<li>" + numberData[j]["content"] + "</li></ol>";
      } else if (numberData[j]["id"] === i) {
        data += "<li>" + numberData[j]["content"] + "</li>";
      }
    }
  }

  return (
    <p
      className="text-md leading-relaxed"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
}

export function DetailPage() {
  // For save check state is exist or not
  const checkState = useLocation().state;

  // For show loading page
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoading(false);
  }, []);

  // For check state exist or not
  if (checkState === null) {
    return (
      <HelmetProvider>
        {/* Tag Head Start */}
        <Helmet>
          <title>Merchant Tidak Ditemukan - Loyalty Sucor Sekuritas</title>
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
              Merchant tidak ditemukan
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

  // For save data from state
  const data = checkState.element;

  return isLoading ? (
    <Loader />
  ) : (
    <HelmetProvider>
      {/* Tag Head Start */}
      <Helmet>
        <title>{data.merchantID} - Loyalty Sucor Sekuritas</title>
      </Helmet>
      {/* Tag Head End */}

      {/* Navigation Bar Start */}
      <NavBar />
      {/* Navigation Bar End */}

      {/* Content Start */}
      <div className="calculation-height">
        <div className="font-cera container mx-auto px-8 pt-32 pb-12 flex flex-col lg:grid grid-all gap-4">
          {/* Merchant Information Box Start */}
          <div
            data-aos="fade-up"
            className="flex flex-col justify-center grow gap-2 p-8 md:p-12 bg-sucor-500 rounded-md text-white grid-profile"
          >
            {/* Merchant Head Box Start */}
            <div className="flex flex-col grow gap-3">
              <img
                src={data.img}
                className="rounded-full bg-white w-36 h-36 md:w-52 md:h-52 bg-cover self-center"
                alt={data.merchantID}
              />
              <h4 className="text-2xl font-cera-bold text-center self-center">
                {data.merchantID}
              </h4>
            </div>
            {/* Merchant Head Box End */}

            {/* Seperator Start */}
            <hr className="border border-1 border-white rounded-full my-4" />
            {/* Seperator End */}

            {/* Merchant Detail Start */}
            <div className="flex flex-row gap-3 mb-3 break-all md:break-normal">
              <div className="text-md w-5">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              {convertAddressMerchant(data.address)}
            </div>
            <div className="flex flex-row gap-3 mb-3 break-all md:break-normal">
              <div className="text-md w-5">
                <i className="fa-solid fa-phone"></i>
              </div>
              <p className="text-md leading-relaxed">{data.telp}</p>
            </div>
            <div className="flex flex-row gap-3 break-all md:break-normal">
              <div className="text-md w-5">
                <i className="fa-brands fa-instagram"></i>
              </div>
              {convertInstagramLink(data.instagram)}
            </div>
            {/* Merchant Detail End */}
          </div>
          {/* Merchant Information Box End */}

          {/* Merchant About Box Start */}
          <div>
            <div
              data-aos="fade-up"
              className="flex flex-wrap flex-col grow gap-4 p-8 md:p-12 justify-start bg-white rounded-md text-sucor-500 outline outline-1 outline-sucor-500 grid-detail"
            >
              <h4 className="text-xl leading-8 font-cera-bold text-center self-center pb-5">
                About
                <br />
                {data.merchantID}
              </h4>
              {convertAboutMerchant(data.about)}
            </div>
          </div>
          {/* Merchant About Box End */}
        </div>
      </div>

      {/* Footer Start */}
      <FooterBar />
      {/* Footer End */}
    </HelmetProvider>
  );
}
