const Heading = ({ text, size }) => {
  size = size ? size : "2xl";
  return (
    <h3
      className={`text-theme text-${size} font-medium highlight-border highlight-border-left mb-4`}
    >
      {text}
    </h3>
  );
};
export default Heading;
