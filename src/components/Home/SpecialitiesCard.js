import { Link } from "react-router-dom";

const SpecialitiesCard = ({ id, imgSrc, text1, text2 }) => {
  return (
    <>
      <Link
        to={`/excellenceDetails/${id}`}
        className="rounded-lg shadow-3xl text-center md:p-3 p-2 md:py-6 relative specialities-card"
      >
        <img
          src={imgSrc}
          alt="Specialities"
          className="m-auto w-16 h-12 object-contain"
        />
        <p className="pt-4">{text1}</p>
        <p>{text2}</p>
      </Link>
    </>
  );
};
export default SpecialitiesCard;
