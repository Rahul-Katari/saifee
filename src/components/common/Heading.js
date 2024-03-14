const Heading = ({ text, size }) => {
  size = size ? size : "2xl";
  return (
    <h3
      className={`text-theme text-${size} font-semibold highlight-border highlight-border-left`}
    >
      {text}
    </h3>
  );
};
export default Heading;
