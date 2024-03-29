import uday from "../assets/images/doctors/uday-new.png";
import manasa from "../assets/images/doctors/manasa-new.png";
import { Link } from "react-router-dom";
import MoreBtn from "./common/MoreBtn";

const doctorDetails = [
  {
    doctor: "Manasa Mynepally",
    imgSrc: manasa,
    qualifications: "M.D,D.M ENDOCRINOLOGY (Gold Medalist)",
    specialization: "Consultant Endocrinologist & Diabetologist",
    slugName: "manasa",
    detailHref: "/bestDoctorsDetailsManasa",
  },
  {
    doctor: "G UDAY KIRAN",
    imgSrc: uday,
    qualifications: "MS, FMAS, MAGES, EFIAGES, FALS (ROBOTIC)",
    specialization: "General and Laparoscopic Surgeon",
    slugName: "uday",
    detailHref: "/bestDoctorsDetailsUday",
  },
];

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
              {doctorDetails.map((doctor, index) => {
                return (
                  <div
                    key={index}
                    className="shadow-2xl p-5 rounded-xl flex flex-col bg-white "
                  >
                    <img src={doctor.imgSrc} className="rounded-lg" />
                    <div>
                      <h3 className="md:text-2xl text-xl font-semibold mt-4">
                        Dr. {doctor.doctor}
                      </h3>
                      <p className="mt-4">{doctor.qualifications}</p>
                      <p className="mb-4">{doctor.specialization}</p>
                      <MoreBtn
                        align={"end"}
                        btn={"primary"}
                        btnText={"View More"}
                        href={doctor.detailHref}
                        round={"full"}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OurTopDoctors;
