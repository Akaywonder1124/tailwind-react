import { star } from "../assets/icons";

const PopularProductsCard = ({ imgURL, name, price }) => {
  return (
    <div className=" flex flex-col flex-1 w-full max-sm:w-full">
      <img src={imgURL} className="w-[282px] h-[282px]" />

      <div className="mt-8 flex gap-2">
        <img src={star} alt="rating" height={20} width={20} />
        <p className="text-slate-gray font-montserrat text-xl leading-normal">
          (4.5)
        </p>
      </div>
      <h3 className="font-[600] leading-normal font-palanquin mt-2 text-xl">
        {name}
      </h3>
      <p className="text-coral-red  font-[500] leading-normal font-montserrat">
        {price}
      </p>
    </div>
  );
};

export default PopularProductsCard;
