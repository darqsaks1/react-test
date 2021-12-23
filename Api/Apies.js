const getInfoKey = "3b01bb68b0665b";
const unsplashKet = "_dcz46V0sESBE0U7FybfY9ZgrlsJcwcNxNEDw4jwj9g";
export const getIpInfo = async () => {
  const url = `https://ipinfo.io/json?token=${getInfoKey}`;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getLinkToImage = async (season) => {
  const url = `https://api.unsplash.com/photos/random?query=winter&client_id=${unsplashKet}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.urls.regular;
};
