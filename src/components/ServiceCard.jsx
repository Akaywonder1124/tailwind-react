const ServiceCard = ({ label, imgURL, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[300px] sm:min-w-[300px]
      max-sm:w-[100%]
     w-full rounded-[20px] shadow-3xl px-10 py-16"
    >
      <div className="w-11 h-11 flex justify-center item-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin font-bold text-lg">{label}</h3>
      <p className="break-word font-montserrat mt-3 max-w-sm">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
