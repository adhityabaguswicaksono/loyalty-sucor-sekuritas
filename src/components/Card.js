import { Link } from 'react-router-dom';

export default function Card(props) {
  const element = props.data;

  return (
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
        <h3 className="text-xl text-start md:text-center self-center">
          {element.merchantID}
        </h3>
      </div>
    </Link>
  );
}
