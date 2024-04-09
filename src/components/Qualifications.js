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
        </ul>
        <FormatHtml htmlString={extrainfo} />
      </div>
    </section>
  );
};
export default Qualifications;
