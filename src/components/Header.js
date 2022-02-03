import Button from './Button'

const Header = ({ reqType, setReqType, buttonRef }) => {
	return (
		<form onSubmit={e => e.preventDefault()}>
			<Button
				buttonRef={buttonRef}
				btnText={'users'}
				reqType={reqType}
				setReqType={setReqType}
			/>
			<Button btnText={'posts'} reqType={reqType} setReqType={setReqType} />
			<Button btnText={'comments'} reqType={reqType} setReqType={setReqType} />
		</form>
	)
}

export default Header
