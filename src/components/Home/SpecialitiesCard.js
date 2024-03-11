const SpecialitiesCard = ({ imgSrc, text1, text2 }) => {
  return (
    <>
      <div className="rounded-lg shadow-xl text-center p-3 py-8 relative specialities-card">
        <img src={imgSrc} alt="Specialities" className="m-auto" />
        <p className=" pt-4">{text1}</p>
        <p className="">{text2}</p>
      </div>
    </>
  );
};
export default SpecialitiesCard;
