import SpecialitiesCard from "./home/SpecialitiesCard";
import gs from "../assets/images/specialities/general-surgery/General Surgery.png";
import lapro from "../assets/images/specialities/general-surgery/Laparoscopic GI-Surgery.png";
import colorec from "../assets/images/specialities/general-surgery/Colorectal-Surgery.png";
import gallbladder from "../assets/images/specialities/general-surgery/Gallbladder and Biliary-Tract Surgery.png";
import hernia from "../assets/images/specialities/general-surgery/Hernia Surgery.png";
import bariatric from "../assets/images/specialities/general-surgery/Bariatric Surgery-Done.png";
import trauma from "../assets/images/specialities/general-surgery/Trauma-Surgery.png";
import Esophageal from "../assets/images/specialities/general-surgery/Esophageal-Surgery.png";
import smallBowl from "../assets/images/specialities/general-surgery/Small Bowel Surgery.png";
import pancreatic from "../assets/images/specialities/general-surgery/Pancreatic Surgery.png";
import liver from "../assets/images/specialities/general-surgery/Liver Surgery.png";
import gastric from "../assets/images/specialities/general-surgery/Gastric-Surgery.png";
import piles from "../assets/images/specialities/general-surgery/Piles surgery.png";
import fistula from "../assets/images/specialities/general-surgery/Fistula surgery.png";
import diabetic from "../assets/images/specialities/general-surgery/Diabetic Food-Treatment.png";
import breast from "../assets/images/specialities/general-surgery/Breast Lump-Treatment.png";

