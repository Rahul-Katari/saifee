const SpecialitiesCard = ({ imgSrc, text1, text2 }) => {
  return (
    <>
      <div className="rounded-lg shadow-3xl text-center p-3 py-8 relative specialities-card">
        <img src={imgSrc} alt="Specialities" className="m-auto" />
        <p className="text-lg pt-4">{text1}</p>
        <p className="text-lg">{text2}</p>
      </div>
    </>
  );
};
export default SpecialitiesCard;
