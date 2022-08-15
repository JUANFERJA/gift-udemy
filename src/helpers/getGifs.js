export const getGifs = async(category) =>{
        
    const apiKey = "wckPrZlt1gRtSchzj11m1RtHgG9FxZs1";
    const searchParam = category ; 
    const limitParam = 20 ; 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchParam}&limit=${limitParam}&offset=0&rating=g&lang=en`;
   
    const response = await fetch( url );
    const { data } = await response.json();
    
    const gifs = data.map(elemento =>({

        id : elemento.id, 
        titulo : elemento.title, 
        url : elemento.images.downsized_medium.url
    }));

    return gifs;
}
