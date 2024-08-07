import { Link } from "react-router-dom";

const PageLinks = ({ links, size, weight, space }) => {
  return (
    <div
      className={`flex lg:flex-row flex-col md:space-x-${
        space ? space : "4"
      } xl:items-center md:text-${size} font-${weight}`}
    >
      {links.map((link) => (
        <Link
          to={link.href}
          className="top-banner-links relative hover:text-nav-highlight hover:underline md:ms-4"
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default PageLinks;
