fetch("http://api.reddit.com/hot.json")
//("https://www.reddit.com/search.json?q=$%7Bvalue%7D+nsfw:no")
//("https://www.reddit.com/r/todayilearned/top.json?count=N&after=t3_XXXXX")
.then(response => {
    return response.json();
})
.then (data => {
    console.log(data);
    let allArticles = data.data.children;
    console.log(allArticles);

    //I'm trying to loop through the articles and return each of them
    for (i = 0; i < allArticles.length; i++) {
        const loop = allArticles[i];
        console.log(loop);
        return loop
    }
})
