import Link from "next/link";
import WhiteButton from "../smallComponents/whiteButton";

const SingleCard = ({ site }) => {
  return (
    <div className="bg-green-700 rounded-lg border-4 border-green-500 shadow-lg shadow-green-500">
      <div className="overflow-hidden">
        <img
          src={site?.img}
          alt={site?.name}
          className="h-52 bg-cover rounded-t-lg scale-100 hover:scale-125 transition-all duration-1000"
        />
      </div>
      <div className="">
        <div className="flex flex-col items-center justify-between p-4">
          <h2 className="text-xl font-bold text-white">{site?.name}</h2>
          <p className="text-green-200 text-sm text-center my-1">
            {site?.description.slice(0, 50)}
          </p>
          <Link href={`/categories/product/${site?.id}`} className="mt-4">
            <WhiteButton
              text={"View Details"}
              css={"bg-green-900 text-white"}
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
