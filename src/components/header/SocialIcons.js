import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutube,
} from "@tabler/icons-react";

const icons = [
  {
    name: IconBrandFacebookFilled,
    href: "https://www.facebook.com/drmanasamynepally",
  },
  {
    name: IconBrandInstagram,
    href: "https://www.instagram.com/drmanasamynepally/",
  },
  { name: IconBrandTwitterFilled, href: "https://twitter.com/manasamynepally" },
  {
    name: IconBrandLinkedin,
    href: "https://www.linkedin.com/company/96949237/admin/feed/posts/",
  },
  { name: IconBrandYoutube, href: "https://www.youtube.com" },
];

const SocialIcons = ({ space }) => {
  return (
    <div className={`flex space-x-2`}>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href}
          target="_blank"
          className="border rounded-full p-1"
        >
          <icon.name size={14} />
        </a>
      ))}
    </div>
  );
};
export default SocialIcons;
