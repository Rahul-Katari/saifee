const IconText = ({ iconText, iconSrc, text1, text2 }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-5">
        {iconText ? (
          <h3 className="text-highlight text-4xl font-bold">{iconText}</h3>
        ) : (
          <img src={iconSrc} className="w-10 h-10 object-contain" alt="locate Clinic" />
        )}
      </div>
      <p>{text1}</p>
      <p>{text2}</p>
    </div>
  );
};
export default IconText;
