export const exerciseOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3f4e404b54mshe7c4caf3739c38fp1060fajsn1b7137ce84a0',
	}
};

export const fetchData = async (url,exerciseOptions) => {
    const response = await fetch(url, exerciseOptions);
    const data = await response.json()

    return data;
}