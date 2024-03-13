import SpecialitiesCard from "./Home/SpecialitiesCard";
import banner from "../assets/images/excellence-banner.png";
import DoctorServices from "./DoctorServices";

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
        <h1 className="uppercase text-theme text-3xl font-medium my-12 text-center highlight-border">
          endocrinology
        </h1>
        <DoctorServices speciality={"endo"} />
        <h1 className="uppercase text-theme text-3xl font-medium my-12 text-center highlight-border">
          general Surgery
        </h1>
        <DoctorServices speciality={""} />
      </div>
    </div>
  );
};

export default Excellence;
