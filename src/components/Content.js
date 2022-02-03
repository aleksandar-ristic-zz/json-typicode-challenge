const Content = ({ listItems, fetchError }) => {
	return (
		<ul>
			{fetchError && <p className='error'>{fetchError}</p>}
			{listItems &&
				!fetchError &&
				listItems.map(item => <li key={item.id}>{JSON.stringify(item)}</li>)}
		</ul>
	)
}

export default Content
