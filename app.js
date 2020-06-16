console.log("Let's get this party started!");




// api.giphy.com/v1/gifs/search	

async function getGif() {
    let search = $('input').val()

    // const res = await axios.get('api.giphy.com/v1/gifs/search', {
    //     params: {
    //         api_key: "wSS14UMISS9rBJYYQ5saGGWVWW351h1l",
    //         q: search
    //     }
    // })
    const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=wSS14UMISS9rBJYYQ5saGGWVWW351h1l&q=${search}`)
    let randomIndex = Math.floor(Math.random() * 25)
    console.log(res)
    let gif = res.data.data[randomIndex].images.original.url


    // console.log(gif)
    // $('#gifPlace').append(gif)

    $('<img>').attr('src', `${gif}`).appendTo('#gifPlace').addClass('m-1')
    search = $('input').val('')

}


$('#searchBtn').on('click', function (e) {
    e.preventDefault()
    getGif()
})
$('#removeBtn').on('click', function (e) {
    e.preventDefault()
    $('img').remove()
})