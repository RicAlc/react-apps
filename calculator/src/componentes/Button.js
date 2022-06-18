function Button(props) {
  const isOperator = (value) => {
    return isNaN(value) && value != "." && value != "=";
  };
  return (
    <div
      className={`btn ${
        isOperator(props.children) ? "operator" : null
      }`.trimEnd()}
      onClick={() => props.clickHandler(props.children)}
    >
      {props.children}
    </div>
  );
}
export default Button;
