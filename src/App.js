import { useState, useEffect, useRef } from 'react'
import Content from './components/Content'
import Header from './components/Header'

function App() {
	const API_URL = 'https://jsonplaceholder.typicode.com/'
	const [reqType, setReqType] = useState('users')
	const [listItems, setListItems] = useState([])
	const [fetchError, setFetchError] = useState(null)
	const [listView, setListView] = useState(true)

	const buttonRef = useRef()

	useEffect(() => {
		buttonRef.current.focus()
	}, [])

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await fetch(`${API_URL}${reqType}`)

				if (!response.ok)
					throw Error('There was problem in fetching data. Please reload.')

				const data = await response.json()
				setListItems(data)
				setFetchError(null)
			} catch (error) {
				setFetchError(error.message)
			}
		}

		;(async () => await fetchItems())()
	}, [reqType])

	return (
		<>
			<Header
				buttonRef={buttonRef}
				reqType={reqType}
				setReqType={setReqType}
				setListView={setListView}
				listView={listView}
			/>
			<Content
				listItems={listItems}
				fetchError={fetchError}
				listView={listView}
			/>
		</>
	)
}

export default App
