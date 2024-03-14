import { Link } from "react-router-dom";

const MoreBtn = ({ btnText, href, btn, align }) => {
  return (
    <div className={`flex justify-${align}`}>
      <Link to={href} className="btn-primary">
        {btnText}
      </Link>
    </div>
  );
};
export default MoreBtn;
