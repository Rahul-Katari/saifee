import React from "react";

const FooterCard = ({
  iconSrc,
  title,
  description1,
  description2,
  description3,
  description4,
  timing1,
  timing2,
}) => {
  return (
    <div className="md:p-8 p-4 text-center">
      <div className="bg-footer-highlight inline-block rounded-full p-2 text-white">
        <img src={iconSrc} className="h-7 w-7 m-1" />
      </div>
      <div className="font-medium  text-xl my-4">{title}</div>
      <p className="mt-2 text-gray-500">{description1}</p>
      <p className={`${description3 ? "mt-2 text-gray-500" : "text-gray-500"}`}>
        {description2}
      </p>
      {description3 ? <p className="mt-2 text-gray-500">{description3}</p> : ""}
      {description4 ? <p className="mt-2 text-gray-500">{description4}</p> : ""}
      {timing1 ? (
        <div
          className={
            timing2
              ? "border border-black text-sm inline-flex rounded-full px-8 py-1 font-semibold min-h-12 mt-4"
              : "items-center border border-black text-sm inline-flex rounded-full px-8 py-1 font-semibold min-h-12 mt-4"
          }
        >
          <div className="text-[#FF744B]">Timing :</div>
          <div className="text-right">
            <div>{timing1}</div>
            <div>{timing2}</div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FooterCard;
