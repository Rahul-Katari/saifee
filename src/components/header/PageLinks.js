import { Link } from "react-router-dom";

const PageLinks = ({ links, size, weight, space }) => {
  return (
    <div
      className={`flex md:flex-row flex-col space-x-${
        space ? space : "4"
      } md:items-center text-${size} font-${weight}`}
    >
      {links.map((link) => (
        <Link
          to={link.href}
          className="top-banner-links relative hover:text-nav-highlight hover:underline"
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};
export default PageLinks;
