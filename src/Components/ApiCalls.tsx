const imageFetch = () => {
    return fetch('https://api.harvardartmuseums.org/object?size=30&apikey=02dc6b3b-1185-4e3f-91fa-675c61c02e3f')
        .then(response => response.json())
        .then(data => console.log(data.records))
}


export default imageFetch
