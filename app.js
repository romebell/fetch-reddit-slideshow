fetch("https://www.reddit.com/r/todayilearned/top.json?count=N&after=t3_XXXXX")
.then(response => {
    return response.json();
})
.then (data => {
    console.log(data);
})