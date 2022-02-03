import List from './List'

import Table from './Table'

const Content = ({ listItems, fetchError, listView }) => {
	return (
		<>
			{fetchError && <p className='error'>{fetchError}</p>}
			{listItems && !fetchError && listView ? (
				<List items={listItems} />
			) : (
				<Table items={listItems} />
			)}
		</>
	)
}

export default Content
