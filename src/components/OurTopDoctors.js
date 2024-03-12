import doctor from "../assets/images/about/doctors.png";
import doctorManasa from "../assets/images/about/doctor-manasa.png";

const OurTopDoctors = () => {
  return (
    <div>
      <div className="md:mb-[650px] mb-[900px]">
        <div className="bg-theme md:m-12 m-4 md:mx-24 rounded-[50px] md:px-16 md:pt-16 p-6 pb-80 relative flex flex-col items-center">
          <div className="grid md:grid-cols-5 text-white">
            <div className="md:text-4xl text-3xl font-semibold col-span-3">
              <h2>Meet Our Top Doctors</h2>
              <h2>and Get Treatment</h2>
            </div>
            <p className="col-span-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
          </div>
          <div className="absolute md:top-[200px] top-[250px] md:mx-16 mx-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="shadow-2xl p-5 rounded-xl flex flex-col bg-white">
                <img src={doctorManasa} />
                <div>
                  <h3 className="text-2xl font-bold mt-4">
                    Dr. Manasa Mynepally
                  </h3>
                  <p className="my-4">
                    M.D,D.M ENDOCRINOLOGY (Gold Medalist) Consultant
                    Endocrinologist & Diabetologist
                  </p>
                  <div className="flex justify-end">
                    <a className="btn-primary">View More</a>
                  </div>
                </div>
              </div>
              <div className="shadow-2xl p-5 rounded-xl flex flex-col bg-white">
                <img src={doctor} />
                <div>
                  <h3 className="text-2xl font-bold mt-4">
                    DR. G UDAY KIRAN
                  </h3>
                  <p className="my-4 ">
                    MS, FMAS, MAGES, EFIAGES, FALS (ROBOTIC) General and
                    Laparoscopic Surgeon
                  </p>
                  <div className="flex justify-end">
                    <a className="btn-primary">View More</a>
                  </div>
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
