// takes in ?by=kati-frantz and returns { by: 'kati-frantz' }
export const parse = (queryString) => {
	if (queryString[0] === '?') {
		queryString = queryString.substring(1)
	}
	let queries = queryString.split("&")
	const params = {}

	queries.forEach(query => {
		const queryObject = query.split('=')
		params[queryObject[0]] = queryObject[1]
	})

	return params
}

const removeEmpty = (obj) => {
	Object.keys(obj).forEach((key) => (obj[key] === null || obj[key] === undefined) && delete obj[key])

	return obj
}

// takes in { by: 'kati-frantz' } and returns ?by=kati-frantz 
export const stringify = (queryObject) => {
	queryObject = removeEmpty(queryObject)
	let queryString = ''
	for (let element of Object.keys(queryObject)) {
		queryString = `${queryString}&${element}=${queryObject[element]}`
	}

	return queryString.substring(1)
}