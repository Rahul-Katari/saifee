import SpecialitiesCard from "./Home/SpecialitiesCard";
import banner from "../assets/images/excellence-banner.png";

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

const Excellence = () => {
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
  return (
    <div>
      <div>
        <img src={banner} className="w-full" />
      </div>
      <div className="max-w-7xl m-auto">
        <h1 className="uppercase text-theme text-4xl font-medium my-12 text-center">
          endocrinology
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-5 mx-4">
          {endocrinolgyData.map((spec, index) => (
            <SpecialitiesCard
              imgSrc={spec.imgSrc}
              key={index}
              text1={spec.text1}
              text2={spec.text2}
            />
          ))}
        </div>
        <h1 className="uppercase text-theme text-4xl font-medium my-12 text-center">
          general Surgery
        </h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-20 gap-5 mx-4">
          {generalsurgeryData.map((spec, index) => (
            <SpecialitiesCard
              imgSrc={spec.imgSrc}
              key={index}
              text1={spec.text1}
              text2={spec.text2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Excellence;
