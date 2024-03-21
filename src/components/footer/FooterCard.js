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
  index,
}) => {
  return (
    <div
      className={`md:px-8 px-4 my-2 md:my-8 text-center ${
        index < 2 ? "md:border-r-2 border-[#99999999] border-dashed" : ""
      }`}
    >
      <div className="bg-footer-highlight inline-block rounded-full p-2 text-white">
        <img src={iconSrc} className="h-7 w-7 m-1" />
      </div>
      <div className="font-medium  text-base md:my-4 md:highlight-border">
        {title}
      </div>
      <p className="mt-2 text-gray-500 text-sm max-sm:hidden">{description1}</p>
      <p
        className={`${
          description3
            ? "mt-2 text-gray-500 text-sm"
            : "text-gray-500 text-sm max-sm:hidden"
        }`}
      >
        {description2}
      </p>
      {description3 ? (
        <p className="mt-2 text-gray-500 text-sm">{description3}</p>
      ) : (
        ""
      )}
      {description4 ? (
        <p className="mt-2 text-gray-500 text-sm">{description4}</p>
      ) : (
        ""
      )}
      {timing1 ? (
        <div
          className={
            timing2
              ? "border border-black text-xs inline-flex rounded-full md:px-8 px-4 py-1 font-semibold min-h-12 mt-4"
              : "items-center border border-black text-xs inline-flex rounded-full md:px-8 px-4 py-1 font-semibold min-h-12 mt-4"
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