import thyroid from "../assets/images/specialities/endocrinology/Thyroid-Treatments.png";
import diabetes from "../assets/images/specialities/endocrinology/Diabetes-1 Diabetes 2 Diabetes.png";
import menopause from "../assets/images/specialities/endocrinology/Menopause.png";
import pituitary from "../assets/images/specialities/endocrinology/Pituitary-Disorders.png";
import osteoporosis from "../assets/images/specialities/endocrinology/Osteoporosis.png";
import adrenal from "../assets/images/specialities/endocrinology/Adrenal-Conditions.png";
import endocrine from "../assets/images/specialities/endocrinology/Endocrine-Cancers.png";
import endocrineHeart from "../assets/images/specialities/endocrinology/Endocrine Related-Heart Conditions.png";
import harmone from "../assets/images/specialities/endocrinology/Harmone-Disorders - Copy.png";
import short from "../assets/images/specialities/endocrinology/Short-Stature.png";
import growth from "../assets/images/specialities/endocrinology/Growth Harmone-Deficiency.png";
import pcos from "../assets/images/specialities/endocrinology/PCOS.png";
import fertility from "../assets/images/specialities/endocrinology/Fertility-Disorders.png";
import obesity from "../assets/images/specialities/endocrinology/Obesity.png";
import nutrition from "../assets/images/specialities/endocrinology/Nutrition.png";

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

  const endoData = [
    {
      id: 0,
      text1: "Thyroid Treatments",
      content: "Content for Thyroid Treatments",
      imgSrc: thyroid,
    },
    {
      id: 1,
      text1: "Diabetes",
      text2: "I Diabetes / 2 Diabetes",
      content: "<LoremIpsumComponent />",
      imgSrc: diabetes,
    },
    {
      id: 2,
      text1: "Menopause",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      imgSrc: menopause,
    },
    {
      id: 3,
      text1: "Pituitary Disorders",
      content: "Content for Pituitary Disorders",
      imgSrc: pituitary,
    },
    {
      id: 4,
      text1: "Osteoporosis",
      content: "Content for Osteoporosis",
      imgSrc: osteoporosis,
    },
    {
      id: 5,
      text1: "Adrenal Conditions",
      content: "Content for Adrenal Conditions",
      imgSrc: adrenal,
    },
    {
      id: 6,
      text1: "Endocrine Cancers",
      content: "Content for Endocrine Cancers",
      imgSrc: endocrine,
    },
    {
      id: 7,
      text1: "Endocrine-Related",
      text2: "Heart Conditions",
      content: "Content for Endocrine-Related Heart Conditions",
      imgSrc: endocrineHeart,
    },
    {
      id: 8,
      text1: "Hormone Disorders",
      content: "Content for Hormone Disorders",
      imgSrc: harmone,
    },
    {
      id: 9,
      text1: "Short Stature",
      content: "Content for Short Stature",
      imgSrc: short,
    },
    {
      id: 10,
      text1: "Growth Hormone",
      text2: "Deficiency",
      content: "Content for Growth Hormone Deficiency",
      imgSrc: growth,
    },
    { id: 11, text1: "PCOS", content: "Content for PCOS", imgSrc: pcos },
    {
      id: 12,
      text1: "Fertility Disorders",
      content: "Content for Fertility Disorders",
      imgSrc: fertility,
    },
    {
      id: 13,
      text1: "Obesity",
      content: "Content for Obesity",
      imgSrc: obesity,
    },
    {
      id: 14,
      text1: "Nutrition",
      content: "Content for Nutrition",
      imgSrc: nutrition,
    },
  ];

  const generalData = [
    {
      id: 15,
      text1: "General Surgery",
      content: "Content for General Surgery",
      imgSrc: gs,
    },
    {
      id: 16,
      text1: "Laparoscopic GI",
      text2: "Surgery",
      content: "Content for Laparoscopic GI Surgery",
      imgSrc: lapro,
    },
    {
      id: 17,
      text1: "Colorectal Surgery",
      content: "Content for Colorectal Surgery",
      imgSrc: colorec,
    },
    {
      id: 18,
      text1: "Gallbladder and Biliary",
      text2: "Tract Surgery",
      content: "Content for Gallbladder and Biliary Tract Surgery",
      imgSrc: gallbladder,
    },
    {
      id: 19,
      text1: "Hernia Surgery",
      content: "Content for Hernia Surgery",
      imgSrc: hernia,
    },
    {
      id: 20,
      text1: "Bariatric Surgery",
      content: "Content for Bariatric Surgery",
      imgSrc: bariatric,
    },
    {
      id: 21,
      text1: "Trauma Surgery",
      content: "Content for Trauma Surgery",
      imgSrc: trauma,
    },
    {
      id: 22,
      text1: "Esophageal Surgery",
      content: "Content for Esophageal Surgery",
      imgSrc: Esophageal,
    },
    {
      id: 23,
      text1: "Small Bowel Surgery",
      content: "Content for Small Bowel Surgery",
      imgSrc: smallBowl,
    },
    {
      id: 24,
      text1: "Pancreatic Surgery",
      content: "Content for Pancreatic Surgery",
      imgSrc: pancreatic,
    },
    {
      id: 25,
      text1: "Liver Surgery",
      content: "Content for Liver Surgery",
      imgSrc: liver,
    },
    {
      id: 26,
      text1: "Gastric Surgery",
      content: "Content for Gastric Surgery",
      imgSrc: gastric,
    },
    {
      id: 27,
      text1: "Piles Surgery",
      content: "Content for Piles Surgery",
      imgSrc: piles,
    },
    {
      id: 28,
      text1: "Fistula Surgery",
      content: "Content for Fistula Surgery",
      imgSrc: fistula,
    },
    {
      id: 29,
      text1: "Diabetic Foot",
      text2: "Treatment",
      content: "Content for Diabetic Foot Treatment",
      imgSrc: diabetic,
    },
    {
      id: 30,
      text1: "Breast Lump",
      text2: "Treatment",
      content: "Content for Breast Lump Treatment",
      imgSrc: breast,
    },
  ];

  const specs = speciality === "endo" ? endoData : generalData;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 lg:gap-10 gap-5 max-sm:mx-4">
      {specs.map((spec, index) => (
        <SpecialitiesCard
          id={spec.id}
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
