import { Link } from "react-router-dom";

const MoreBtn = ({ btnText, href, btn, align, round }) => {
  return (
    <div className={`flex justify-${align} me-4`}>
      <Link to={href} className={`btn-${btn} rounded-${round}`}>
        {btnText}
      </Link>
    </div>
  );
};
export default MoreBtn;
