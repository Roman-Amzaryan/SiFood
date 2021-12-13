let id = location.hash.slice(1)

$.getJSON('data.json', data => {
    let post = data[id-1]

    $('h3').html(post.title)
    $('.post-content-info p').html(post.body)
    $('img').attr('src', `./image/${post.image}`)
})
