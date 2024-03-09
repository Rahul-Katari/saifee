const BannerCard = ({ imgSrc, title1, title2 }) => {
  return (
    <>
      <div className="rounded border-4 p-3 pb-0 text-center shadow-3xl border-theme flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-medium">{title1}</h3>
          <h3 className="text-lg font-medium mb-7">{title2}</h3>
        </div>
        <img src={imgSrc} alt="Card Image" className="m-auto mb-0" />
      </div>
    </>
  );
};
export default BannerCard;
