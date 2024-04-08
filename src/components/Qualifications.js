import FormatHtml from "./FormatHtml";
import Heading from "./common/Heading";

const Qualifications = ({
  qualifications,
  experience,
  membership,
  extrainfo,
}) => {
  return (
    <section>
      <div>
        <Heading text={"Qualification"} left={true} />
        <ul className="list-disc-default text-sm ps-4">
          {qualifications?.map((qual, index) => {
            return <li>{`${qual?.degree}, ${qual.institution}`}</li>;
          })}
          {/* <li>
            MBBS, Gandhi Medical College, University of Health Sciences,
            Hyderabad in 1996
          </li>
          <li>
            Intern - Internal Medicine , St. Barnabas Medical Centre Livingston,
            NJ, USA (1998–1999)
          </li>
          <li>
            Resident – Internal Medicine , St. Barnabas Medical Centre
            Livingston, NJ USA (1999–2001)
          </li>
          <li>
            Fellowship in Haematology and Oncology Caritas St. Elizabeth’s
            Medical Centre Tufts University School of Medicine Boston MA USA
            (2002–2005)
          </li>
          <li>
            Chief fellow – Sub-speciality of Haematology and Oncology Caritas St
            Elizabeth’s Medical Centre Tufts University School of Medicine
            Boston MA USA (2002–2005)
          </li> */}
        </ul>

        <h2 className="text-theme text-xl">Experience</h2>
        <ul className="list-disc-default text-sm ps-4">
          {experience?.map((exp, index) => {
            return (
              <li key={exp?._id}>
                {exp.jobposition + " " + exp.company + exp.location}
              </li>
            );
          })}
          {/* <li>Medical Oncologists Care Hospital Hyderabad</li> */}
        </ul>
        <FormatHtml htmlString={extrainfo} />

        <h2 className="text-theme text-xl">Memberships</h2>
        <ul className="list-disc-default text-sm ps-4">
          <li>European Society of Medical Oncology</li>
          <li>Indian Medical Association</li>
        </ul>

        <h2 className="text-theme text-xl">Research Presentation</h2>
        <ul className="list-disc-default text-sm ps-4">
          <li>
            26th Annual meeting of American Society of Apheresis ASFA 2005
            Plenary Session Safety and Efficacy of Peripheral Blood Progenitor
            cell Mobilization and collection in Patients with Advanced Coronary
            Heart Disease
          </li>
          <li>
            46th Annual Meeting American Society Hematology ASH 2005 Practice
            Forum The Business Practice The Evolving State Hematology Practice
            Progress Challenges 2004 Advocacy Efforts
          </li>
          <li>
            {" "}
            Sinha S Schneider D Aish L Oo TH Morphologic heterogeneity Acute
            Promyelocytic Leukemia Annual Research Day Caritas St Elizabeth’s
            Med...
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Qualifications;
