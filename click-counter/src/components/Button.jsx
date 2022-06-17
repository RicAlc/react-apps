function Button({ texto, isAddButton, btnAction }) {

	return (
		<div
			className={`btn  ${isAddButton ? "add-btn" : "reset-btn"}`}
			onClick={btnAction}
		>
			{texto}
		</div>
	)
}
export default Button;