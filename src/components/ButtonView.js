const ButtonView = ({ listView, setListView }) => {
	return (
		<button
			type='button'
			style={{
				backgroundColor: listView ? '#364F6B' : '#FF2E63',
				color: 'aliceblue'
			}}
			onClick={() => setListView(!listView)}
		>
			{listView ? 'View Table' : 'View List'}
		</button>
	)
}

export default ButtonView
