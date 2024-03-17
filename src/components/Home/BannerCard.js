const BannerCard = ({ imgSrc, title1, title2 }) => {
  return (
    <>
      <div className="rounded border-4 p-3 m-4 pb-0 text-center shadow-3xl border-theme flex flex-col justify-between">
        <div className="text-sm md:text-base">
          <h3 className=" font-medium">{title1}</h3>
          <h3 className=" font-medium">{title2}</h3>
        </div>
        <div className=" w-28 min-h-[80px] max-sm:w-24 max-sm:h-16 flex justify-center m-auto">
          <img
            src={imgSrc}
            alt="Card Image"
            className="m-auto mb-0  max-sm:object-contain"
          />
        </div>
      </div>
    </>
  );
};
export default BannerCard;