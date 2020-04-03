$().ready(everything);

function everything() {
    fetch("raw.githubusercontent.com/vikramdurai/badblog/master/posts.txt")
        .then((d) => console.log(d))
};
