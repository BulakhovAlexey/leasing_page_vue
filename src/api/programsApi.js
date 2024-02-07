import axios from 'axios'

export async function getPrograms(page) {
	const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}`
	//const url = 'https://jsonplaceholder.typicode.com/posts'
	try {
		const response = await axios.get(url)
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}
