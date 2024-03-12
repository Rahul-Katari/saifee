import { Link } from "react-router-dom";

const BreadCrumb = ({ linkData }) => {
  return (
    <div className="bg-gradient-to-r from-[#FF744B] via-[#FF744B] to-[rgba(255, 116, 75, 0.52)] uppercase p-3 md:ps-16 text-white">
      {linkData.map((link) => {
        return (
          <>
            <Link
              to={link.href}
              className="hover:text-blue-900 hover:font-medium"
            >
              {link.title}
            </Link>
            <span className="px-2">{">"}</span>
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
