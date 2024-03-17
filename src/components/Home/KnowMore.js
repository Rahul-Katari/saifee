import MoreBtn from "../common/MoreBtn";

const KnowMore = ({ doctor, imgSrc }) => {
  return (
    <div className="overflow-hidden md:ps-8">
      <div className="px-6 lg:px-8">
        <div className="mx-auto md:grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src={imgSrc} alt="Product screenshot" className="rounded-md" />
          </div>
          <div className="max-sm:mt-4 lg:pr-8 lg:pt-4 lg:col-span-3">
            <div className="">
              <h2 className="text-base font-medium leading-7 text-content text-xl know-about-line flex items-center">
                Know About
              </h2>
              <p className="md:my-3 mt-2 md:text-4xl text-2xl font-normal tracking-tight text-[#025CAF] sm:text-6xl">
                {doctor}
              </p>
              <div>
                <p className="font-medium py-1">M.D., D.M.(Gold Medalist)</p>
                <p className="text-red-600 text-base md:text-xl">
                  Diabetes, Thyroid & Endocrine Centre
                </p>
              </div>
              <p className="my-4 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <p className="my-4 text-gray-600">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Maiores impedit perferendis suscipit eaque, iste dolor
                cupiditate blanditiis ratione.
              </p>
              <div className="text-blue-900">
                <p className="text-xl underline">Specialities</p>
                <div className="grid md:grid-cols-2  list-disc text-sm">
                  <ul className="list-disc list-disc-default max-sm:mb-0 ps-4">
                    <li>Thyroid Treatments - Hypothyroidism</li>
                    <li>Diabetes - Type 1 Diabetes, Type 2 Diabetes</li>
                    <li>Menopause</li>
                    <li>Pituitary Disorders</li>
                    <li>Osteoporosis</li>
                    <li>Adrenal Conditions - Done</li>
                    <li>Endocrine Cancers</li>
                  </ul>
                  <ul className="list-disc list-disc-default max-sm:mt-0 ps-4">
                    <li>Endocrine-Related Heart Conditions</li>
                    <li>Hormone Disorders</li>
                    <li>Short Stature</li>
                    <li>Growth Hormone Deficiency</li>
                    <li>PCOS</li>
                    <li>Fertility Disorders</li>
                    <li>Obesity</li>
                    <li>Nutrition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MoreBtn
          btn={"theme"}
          btnText={"Read More"}
          href={"/doctorDetails"}
          align={"end"}
        />
      </div>
    </div>
  );
};
export default KnowMore;
