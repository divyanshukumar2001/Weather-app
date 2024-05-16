const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=329fc2313b1b4280b52210807241605"

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`)
  return await response.json()
}

export const getWeatherDataForLocation = async (lat, lon) => {
  const response = await fetch(`${baseURL}&q=${lat},${lon}&aqi=yes`)
  return await response.json()
}
