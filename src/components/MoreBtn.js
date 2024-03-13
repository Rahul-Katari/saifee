import { Link } from "react-router-dom";

const MoreBtn = ({ btnText, href }) => {
  return (
    <Link to={href} className="btn-primary">
      {btnText}
    </Link>
  );
};
export default MoreBtn;
