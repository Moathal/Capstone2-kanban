export const getAnime = async (url) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '27a477cbdamsh49c8e3678f442ecp14a4f5jsn0efcece4205d',
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com',
    },
  };
  const response = await fetch(url, options).then((res) => res.json());
  return response.data;
};

export const getLikes = async (url) => {
  const response = await fetch(url).then((res) => res.json());
  return response;
};