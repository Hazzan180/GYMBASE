const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
const apiKey2 = import.meta.env.VITE_REACT_APP_API_KEY2
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const VideoOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': apiKey2,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};


export const fetchData = async (url, Options) => {
    const response = await fetch(url, Options)
    const data = await response.json()
    return data
}
