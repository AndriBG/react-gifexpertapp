export const getFetchGifs = async (category) => {

    const apiKey = 'cD7tPYIMGAaxvCi3ESVNUoH7DMs6S5QJ',
    limit = 10,
    url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

    const resp = await fetch(url);

    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }) => {
        return {
            id,
            title,
            // El operador "?" es para verificar que si images es correcto, entonces la utilize
            url: images?.downsized_medium.url
        }
    })

    return gifs;
}