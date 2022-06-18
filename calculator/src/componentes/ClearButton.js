const ClearButton = (props) => {
  return (
    <div className="btn clear" onClick={props.clearHandler}>
      {props.children}
    </div>
  );
};
export default ClearButton;
