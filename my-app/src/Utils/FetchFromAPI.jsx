const apiKey = import.meta.env.VITE_REACT_APP_API_KEY

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, Options) => {
    const response = await fetch(url, Options)
    const data = await response.json()
    return data
}
