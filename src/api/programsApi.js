import axios from 'axios'

export async function getPrograms(page) {
	const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}`
	try {
		const response = await axios.get(url)
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}

export async function getOneProgramById(id) {
	const url = `https://jsonplaceholder.typicode.com/posts/${id}`
	try {
		const response = await axios.get(url)
		return response.data
	} catch (error) {
		console.log(error)
		throw error
	}
}
