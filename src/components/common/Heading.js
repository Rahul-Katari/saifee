const Heading = ({ text, size, left, uppercase, center }) => {
  size = size ? size : "2xl";
  left = left ? "highlight-border-left" : "";
  uppercase = uppercase ? "uppercase" : "";
  center = center ? "text-center" : "";
  return (
    <h3
      data-aos="fade-right"
      className={`text-theme text-${size} font-medium highlight-border ${left} ${uppercase} ${center} mb-4`}
    >
      {text}
    </h3>
  );
};
export default Heading;
