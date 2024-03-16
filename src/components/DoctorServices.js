import SpecialitiesCard from "./home/SpecialitiesCard";

// context for endocrinology folder
const endocrinolgyContext = require.context(
  "../assets/images/specialities/endocrinology",
  false,
  /\.(png|jpe?g|svg)$/
);
// context for generalsurgery folder
const generalsurgeryContext = require.context(
  "../assets/images/specialities/general-surgery",
  false,
  /\.(png|jpe?g|svg)$/
);

const DoctorServices = ({ speciality }) => {
  // importing all images of endocrinology
  const endocrinolgyData = endocrinolgyContext.keys().map((imagePath) => {
    const imageName = imagePath.replace("./", "");
    const [text1, text2] = imageName.split("-");
    return {
      imgSrc: endocrinolgyContext(imagePath),
      text1: text1.split(".")[0],
      text2: text2 ? text2.split(".")[0] : "",
    };
  });
  // importing all images of generalsurgery
  const generalsurgeryData = generalsurgeryContext.keys().map((imagePath) => {
    const imageName = imagePath.replace("./", "");
    const [text1, text2] = imageName.split("-");
    return {
      imgSrc: generalsurgeryContext(imagePath),
      text1: text1.split(".")[0],
      text2: text2 ? text2.split(".")[0] : "",
    };
  });
  const spec = speciality === "endo" ? endocrinolgyData : generalsurgeryData;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-10 gap-5 max-sm:mx-4">
      {spec.map((spec, index) => (
        <SpecialitiesCard
          imgSrc={spec.imgSrc}
          key={index}
          text1={spec.text1}
          text2={spec.text2}
        />
      ))}
    </div>
  );
};
export default DoctorServices;
