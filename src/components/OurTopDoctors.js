import uday from "../assets/images/doctors/uday-new.png";
import manasa from "../assets/images/doctors/manasa-new.png";
import { Link } from "react-router-dom";
import MoreBtn from "./common/MoreBtn";

const OurTopDoctors = () => {
  return (
    <div>
      <div className="md:mb-[350px] mb-[700px]">
        <div className="bg-theme md:m-12  m-4 md:mx-60 rounded-[50px] md:px-20 md:pt-16 p-6 pb-60 relative flex flex-col items-center">
          <div className="grid md:grid-cols-5 text-white">
            <div className="md:text-4xl text-2xl mb-2  font-medium col-span-3">
              <h2>Meet Our Top Doctors</h2>
              <h2>and Get Treatment</h2>
            </div>
            <p className="col-span-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div className="absolute md:top-[180px] top-[210px] md:mx-16 mx-6">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="shadow-2xl p-5 rounded-xl flex flex-col bg-white ">
                <img src={manasa} className="rounded-lg" />
                <div>
                  <h3 className="md:text-2xl text-xl font-semibold mt-4">
                    Dr. Manasa Mynepally
                  </h3>
                  <p className="my-4">
                    M.D,D.M ENDOCRINOLOGY (Gold Medalist) Consultant
                    Endocrinologist & Diabetologist
                  </p>
                  <MoreBtn
                    align={"end"}
                    btn={"primary"}
                    btnText={"View More"}
                    href={"/bestDoctorsDetails"}
                    round={"full"}
                  />
                </div>
              </div>
              <div className="shadow-2xl p-5 rounded-xl flex flex-col bg-white">
                <img src={uday} className="rounded-lg" />
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mt-4">
                    DR. G UDAY KIRAN
                  </h3>
                  <p className="my-4 ">
                    MS, FMAS, MAGES, EFIAGES, FALS (ROBOTIC) General and
                    Laparoscopic Surgeon
                  </p>
                  <MoreBtn
                    align={"end"}
                    btn={"primary"}
                    btnText={"View More"}
                    href={"/bestDoctorsDetails"}
                    round={"full"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTopDoctors;
