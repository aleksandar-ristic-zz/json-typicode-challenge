import Button from './Button'
import ButtonView from './ButtonView'

const Header = ({ reqType, setReqType, buttonRef, listView, setListView }) => {
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
			<ButtonView listView={listView} setListView={setListView} />
		</form>
	)
}

export default Header
