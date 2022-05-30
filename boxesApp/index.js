const Box = (props) => {
  const { className, name } = props;
  const classProp = `box ${className}`;
  return (
    <div className={classProp}>
      <p>{name}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <h1>Boxes</h1>
    <div className="boxes-container">
      <Box className="small-box" name="small" />
      <Box className="medium-box" name="Medium" />
      <Box className="large-box" name="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
