const Button = ({ btnText, reqType, setReqType, buttonRef }) => {
	return (
		<button
			className={btnText === reqType ? 'selected' : null}
			type='button'
			ref={btnText === 'users' ? buttonRef : null}
			onClick={() => setReqType(btnText)}
		>
			{btnText}
		</button>
	)
}

export default Button
