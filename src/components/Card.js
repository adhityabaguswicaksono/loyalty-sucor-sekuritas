import { Link } from "react-router-dom";

export default function Card(props) {
  const element = props.data;

  return (
    <Link
      to={`./merchant-detail`}
      state={{ element }}
      key={element.merchantID}
      data-aos="fade-up"
    >
      {/* Card Start */}
      <div className="group flex flex-row md:flex-col grow md:grow-0 md:w-80 md:h-full bg-sucor-500 p-4 md:px-8 md:py-12 rounded-md gap-4 md:gap-4 text-white outline outline-1 outline-sucor-500 duration-300 hover:bg-sucor-700 hover:outline-sucor-700">
        <img
          src={element.img}
          className="rounded-full bg-white w-24 h-24 md:w-52 md:h-52 bg-cover self-center"
          alt={element.merchantID}
        />
        <h3 className="text-xl text-start md:text-center self-center">
          {element.merchantID}
        </h3>
      </div>
      {/* Card Finish */}
    </Link>
  );
}
